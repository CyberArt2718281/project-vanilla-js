// import { Request } from './../../node_modules/typescript/lib/typescript.d';
import config from '../config/config'
import { AuthUtils } from './auth-utils'

interface RequestResult {
	error: boolean
	response: any
	redirect?: string
}

export class HttpUtils {
	public static async request(
		url: string,
		useAuth: boolean = true,
		method: string = 'GET',
		body: any = null
	): Promise<RequestResult> {
		const result: RequestResult = {
			error: false,
			response: null,
		}

		const params: RequestInit = {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}
		let token = null
		if (useAuth) {
			token = AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)
			if (token) {
				;(params.headers as Record<string, string>)['x-auth-token'] = token
			}
		}

		if (body) {
			params.body = JSON.stringify(body)
		}
		try {
			let response: Response = await fetch(config.api + url, params)
			if (response.status < 200 || response.status >= 300) {
				result.error = true
				if (useAuth && response.status === 401) {
					if (!token) {
						// 1 - токена нет
						result.redirect = '/login'
					} else {
						// 2 - токен устарел/невалидный (надо обновить)
						const updateTokenResult = await AuthUtils.updateRefreshToken()
						if (updateTokenResult) {
							// запрос повторно
							return this.request(url, useAuth, method, body)
						} else {
							result.redirect = '/login'
						}
					}
				}
			}
			try {
				result.response = await response.json()
			} catch (jsonError) {
				// Если не удается парсить JSON ответ
				result.error = true
				result.response = {
					error: true,
					message: 'Ошибка обработки ответа сервера.',
				}
			}
			return result
		} catch (e) {
			result.error = true
			result.response = {
				error: true,
				message: 'Ошибка сети. Проверьте подключение к интернету.',
			}
			return result
		}
	}
}
