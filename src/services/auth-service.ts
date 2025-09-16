import type {
	LoginBody,
	LoginTypeResult,
} from '../types/services/auth-service/login/login.type'
import type { SignUpResult } from '../types/services/auth-service/signup/signup-result-server.type'
import type { SignUpBodyType } from '../types/services/auth-service/signup/signup.type'
import type { ErrorTypes } from '../types/services/error.type'
import type { GetInfoLocalStorageType } from '../types/utils/auth-utils/getInfoLocalStorage.type'
import { HttpUtils } from '../utils/http-utils'

export class AuthService {
	static async login(data: LoginBody): Promise<LoginTypeResult | ErrorTypes> {
		const result = await HttpUtils.request(
			'/login',
			false,
			'POST',
			data
		)

		return result.response
	}

	static async signup(data: SignUpBodyType): Promise<SignUpResult | ErrorTypes> {
		const result = await HttpUtils.request(
			'signup',
			false,
			'POST',
			data
		)

		return result.response
	}
	static async logout(data: { refreshToken: GetInfoLocalStorageType }): Promise<void> {
		await HttpUtils.request('logout', false, 'POST', data)
	}
}
