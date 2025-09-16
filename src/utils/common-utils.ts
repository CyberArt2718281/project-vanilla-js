import type {
	ErrorTranslationKey,
	ErrorTranslations,
} from '../types/utils/common-utils/index.js'

/**
 * Утилитарный класс для общих операций
 */
export class CommonUtils {
	/**
	 * Переводит сообщение об ошибке на русский язык
	 * @param msg - Сообщение для перевода (может быть undefined)
	 * @returns Переведенное сообщение или сообщение по умолчанию
	 */
	public static translateMessage(msg: string | undefined): string {
		// Если сообщение не передано или undefined, возвращаем сообщение по умолчанию
		if (!msg) {
			return 'Произошла ошибка. Попробуйте позже.'
		}
		const errorTranslations: ErrorTranslations = {
			// Ошибки валидации
			'Validation error': 'Ошибка валидации',
			'User with given email already exist':
				'Пользователь с таким email уже существует',
			'Invalid email or password': 'Неверный email или пароль',
			'Internal Server Error': 'Внутренняя ошибка сервера',

			// Ошибки полей (из validation array)
			'name is required': 'Имя обязательно для заполнения',
			'lastName is required': 'Фамилия обязательна для заполнения',
			'email is required': 'Email обязателен для заполнения',
			'password is required': 'Пароль обязателен для заполнения',
			'refreshToken is required': 'Refresh token обязателен',

			// Дополнительные возможные ошибки
			'Logged Out Successfully': 'Выход выполнен успешно',
		}

		// Проверяем, есть ли перевод для данного сообщения
		if (msg in errorTranslations) {
			return errorTranslations[msg as ErrorTranslationKey]
		}

		return msg
	}
}
