import { AuthService } from '../../services/auth-service'
import type {
	LoginBody,
	LoginTypeResult,
} from '../../types/services/auth-service/login/login.type'
import type { SignUpResult } from '../../types/services/auth-service/signup/signup-result-server.type'
import type { SignUpBodyType } from '../../types/services/auth-service/signup/signup.type'
import type { ErrorTypes } from '../../types/services/error.type'
import type { ValidateField } from '../../types/utils/validation-utils/validateField'
import { AuthUtils } from '../../utils/auth-utils'
import { CommonUtils } from '../../utils/common-utils'
import { KeyboardUtils } from '../../utils/keyboardUtils'
import { ValidationUtils } from '../../utils/validation-utils'

export class SignUp {
	readonly openNewRoute: (arg: string) => void
	private signUpBtn!: HTMLElement | null
	private nameElement!: HTMLInputElement | null
	private lastNameElement!: HTMLInputElement | null
	private commonErrorElement!: HTMLInputElement | null
	private emailElement!: HTMLInputElement | null
	private passwordElement!: HTMLInputElement | null
	private repeatPasswordElement!: HTMLInputElement | null
	private validations: ValidateField[] = []

	constructor(openNewRoute: (arg: string) => void) {
		this.openNewRoute = openNewRoute

		if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
			this.openNewRoute('/')
			return
		}

		this.findElements()
		this.signUpBtn = document.getElementById('btn-sign-up')
		if (this.commonErrorElement) {
			this.commonErrorElement.style.display = 'none'
		}
		this.validations = [
			{
				element: this.nameElement as HTMLInputElement,
				options: { pattern: /^[A-ZА-ЯЁ][a-zA-Zа-яёА-ЯЁ]+\s*$/g },
			},
			{
				element: this.lastNameElement as HTMLInputElement,
				options: { pattern: /^[A-ZА-ЯЁ][a-zA-Zа-яёА-ЯЁ]+\s*$/g },
			},
			{
				element: this.repeatPasswordElement as HTMLInputElement,
				options: { compareTo: this.passwordElement as HTMLInputElement },
			},
			{
				element: this.emailElement as HTMLInputElement,
				options: { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i },
			},
			{
				element: this.passwordElement as HTMLInputElement,
				options: { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/ },
			},
		]
		KeyboardUtils.setEnterHandler(() => {
			this.signUp().then()
		})
		if (this.signUpBtn) {
			this.signUpBtn.addEventListener('click', this.signUp.bind(this))
		}
	}

	private findElements(): void {
		this.nameElement = document.getElementById('nameInput') as HTMLInputElement
		this.lastNameElement = document.getElementById(
			'last-nameInput'
		) as HTMLInputElement
		this.emailElement = document.getElementById(
			'emailInput'
		) as HTMLInputElement
		this.passwordElement = document.getElementById(
			'passwordInput'
		) as HTMLInputElement
		this.repeatPasswordElement = document.getElementById(
			'repeat-passwordInput'
		) as HTMLInputElement
		this.commonErrorElement = document.getElementById(
			'input-error-common'
		) as HTMLInputElement
	}
	private isSignupSuccess(
		result: SignUpResult | ErrorTypes
	): result is SignUpResult {
		return result.hasOwnProperty('user') && !result.hasOwnProperty('error')
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
	private async signUp(): Promise<void> {
		if (!this.validations) return
		for (let i = 0; i < this.validations.length; i++) {
			const validation = this.validations[i]

			if (validation?.element?.value === this.repeatPasswordElement?.value) {
				if (validation?.options) {
					if (
						'compareTo' in validation.options &&
						validation.options.compareTo
					) {
						validation.options.compareTo = this
							.passwordElement as HTMLInputElement
					}
				}
			}
		}

		if (ValidationUtils.validateForm(this.validations)) {
			if (
				!this.nameElement ||
				!this.lastNameElement ||
				!this.emailElement ||
				!this.passwordElement ||
				!this.repeatPasswordElement
			) {
				return
			}
			const data: SignUpBodyType = {
				name: this.nameElement.value.trim(),
				lastName: this.lastNameElement.value.trim(),
				email: this.emailElement.value,
				password: this.passwordElement.value,
				passwordRepeat: this.repeatPasswordElement.value,
			}
			const result = await AuthService.signup(data)

			if (!this.isSignupSuccess(result)) {
				if (this.commonErrorElement) {
					this.commonErrorElement.style.display = 'block'
					// Безопасная обработка сообщения об ошибке
					const errorMessage =
						result && result.hasOwnProperty('message')
							? result.message
							: undefined
					this.commonErrorElement.innerText =
						CommonUtils.translateMessage(errorMessage)
				}
				return
			}
			const loginBody: LoginBody = {
				email: this.emailElement.value,
				password: this.passwordElement.value,
				rememberMe: true,
			}
			const resultLogin = await AuthService.login(loginBody)
			if (!this.isLoginSuccess(resultLogin)) {
				if (this.commonErrorElement) {
					// Безопасная обработка сообщения об ошибке для логина
					const errorMessage =
						resultLogin && resultLogin.hasOwnProperty('message')
							? resultLogin.message
							: undefined
					this.commonErrorElement.innerText =
						CommonUtils.translateMessage(errorMessage)
					this.commonErrorElement.style.display = 'block'
				}
				return
			}

			AuthUtils.setUserInfo(resultLogin)

			this.openNewRoute('/')
		}
	}
}
