import { IncomesService } from '../../services/incomes-service'
import { ValidationUtils } from '../../utils/validation-utils'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { AuthUtils } from '../../utils/auth-utils'
import type { OpenNewRouteType } from '@/types/router/open-new-router.type'
import type { ValidateField } from '@/types/utils/validation-utils/validateField'

export class EditIncome {
	readonly openNewRoute: OpenNewRouteType
	private userId: string | null = null
	private originInputValue: string | null = null
	private nameValidation: ValidateField[] = []
	private inputNameCategory!: HTMLInputElement | null
	private saveButton!: HTMLButtonElement | null
	private errorElement: HTMLElement | null = null

	constructor(openNewRoute: OpenNewRouteType) {
		this.openNewRoute = openNewRoute
		AuthUtils.initializeAuthentication(this.openNewRoute).then(
			isAuthenticated => {
				if (!isAuthenticated) {
					return
				}

				this.findElements()
				this.userId = new URLSearchParams(window.location.search).get('id')
				if (!this.userId) {
					return this.openNewRoute('/')
				}
				this.getIncome().then()

				this.nameValidation = [
					{
						element: this.inputNameCategory as HTMLInputElement,
						options: {
							pattern: /^.+$/, // Простая валидация на непустое значение
						},
					},
				]
				KeyboardUtils.setEnterHandler(() => {
					this.saveIncomeProcess().then()
				})
				this.saveButton?.addEventListener(
					'click',
					this.saveIncomeProcess.bind(this)
				)
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
		) as HTMLElement
	}

	private async getIncome(): Promise<void> {
		if (!this.userId) return
		const response = await IncomesService.getIncome(this.userId)
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
			!response.income ||
			typeof response.income !== 'object' ||
			!('title' in response.income)
		)
			return

		if (this.inputNameCategory) {
			this.inputNameCategory.value = response.income.title
		}
		this.originInputValue = response.income.title
		return
	}

	private async saveIncomeProcess(): Promise<void> {
		if (!this.errorElement) return
		if (!this.inputNameCategory) return
		if (!this.userId) return

		this.errorElement.style.display = 'none'
		if (!ValidationUtils.validateForm(this.nameValidation)) {
			this.errorElement.style.display = 'block'
         this.errorElement.innerText = 'Введите название'
			return
		}
		if (this.inputNameCategory.value === this.originInputValue) {
			this.errorElement.style.display = 'block'
			this.errorElement.innerText = 'Изменений не произведено'
			return
		}
		const response = await IncomesService.updateIncome(this.userId, {
			title: this.inputNameCategory.value.trim(),
		})

		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
			}
			return
		}

		this.openNewRoute('/income')
	}
}
