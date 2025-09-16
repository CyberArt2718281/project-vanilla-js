import type { IncomeBodyType } from '../types/incomes/incomes-service/income-body.type'
import type { IncomesTypes } from '../types/incomes/incomes-service/incomes.type'
import { HttpUtils } from '../utils/http-utils'

export class IncomesService {
	static async getIncomes(): Promise<IncomesTypes> {
		const returnObject: IncomesTypes = {
			error: false,
			redirect: null,
			incomes: null,
		}

		const result = await HttpUtils.request('categories/income')

		if (result.error) {
			returnObject.error = 'Возникла ошибка при запросе доходов'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.incomes = result.response
		return returnObject
	}

	static async getIncome(id: string | number): Promise<IncomesTypes> {
		const returnObject: IncomesTypes = {
			error: false,
			redirect: null,
			income: null,
		}

		const result = await HttpUtils.request('categories/income/' + id)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при запросе дохода'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.income = result.response
		return returnObject
	}

	static async createIncome(data: IncomeBodyType): Promise<IncomesTypes> {
		const returnObject: IncomesTypes = {
			error: false,
			redirect: null,
		}

		const result = await HttpUtils.request(
			'categories/income',
			true,
			'POST',
			data
		)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при создании дохода'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		return returnObject
	}

	static async deleteIncome(id: string | number): Promise<IncomesTypes> {
		const returnObject: IncomesTypes = {
			error: false,
			redirect: null,
		}

		const result = await HttpUtils.request(
			'categories/income/' + id,
			true,
			'Delete'
		)

		if (result.error) {
			returnObject.error = 'Возникла ошибка при удалении дохода'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}
		return returnObject
	}

	static async updateIncome(
		id: string | number,
		data: IncomeBodyType
	): Promise<IncomesTypes> {
		const returnObject: IncomesTypes = {
			error: false,
			redirect: null,
		}

		const result = await HttpUtils.request(
			'categories/income/' + id,
			true,
			'PUT',
			data
		)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при редактировании дохода'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}
		return returnObject
	}
}
