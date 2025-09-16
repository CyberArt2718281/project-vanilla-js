import type { OperationBodyType } from '../types/operations/operation-service/operation-body.type'
import type { OperationTypes } from '../types/operations/operation-service/operations.type copy'
import { HttpUtils } from '../utils/http-utils'

export class OperationsService {
	static async getOperationsAll(): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
			operations: null,
		}

		const result = await HttpUtils.request('operations?period=all')

		if (result.error) {
			returnObject.error = 'Возникла ошибка при запросе операций'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.operations = result.response
		return returnObject
	}
	static async getOperationsYear(): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
			operations: null,
		}

		const result = await HttpUtils.request('operations?period=year')

		if (result.error) {
			returnObject.error = 'Возникла ошибка при запросе операций'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.operations = result.response
		return returnObject
	}

	static async getOperationsDay(): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
			operations: null,
		}

		const result = await HttpUtils.request('operations?period=day')

		if (result.error) {
			returnObject.error = 'Возникла ошибка при запросе операций'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.operations = result.response
		return returnObject
	}
	static async getOperationsMonth(): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
			operations: null,
		}

		const result = await HttpUtils.request('operations?period=month')

		if (result.error) {
			returnObject.error = 'Возникла ошибка при запросе операций'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.operations = result.response
		return returnObject
	}
	static async getOperationsWeek(): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
			operations: null,
		}

		const result = await HttpUtils.request('operations?period=week')

		if (result.error) {
			returnObject.error = 'Возникла ошибка при запросе операций'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.operations = result.response
		return returnObject
	}
	static async getOperationsInterval(
		dayFrom: string,
		dayTo: string
	): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
			operations: null,
		}

		const result = await HttpUtils.request(
			`operations?period=interval&dateFrom=${dayFrom}&dateTo=${dayTo}`
		)

		if (result.error) {
			returnObject.error = 'Возникла ошибка при запросе операций'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.operations = result.response
		return returnObject
	}

	static async getOperation(id: string | number): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
			operation: null,
		}

		const result = await HttpUtils.request('operations/' + id)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при запросе операции'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.operation = result.response
		return returnObject
	}

	static async createOperation(
		data: OperationBodyType
	): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
		}

		const result = await HttpUtils.request('operations', true, 'POST', data)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при создании операции'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		return returnObject
	}

	static async deleteOperation(id: string | number): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
		}

		const result = await HttpUtils.request('operations/' + id, true, 'Delete')

		if (result.error) {
			returnObject.error = 'Возникла ошибка при удалении операции'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}
		return returnObject
	}

	static async updateExpense(
		id: string | number,
		data: OperationBodyType
	): Promise<OperationTypes> {
		const returnObject: OperationTypes = {
			error: false,
			redirect: null,
		}

		const result = await HttpUtils.request(
			'operations/' + id,
			true,
			'PUT',
			data
		)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при редактировании операции'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}
		return returnObject
	}
}
