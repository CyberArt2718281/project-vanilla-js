import { ValidationUtils } from '../../utils/validation-utils'
import { ExpensesService } from '../../services/expenses-service'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { AuthUtils } from '../../utils/auth-utils'
import type { OpenNewRouteType } from '@/types/router/open-new-router.type'
import type { ValidateField } from '@/types/utils/validation-utils/validateField'
import type { ExpenseTypes } from '@/types/expenses/expenses-service/expenses.type'

export class EditExpense {
	readonly openNewRoute: OpenNewRouteType
	private originInputValue: string | null = null
	private userId: string | null = null
	private inputNameCategory: HTMLInputElement | null = null
	private saveButton: HTMLButtonElement | null = null
	private errorElement: HTMLElement | null = null
	private validationName: ValidateField[] = []
	constructor(openNewRoute: OpenNewRouteType) {
		this.openNewRoute = openNewRoute
		AuthUtils.initializeAuthentication(this.openNewRoute).then(
			isAuthenticated => {
				if (!isAuthenticated) {
					return
				}

				this.findElements()
				this.validationName = [
					{
						element: this.inputNameCategory as HTMLInputElement,
						options: {
							pattern: /^.+$/, // Простая валидация на непустое значение
						},
					},
				]

				this.userId = new URLSearchParams(window.location.search).get('id')
				if (!this.userId) {
					return this.openNewRoute('/')
				}
				this.getIncome().then()

				KeyboardUtils.setEnterHandler(() => {
					this.saveExpenseProcess().then()
				})
				if (this.saveButton) {
					this.saveButton.addEventListener(
						'click',
						this.saveExpenseProcess.bind(this)
					)
				}
			}
		)
	}

	findElements() {
		this.inputNameCategory = document.getElementById(
			'nameInput'
		) as HTMLInputElement
		this.saveButton = document.getElementById('saveButton') as HTMLButtonElement
		this.errorElement = document.getElementById(
			`input-error-${this.inputNameCategory.id
				.replace('Input', '')
				.toLowerCase()}`
		) as HTMLElement
	}

	private async getIncome(): Promise<void> {
		if (!this.userId) return
		const response: ExpenseTypes = await ExpensesService.getExpense(this.userId)
		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
				return
			} else {
				return
			}
		}
		if (
			!response.expense ||
			typeof response.expense !== 'object' ||
			!('title' in response.expense)
		)
			return

		if (this.inputNameCategory) {
			this.inputNameCategory.value = response.expense.title
		}
		this.originInputValue = response.expense.title
		return
	}

	async saveExpenseProcess() {
		if (!this.errorElement) return
		this.errorElement.style.display = 'none'
		if (!ValidationUtils.validateForm(this.validationName)) {
			this.errorElement.style.display = 'block'
			this.errorElement.innerText = 'Введите название'
			return
		}
		if (this.inputNameCategory?.value === this.originInputValue) {
			this.errorElement.style.display = 'block'
			this.errorElement.innerText = 'Изменений не произведено'
			return
		}
		if(!this.userId)return
		if(!this.inputNameCategory?.value) return
		const response = await ExpensesService.updateExpense(this.userId, {
			title: this.inputNameCategory.value.trim(),
		})

		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
			}
			return
		}

		this.openNewRoute('/expenses')
	}
}
