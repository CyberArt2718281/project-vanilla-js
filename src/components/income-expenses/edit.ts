import type { Expense } from '@/types/expenses/expenses-service/expense.type'
import type { Income } from '@/types/incomes/incomes-service/income.type'
import type { OperationBodyType } from '@/types/operations/operation-service/operation-body.type'
import type { Operation } from '@/types/operations/operation-service/operation.type'
import type { OpenNewRouteType } from '@/types/router/open-new-router.type'
import type { ErrorTypes } from '@/types/services/error.type'
import type { ValidateField } from '@/types/utils/validation-utils/validateField'
import config from '../../config/config'
import { ExpensesService } from '../../services/expenses-service'
import { IncomesService } from '../../services/incomes-service'
import { OperationsService } from '../../services/operations-service'
import { AuthUtils } from '../../utils/auth-utils'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { ValidationUtils } from '../../utils/validation-utils'

export class EditIncomesExpenses {
	readonly openNewRoute: OpenNewRouteType
	private operationId: string | null = null
	private typeInput: HTMLInputElement | null = null
	private amountInput: HTMLInputElement | null = null
	private categoryInput: HTMLInputElement | null = null
	private dateInput: HTMLInputElement | null = null
	private commentInput: HTMLInputElement | null = null
	private validations: ValidateField[] = []
	saveButton = document.getElementById('editBtn') as HTMLButtonElement
	constructor(openNewRoute: OpenNewRouteType) {
		this.openNewRoute = openNewRoute

		AuthUtils.initializeAuthentication(this.openNewRoute).then(
			isAuthenticated => {
				if (!isAuthenticated) {
					return
				}
				this.findElements()
				this.operationId = new URLSearchParams(window.location.search).get('id')
				if (!this.operationId) {
					return this.openNewRoute('/')
				}

				this.getOperation().then(() => {
					this.setupDateMask()
					this.applyDateMask(this.dateInput as HTMLInputElement)
				})

				this.typeInput?.addEventListener('change', async (e: Event) => {
					if (this.categoryInput) this.categoryInput.innerHTML = ''
					if ((e.target as HTMLInputElement).value === config.type.income) {
						const incomesData = await this.getIncomesData()
						if (incomesData && Array.isArray(incomesData)) {
							this.setOption(incomesData)
						}
					}
					if ((e.target as HTMLInputElement).value === config.type.expense) {
						const expenseData = await this.getExpensesData()
						if (expenseData && Array.isArray(expenseData)) {
							this.setOption(expenseData)
						}
					}
				})
				this.validations = [
					{
						element: this.amountInput as HTMLInputElement,
						options: { amount: true },
					},
					{
						element: this.dateInput as HTMLInputElement,
						options: { date: true },
					},
				]

				KeyboardUtils.setEnterHandler(() => {
					this.saveOperation().then()
				})

				this.saveButton.addEventListener('click', this.saveOperation.bind(this))
			}
		)
	}

	private formatDate(dateString: string): string {
		dateString = dateString.replace(/\./g, '-')
		return dateString
	}

	private setOption(data: { id: number; title: string }[]) {
		data.forEach(item => {
			const option = document.createElement('option')
			option.value = item.id.toString()
			option.text = item.title
			this.categoryInput?.appendChild(option)
		})
	}

	private async getExpensesData(): Promise<null | Expense[] | ErrorTypes | []> {
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

	private async getIncomesData(): Promise<null | Income[] | ErrorTypes | []> {
		const response = await IncomesService.getIncomes()
		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
				return null
			} else {
				return null
			}
		}
		if (!response.incomes) {
			return []
		}
		return response.incomes
	}

	private async getOperation(): Promise<null | boolean> {
		if (!this.operationId) return null
		const response = await OperationsService.getOperation(this.operationId)
		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
				return null
			}
			return null
		}
		const operation = response.operation as Operation

		if (operation.type === config.type.income) {
			if (this.typeInput) {
				this.typeInput.value = operation.type
				const incomesData = await this.getIncomesData()
				if (incomesData && Array.isArray(incomesData)) {
					this.setOption(incomesData)
				}
			}
		}

		if (operation.type === config.type.expense) {
			if (this.typeInput) {
				this.typeInput.value = operation.type
				const expenseData = await this.getExpensesData()
				if (expenseData && Array.isArray(expenseData)) {
					this.setOption(expenseData)
				}
			}
		}
		let categoryText = null
		document.querySelectorAll('option').forEach(el => {
			if (operation.category.toLowerCase() === el.innerText.toLowerCase()) {
				categoryText = el.value
			}
		})
		if (this.categoryInput) {
			this.categoryInput.value = `${categoryText}`
		}
		if (this.amountInput) {
			this.amountInput.value = operation.amount.toString()
		}
		if (this.dateInput) {
			this.dateInput.value = operation.date
		}
		if (this.commentInput) {
			this.commentInput.value =
				operation.comment && operation.comment !== 'null'
					? operation.comment
					: ''
		}
		return true
	}

	private setupDateMask(): void {
		this.dateInput?.addEventListener('input', (e: Event) => {
			this.applyDateMask(e.target as HTMLInputElement)
		})
		if (this.dateInput) this.dateInput.placeholder = 'гггг.мм.дд'
	}

	private applyDateMask(input: HTMLInputElement): void {
		let value = input.value.replace(/\D/g, '')

		if (value.length > 8) {
			value = value.slice(0, 8)
		}

		if (value.length > 4) {
			value = value.slice(0, 4) + '.' + value.slice(4)
		}
		if (value.length > 7) {
			value = value.slice(0, 7) + '.' + value.slice(7)
		}

		input.value = value
	}

	private findElements(): void {
		this.typeInput = document.getElementById('typeInput') as HTMLInputElement
		this.amountInput = document.getElementById(
			'amountInput'
		) as HTMLInputElement
		this.categoryInput = document.getElementById(
			'categoryInput'
		) as HTMLInputElement
		this.dateInput = document.getElementById('dateInput') as HTMLInputElement
		this.commentInput = document.getElementById(
			'commentInput'
		) as HTMLInputElement

		this.saveButton = document.getElementById('editBtn') as HTMLButtonElement
	}

	private async saveOperation(): Promise<void> {
		if (!this.operationId) return
		if (
			!this.typeInput ||
			!this.categoryInput ||
			!this.amountInput ||
			!this.dateInput ||
			!this.commentInput
		)
			return

		if (ValidationUtils.validateForm(this.validations)) {
			const dataOperation: OperationBodyType = {
				type: this.typeInput.value as 'income' | 'expense',
				category_id: parseInt(this.categoryInput.value),
				amount: parseInt(this.amountInput.value),
				date: this.formatDate(this.dateInput.value),
				comment: this.commentInput.value || '',
			}

			const response = await OperationsService.updateExpense(
				this.operationId,
				dataOperation
			)
			if (response.error) {
				alert(response.error)
				if (response.redirect) {
					this.openNewRoute(response.redirect)
				}
				return
			}
			this.openNewRoute('/income-expenses')
		}
	}
}
