/**
 * Типы для класса Router
 */

/**
 * Интерфейс для балансного ответа
 */
export interface BalanceResponse {
	balance: number
}

/**
 * Тип для опциональных функций в маршруте
 */
export type RouteFunction = () => void

/**
 * Тип для обработчика открытия нового маршрута
 */
export type OpenNewRouteHandler = (url: string) => Promise<void>

/**
 * Тип для информации о пользователе
 */
export interface UserInfo {
	name: string
	lastName?: string
	email?: string
}

/**
 * Интерфейс для jQuery pushMenu
 */
export interface JQueryPushMenu {
	pushMenu(action: 'collapse' | 'expand'): void
}

/**
 * Расширение JQuery для pushMenu
 */
declare global {
	interface JQuery {
		pushMenu(action: 'collapse' | 'expand'): JQuery
	}
}

/**
 * Интерфейс для статических методов Router
 */
export interface IRouterStatic {
	new (): IRouter
}

/**
 * Основной интерфейс для Router
 */
export interface IRouter {
	openNewRoute(url: string): Promise<void>
	closeMobileSidebar(): void
}
