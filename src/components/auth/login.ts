import { AuthService } from '../../services/auth-service'
import type {
	LoginBody,
	LoginTypeResult,
} from '../../types/services/auth-service/login/login.type'
import type { ErrorTypes } from '../../types/services/error.type'
import type { ValidateField } from '../../types/utils/validation-utils/validateField'
import { AuthUtils } from '../../utils/auth-utils'
import { CommonUtils } from '../../utils/common-utils'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { ValidationUtils } from '../../utils/validation-utils'

export class Login {
	readonly openNewRoute: (arg: string) => void
	readonly loginBtn: HTMLElement | null
	private passwordElement!: HTMLInputElement | null
	private emailElement!: HTMLInputElement | null
	private rememberElement!: HTMLInputElement | null
	private commonErrorElement!: HTMLElement | null
	readonly validations: ValidateField[] = []
	constructor(openNewRoute: (arg: string) => void) {
		this.openNewRoute = openNewRoute
		this.loginBtn = document.getElementById('login-btn')
		if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
			this.openNewRoute('/')
			return
		}
		this.findElements()
		if (this.commonErrorElement) {
			this.commonErrorElement.style.display = 'none'
		}

		this.validations = [
			{
				element: this.emailElement as HTMLInputElement,
				options: { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i },
			},
			{
				element: this.passwordElement as HTMLInputElement,
				options: { pattern: /^.+$/ },
			},
		]
		KeyboardUtils.setEnterHandler(() => {
			this.login().then()
		})
		if (this.loginBtn) {
			this.loginBtn.addEventListener('click', this.login.bind(this))
		}
	}

	private findElements(): void {
		this.emailElement = document.getElementById(
			'emailInput'
		) as HTMLInputElement
		this.passwordElement = document.getElementById(
			'passwordInput'
		) as HTMLInputElement
		this.rememberElement = document.getElementById(
			'rememberInput'
		) as HTMLInputElement
		this.commonErrorElement = document.getElementById('input-error-common')
	}
	private isLoginSuccess(
		result: LoginTypeResult | ErrorTypes
	): result is LoginTypeResult {
		return (
			result.hasOwnProperty('user') &&
			result.hasOwnProperty('tokens') &&
			!result.hasOwnProperty('error')
		)
	}
	private async login(): Promise<void> {
		if (ValidationUtils.validateForm(this.validations)) {
			if (
				!this.emailElement ||
				!this.passwordElement ||
				!this.rememberElement
			) {
				console.error('Required elements not found')
				return
			}

			const data: LoginBody = {
				email: this.emailElement.value,
				password: this.passwordElement.value,
				rememberMe: this.rememberElement.checked,
			}
			const result = await AuthService.login(data)

			if (!this.isLoginSuccess(result)) {
				if (this.commonErrorElement) {
					// Безопасная обработка сообщения об ошибке
					const errorMessage =
						result && result.hasOwnProperty('message')
							? result.message
							: undefined
					this.commonErrorElement.innerText =
						CommonUtils.translateMessage(errorMessage)
					this.commonErrorElement.style.display = 'block'
				}
				return
			}

			AuthUtils.setUserInfo(result)
			this.openNewRoute('/')
		}
	}
}
