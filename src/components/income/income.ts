import { IncomesService } from '../../services/incomes-service'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { AuthUtils } from '../../utils/auth-utils'
import type { OpenNewRouteType } from '@/types/router/open-new-router.type'
import type { ErrorTypes } from '@/types/services/error.type'
import type { Income as IncomeType } from '@/types/incomes/incomes-service/income.type'

export class Income {
	readonly openNewRoute: OpenNewRouteType
	private containerItemsIncomes!: HTMLElement | null
	private confirmedDeleteElement!: HTMLElement | null
	private popupElement!: HTMLElement | null
	private notDeleteElement!: HTMLElement | null
	private currentDeleteId!: string | null
	private currentDeleteElement!: HTMLElement | null
	private handleDeleteClick!: () => void
	private popupHandlersSet: boolean = false
	constructor(openNewRoute: OpenNewRouteType) {
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

	private async getIncomesData(): Promise<
		null | IncomeType[] | ErrorTypes | []
	> {
		const response = await IncomesService.getIncomes()
		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
				return null
			}
		}

		if (!response.incomes) {
			return []
		}
		return response.incomes
	}

	findElements() {
		document.body.style.position = 'relative'
		document.body.classList.remove('popup-open')
		this.containerItemsIncomes = document.getElementById('container-incomes')
		this.confirmedDeleteElement = document.getElementById('confirmed-delete')
		this.popupElement = document.querySelector('.popup')
		this.notDeleteElement = document.getElementById('not-delete')
		this.currentDeleteId = null
		this.currentDeleteElement = null
	}

	private async showContainers(): Promise<void> {
		const incomesData = await this.getIncomesData()
		if (!Array.isArray(incomesData)) return
      if (!this.containerItemsIncomes) {
			return
		}
		if (incomesData && incomesData.length > 0) {
			for (let i = incomesData.length - 1; i >= 0; i--) {
				const itemIncome = document.createElement('div')
				itemIncome.classList.add('income-item')

				const titleElementIncome = document.createElement('h3')
				titleElementIncome.innerText = (incomesData[i] as IncomeType).title
				titleElementIncome.classList.add('income-title')

				const processLinks = document.createElement('div')
				processLinks.classList.add('process-links')

				const processEditLink = document.createElement('a')
				processEditLink.classList.add('edit-link')
				processEditLink.href =
					'/income/edit?id=' + (incomesData[i] as IncomeType).id
				processEditLink.innerText = 'Редактировать'

				const processDeleteBtn = document.createElement('button')
				processDeleteBtn.type = 'button'
				processDeleteBtn.dataset.id = (
					incomesData[i] as IncomeType
				).id.toString()
				processDeleteBtn.classList.add('delete-link')
				processDeleteBtn.innerText = 'Удалить'

				processLinks.appendChild(processEditLink)
				processLinks.appendChild(processDeleteBtn)
				itemIncome.appendChild(titleElementIncome)
				itemIncome.appendChild(processLinks)

				this.containerItemsIncomes.prepend(itemIncome)
			}
			const deleteLinkElements = document.querySelectorAll('.delete-link')
			this.showPopup(deleteLinkElements)
		}
	}

	private showPopup(deleteLinks: NodeListOf<Element>): void {
		const self: Income = this

		deleteLinks.forEach(deleteLink => {
			deleteLink.removeEventListener('click', this.handleDeleteClick)
		})

		this.handleDeleteClick = function (this: HTMLElement) {
         if (!this.dataset.id) {
				return
			}
			self.currentDeleteId = this.dataset.id as string
			self.currentDeleteElement = this as HTMLElement // Сохраняем элемент
			document.body.classList.add('popup-open')
			self.popupElement?.classList.remove('d-none')
		}

		deleteLinks.forEach(deleteLink => {
			deleteLink.addEventListener('click', this.handleDeleteClick)
		})

		if (!this.popupHandlersSet) {
			this.notDeleteElement?.addEventListener('click', () => {
				self.popupElement?.classList.add('d-none')
				document.body.classList.remove('popup-open')
				self.currentDeleteId = null
				self.currentDeleteElement = null
			})
			KeyboardUtils.setEnterHandler(async () => {
				if (!self.currentDeleteId || !self.currentDeleteElement) return

				const response = await IncomesService.deleteIncome(self.currentDeleteId)
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
			this.confirmedDeleteElement?.addEventListener('click', async () => {
				if (!self.currentDeleteId || !self.currentDeleteElement) return

				const response = await IncomesService.deleteIncome(self.currentDeleteId)
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
