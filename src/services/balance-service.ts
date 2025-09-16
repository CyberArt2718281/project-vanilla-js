import { HttpUtils } from '../utils/http-utils'

export interface ReturnObject {
	error: string | boolean
	redirect: string | null
	balance: number | null
}

export class BalanceService {
	public static async getBalance(): Promise<ReturnObject> {
		const returnObject: ReturnObject = {
			error: false,
			redirect: null,
			balance: null,
		}

		const result = await HttpUtils.request('balance')

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при запросе баланса'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.balance = result.response.balance
		return returnObject
	}
}
