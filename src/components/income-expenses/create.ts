import type { OperationBodyType } from '@/types/operations/operation-service/operation-body.type'
import type { OpenNewRouteType } from '@/types/router/open-new-router.type'
import type { ValidateField } from '@/types/utils/validation-utils/validateField'
import config from '../../config/config'
import { ExpensesService } from '../../services/expenses-service'
import { IncomesService } from '../../services/incomes-service'
import { OperationsService } from '../../services/operations-service'
import { AuthUtils } from '../../utils/auth-utils'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { ValidationUtils } from '../../utils/validation-utils'
import type { Income } from '@/types/incomes/incomes-service/income.type'
import type { Expense } from '@/types/expenses/expenses-service/expense.type'

export class CreateIncomesExpenses {
	readonly openNewRoute: OpenNewRouteType
	private typeId: string | null = null
	private typeInput: HTMLInputElement | null = null
	private amountInput: HTMLInputElement | null = null
	private categoryInput: HTMLInputElement | null = null
	private dateInput: HTMLInputElement | null = null
	private commentInput: HTMLInputElement | null = null
	private saveButton: HTMLButtonElement | null = null
	private validations: ValidateField[] = []

	constructor(openNewRoute: OpenNewRouteType) {
		this.openNewRoute = openNewRoute
		AuthUtils.initializeAuthentication(this.openNewRoute).then(
			isAuthenticated => {
				if (!isAuthenticated) {
					return
				}
				this.findElements()

				this.typeId = new URLSearchParams(window.location.search).get('typeId')
				if (!this.typeId) {
					return this.openNewRoute('/')
				}
				this.setupDateMask()
				this.applyDateMask(this.dateInput as HTMLInputElement)
				this.startTypesShow().then()
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

				this.saveButton?.addEventListener(
					'click',
					this.saveOperation.bind(this)
				)
			}
		)
	}

	private async startTypesShow(): Promise<void> {
		if (this.typeId === config.type.income) {
			const incomesData = await this.getIncomesData()
			if (incomesData && Array.isArray(incomesData)) {
				return this.setOption(incomesData)
			}
		}
		if (this.typeId === config.type.expense) {
			const expensesData = await this.getExpensesData()
			if (expensesData && Array.isArray(expensesData)) {
				if (this.typeInput) this.typeInput.value = this.typeId || ''
				return this.setOption(expensesData)
			}
		}
	}

	private formatDate(dateString: string): string {
		dateString = dateString.replace(/\./g, '-')
		return dateString
	}

	private setOption(data: Income[] | Expense[]): void {
		data.forEach((item: {title:string, id:number}) => {
			const option = document.createElement('option')
			option.value = item.id.toString()
			option.text = item.title
			this.categoryInput?.appendChild(option)
		})
	}

	async getExpensesData() {
		const response = await ExpensesService.getExpenses()
		if (response.error) {
			alert(response.error)
			return response.redirect ? this.openNewRoute(response.redirect) : null
		}
		return response.expenses
	}

	async getIncomesData() {
		const response = await IncomesService.getIncomes()
		if (response.error) {
			alert(response.error)
			return response.redirect ? this.openNewRoute(response.redirect) : null
		}
		return response.incomes
	}

	private setupDateMask(): void {
		this.dateInput?.addEventListener('input', (e: Event) => {
			const target = e.target as HTMLInputElement
			this.applyDateMask(target)
		})

		if (this.dateInput) {
			this.dateInput.placeholder = 'гггг.мм.дд'
		}
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
		if (ValidationUtils.validateForm(this.validations)) {
			const dataOperation: OperationBodyType = {
				type: (this.typeInput?.value || '') as 'income' | 'expense',
				category_id: parseInt(this.categoryInput?.value || '0'),
				amount: parseInt(this.amountInput?.value || '0'),
				date: this.formatDate(this.dateInput?.value || ''),
				comment: this.commentInput?.value || '',
			}
			console.log(dataOperation)

			if (dataOperation) {
				const response = await OperationsService.createOperation(dataOperation)
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
}
