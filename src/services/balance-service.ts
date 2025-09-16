import type { ResultResponse } from '@/types/http-utils.type'
import { HttpUtils } from '../utils/http-utils'
import type { ErrorTypes } from '@/types/services/error.type'

export interface ReturnObject {
	error: string | boolean
	redirect: string | null
	balance: number | null
}
type ResponseBalance = null | { balance: number | null } | ErrorTypes
export class BalanceService {
	public static async getBalance(): Promise<ReturnObject> {
		const returnObject: ReturnObject = {
			error: false,
			redirect: null,
			balance: null,
		}

		const result: ResultResponse<ResponseBalance> = await HttpUtils.request<
			ResponseBalance,
			null
		>('balance')

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при запросе баланса'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}
		if (typeof result.response === 'object' && 'balance' in result.response) {
			returnObject.balance = result.response.balance
		}
		return returnObject
	}
}
