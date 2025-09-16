/**
 * Типы для утилитарного класса CommonUtils
 */

/**
 * Тип для ключей переводов ошибок
 */
export type ErrorTranslationKey =
	// Общие ошибки
	| 'Validation error'
	| 'User with given email already exist'
	| 'Invalid email or password'
	| 'Internal Server Error'
	// Ошибки валидации полей
	| 'name is required'
	| 'lastName is required'
	| 'email is required'
	| 'password is required'
	| 'refreshToken is required'
	// Успешные операции
	| 'Logged Out Successfully'

/**
 * Тип для русских переводов ошибок
 */
export type ErrorTranslationValue =
	| 'Ошибка валидации'
	| 'Пользователь с таким email уже существует'
	| 'Неверный email или пароль'
	| 'Внутренняя ошибка сервера'
	| 'Имя обязательно для заполнения'
	| 'Фамилия обязательна для заполнения'
	| 'Email обязателен для заполнения'
	| 'Пароль обязателен для заполнения'
	| 'Refresh token обязателен'
	| 'Выход выполнен успешно'

/**
 * Тип для словаря переводов ошибок
 */
export type ErrorTranslations = Record<
	ErrorTranslationKey,
	ErrorTranslationValue
>

/**
 * Интерфейс для статических методов CommonUtils
 */
export interface ICommonUtilsStatic {
	translateMessage(msg: string): string
}

/**
 * Тип конструктора класса CommonUtils
 */
export interface ICommonUtilsConstructor {
	new (): {}
	translateMessage(msg: string): string
}
