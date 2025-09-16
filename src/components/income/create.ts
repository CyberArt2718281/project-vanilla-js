import { IncomesService } from '../../services/incomes-service'
import { ValidationUtils } from '../../utils/validation-utils'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { AuthUtils } from '../../utils/auth-utils'
import type { OpenNewRouteType } from '@/types/router/open-new-router.type'
import type { ValidateField } from '@/types/utils/validation-utils/validateField'
import type { Income } from '@/types/incomes/incomes-service/income.type'
import type { ErrorTypes } from '@/types/services/error.type'

export class CreateIncome {
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
					this.createIncome().then()
				})
				this.saveButton?.addEventListener('click', this.createIncome.bind(this))
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

	private async getIncomesData(): Promise<null | Income[] | ErrorTypes | []> {
		const response = await IncomesService.getIncomes()
		if (response.error) {
			alert(response.error)
			if (response.redirect) {
				this.openNewRoute(response.redirect)
				return null
			}
			return null
		}
		if (!response.incomes) {
			return []
		}
		return response.incomes
	}

	private async createIncome():Promise<void>{
		if (!this.errorElement) return
		if (this.errorElement) {
			this.errorElement.style.display = 'none'
		}

		this.errorElement.style.display = 'none'

		// Сначала проверяем валидацию
		if (!ValidationUtils.validateForm(this.nameValidation)) {
         this.errorElement.innerText = 'Введите название'
			this.errorElement.style.display = 'block'
			return
		}

		const data = await this.getIncomesData()
		let incomeExists = false
		if (!Array.isArray(data)) {
			return
		}
		if (data && data.length > 0) {
			incomeExists = data.some(
				item =>
					item.title.toLowerCase() ===
					this.inputNameCategory?.value.toLowerCase().trim()
			)
		}

		if (incomeExists) {
			this.errorElement.innerText = 'Такой доход уже присутствует'
			this.errorElement.style.display = 'block'
			return
		}
		if (!this.inputNameCategory?.value) return
		const response = await IncomesService.createIncome({
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
