import type {
	ValidateField,
	ValidateOptions,
} from '../types/utils/validation-utils/validateField'

export class ValidationUtils {
	public static validateForm(validations: ValidateField[]): boolean {
		let isValid = true

		// Сначала скрываем все сообщения об ошибках
		validations.forEach(validation => {
			const errorElement = document.getElementById(
				`input-error-${validation.element.id
					.replace('Input', '')
					.toLowerCase()}`
			)
			if (errorElement) {
				errorElement.style.display = 'none'
			}
		})

		for (let i = 0; i < validations.length; i++) {
			// Проверяем существование объекта validation и его обязательных свойств
			const validation = validations[i]
			if (!validation?.element?.id) {
				console.warn(
					`Validation at index ${i} is missing element or element.id`
				)
				continue
			}

			const validationResult = this.validateField(
				validation.element,
				validation.options
			)
			if (!validationResult) {
				isValid = false

				// Показываем сообщение об ошибке для этого поля
				const errorElement = document.getElementById(
					`input-error-${validation.element.id
						.replace('Input', '')
						.toLowerCase()}`
				)
				if (errorElement) {
					errorElement.style.display = 'block'
				}
			}
		}

		return isValid
	}

	public static validateField(
		element: HTMLInputElement,
		options?: ValidateOptions
	): boolean {
		let condition: boolean = Boolean(element.value)
		if (!condition) return false

		if (options) {
			if (options.hasOwnProperty('pattern') && options.pattern) {
				condition = Boolean(
					element.value && element.value.match(options.pattern)
				)
			} else if (options.hasOwnProperty('checkProperty')) {
				condition = Boolean(options.checkProperty)
			} else if (options.hasOwnProperty('compareTo') && options.compareTo) {
				condition = Boolean(
					element.value && element.value === options.compareTo.value
				)
			} else if (options.hasOwnProperty('checked')) {
				condition = element.checked
			} else if (options.hasOwnProperty('amount')) {
				condition = parseInt(element.value) > 0
			} else if (options.hasOwnProperty('date')) {
				condition = Boolean(this.validateDatePattern(element.value))
			}
		}

		return condition
	}
	public static validateDatePattern(dateString: string): boolean {
		if (!dateString) return false

		const datePattern = /^\d{4}\.\d{2}\.\d{2}$/
		if (!datePattern.test(dateString)) {
			return false
		}

		const parts: string[] = dateString.split('.')
		if (!parts[0] || !parts[1] || !parts[2]) return false
		const year = parseInt(parts[0])
		const month = parseInt(parts[1])
		const day = parseInt(parts[2])

		if (year < 1900 || year > 2100) return false
		if (month < 1 || month > 12) return false

		const daysInMonth = new Date(year, month, 0).getDate()
		if (day < 1 || day > daysInMonth) return false

		return true
	}
}
