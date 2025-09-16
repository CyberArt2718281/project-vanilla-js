import type { Expense as ExpenseType } from '@/types/expenses/expenses-service/expense.type'
import { ExpensesService } from '../../services/expenses-service'
import { AuthUtils } from '../../utils/auth-utils'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import type { ErrorTypes } from '@/types/services/error.type'

export class Expense {
	readonly openNewRoute: (arg: string) => void
	private containerItemsIncomes!: HTMLElement | null
	private confirmedDeleteElement!: HTMLElement | null
	private popupElement!: HTMLElement | null
	private notDeleteElement!: HTMLElement | null
	private currentDeleteId!: string | null
	private currentDeleteElement!: HTMLElement | null
	private handleDeleteClick!: () => void
	private popupHandlersSet = false

	constructor(openNewRoute: (arg: string) => void) {
		this.openNewRoute = openNewRoute
		AuthUtils.initializeAuthentication(this.openNewRoute).then(
			isAuthenticated => {
				if (!isAuthenticated) {
					return
				}

				this.findElements()
				this.showContainers().then()
			}
		)
	}

	private async getExpensesData(): Promise<ExpenseType[] | ErrorTypes | []> {
		const response = await ExpensesService.getExpenses()
		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
			}
			return []
		}
		if (!response.expenses) {
			return []
		}
		return response.expenses
	}

	findElements() {
		document.body.style.position = 'relative'
		document.body.classList.remove('popup-open')
		this.containerItemsIncomes = document.getElementById('container-expenses')
		this.confirmedDeleteElement = document.getElementById('confirmed-delete')
		this.popupElement = document.querySelector('.popup')
		this.notDeleteElement = document.getElementById('not-delete')
		this.currentDeleteId = null
		this.currentDeleteElement = null
	}

	private async showContainers(): Promise<void> {
		const expensesData: ExpenseType[] | ErrorTypes | [] =
			await this.getExpensesData()
		if (expensesData instanceof Array === false) {
			return
		}
		if (!this.containerItemsIncomes) {
			return
		}
		if (expensesData && expensesData.length > 0) {
			for (let i = expensesData.length - 1; i >= 0; i--) {
				const itemExpense = document.createElement('div')
				itemExpense.classList.add('income-item')

				const titleElementExpense = document.createElement('h3')
				titleElementExpense.innerText = (expensesData[i] as ExpenseType).title
				titleElementExpense.classList.add('income-title')

				const processLinks = document.createElement('div')
				processLinks.classList.add('process-links')

				const processEditLink = document.createElement('a')
				processEditLink.classList.add('edit-link')
				processEditLink.href =
					'/expenses/edit?id=' + (expensesData[i] as ExpenseType).id
				processEditLink.innerText = 'Редактировать'

				const processDeleteBtn = document.createElement('button')
				processDeleteBtn.type = 'button'
				processDeleteBtn.dataset.id = (
					expensesData[i] as ExpenseType
				).id.toString()
				processDeleteBtn.classList.add('delete-link')
				processDeleteBtn.innerText = 'Удалить'

				processLinks.appendChild(processEditLink)
				processLinks.appendChild(processDeleteBtn)
				itemExpense.appendChild(titleElementExpense)
				itemExpense.appendChild(processLinks)
				this.containerItemsIncomes.prepend(itemExpense)
			}
			const deleteLinkElements = document.querySelectorAll('.delete-link')
			this.showPopup(deleteLinkElements)
		}
	}

	private showPopup(deleteLinks: NodeListOf<Element>) {
		const self: Expense = this

		deleteLinks.forEach(deleteLink => {
			deleteLink.removeEventListener('click', this.handleDeleteClick)
		})

		this.handleDeleteClick = function (this: HTMLElement) {
			if (!this.dataset.id) {
				return
			}
			self.currentDeleteId = this.dataset.id as string
			self.currentDeleteElement = this // Сохраняем элемент
			document.body.classList.add('popup-open')
			if (!self.popupElement) {
				return
			}
			self.popupElement.classList.remove('d-none')
		}

		deleteLinks.forEach(deleteLink => {
			deleteLink.addEventListener('click', this.handleDeleteClick)
		})

		if (!this.popupHandlersSet) {
			if (!this.notDeleteElement || !this.confirmedDeleteElement) {
				return
			}
			this.notDeleteElement.addEventListener('click', () => {
				if (!self.popupElement) {
					return
				}
				self.popupElement.classList.add('d-none')
				document.body.classList.remove('popup-open')
				self.currentDeleteId = null
				self.currentDeleteElement = null
			})
			KeyboardUtils.setEnterHandler(async () => {
				if (!self.currentDeleteId || !self.currentDeleteElement) return

				const response = await ExpensesService.deleteExpense(
					self.currentDeleteId
				)
				if (response.error) {
					alert(response.error)
					if (response.redirect) {
						self.openNewRoute(response.redirect)
					}
				} else {
					self.currentDeleteElement?.closest('.income-item')?.remove()
					self.popupElement?.classList.add('d-none')
					document.body.classList.remove('popup-open')
					self.currentDeleteId = null
					self.currentDeleteElement = null
				}
			})
			this.confirmedDeleteElement.addEventListener('click', async () => {
				if (!self.currentDeleteId || !self.currentDeleteElement) return

				const response = await ExpensesService.deleteExpense(
					self.currentDeleteId
				)
				if (response.error) {
					alert(response.error)
					if (response.redirect) {
						self.openNewRoute(response.redirect)
					}
				} else {
					self.currentDeleteElement?.closest('.income-item')?.remove()
					self.popupElement?.classList.add('d-none')
					document.body.classList.remove('popup-open')
					self.currentDeleteId = null
					self.currentDeleteElement = null
				}
			})

			this.popupHandlersSet = true
		}
	}
}
