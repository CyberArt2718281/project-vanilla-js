import { ValidationUtils } from '../../utils/validation-utils'
import { ExpensesService } from '../../services/expenses-service'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { AuthUtils } from '../../utils/auth-utils'
import type { OpenNewRouteType } from '@/types/router/open-new-router.type'
import type { ValidateField } from '@/types/utils/validation-utils/validateField'
import type { ErrorTypes } from '@/types/services/error.type'
import type { Expense } from '@/types/expenses/expenses-service/expense.type'

export class CreateExpense {
	readonly openNewRoute: OpenNewRouteType
	private inputNameCategory: HTMLInputElement | null = null
	private nameValidation: ValidateField[] = []
	private saveButton: HTMLButtonElement | null = null
	private errorElement: HTMLElement | null = null
	constructor(openNewRoute: OpenNewRouteType) {
		this.openNewRoute = openNewRoute
		AuthUtils.initializeAuthentication(this.openNewRoute).then(
			isAuthenticated => {
				if (!isAuthenticated) {
					return
				}
				this.findElements()
				this.nameValidation = [
					{
						element: this.inputNameCategory as HTMLInputElement,
						options: { pattern: /^.+$/ },
					},
				]
				KeyboardUtils.setEnterHandler(() => {
					this.createExpenseProcess().then()
				})
				if (this.saveButton) {
					this.saveButton.addEventListener(
						'click',
						this.createExpenseProcess.bind(this)
					)
				}
			}
		)
	}

	private findElements(): void {
		this.inputNameCategory = document.getElementById(
			'nameInput'
		) as HTMLInputElement
		this.saveButton = document.getElementById('saveButton') as HTMLButtonElement
		this.errorElement = document.getElementById(
			`input-error-${this.inputNameCategory.id
				.replace('Input', '')
				.toLowerCase()}`
		)
	}

	private async getIncomesData(): Promise<null | Expense[] | ErrorTypes | []> {
		const response = await ExpensesService.getExpenses()
		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
				return null
			}
			return null
		}
		if (!response.expenses) {
			return []
		}
		return response.expenses
	}

	private async createExpenseProcess(): Promise<void> {
		if (!this.errorElement) return
		if (this.errorElement) {
			this.errorElement.style.display = 'none'
		}

		// Сначала проверяем валидацию
		if (!ValidationUtils.validateForm(this.nameValidation)) {
			this.errorElement.innerText = 'Введите название'
			this.errorElement.style.display = 'block'
			return
		}

		const data = await this.getIncomesData()
		if (!Array.isArray(data)) {
			return
		}
		let incomeExists = false

		if (data && data.length > 0) {
			incomeExists = data.some(
				item =>
					item.title.toLowerCase() ===
					this.inputNameCategory?.value.toLowerCase().trim()
			)
		}

		if (incomeExists) {
			this.errorElement.innerText = 'Такой расход уже присутствует'
			this.errorElement.style.display = 'block'
			return
		}
		if (!this.inputNameCategory?.value) return
		const response = await ExpensesService.createExpense({
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
