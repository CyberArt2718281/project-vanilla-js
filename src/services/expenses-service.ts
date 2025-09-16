import type { Expense } from '@/types/expenses/expenses-service/expense.type'
import type { ExpenseBodyType } from '../types/expenses/expenses-service/expense-body.type'
import type { ExpenseTypes } from '../types/expenses/expenses-service/expenses.type'

import { HttpUtils } from '../utils/http-utils'
import type { ErrorTypes } from '@/types/services/error.type'
import type { ResultResponse } from '@/types/http-utils.type'

type ResponseExpenses = null | Expense[] | ErrorTypes | []
type ResponseExpense = null | Expense | ErrorTypes
export class ExpensesService {
	public static async getExpenses(): Promise<ExpenseTypes> {
		const returnObject: ExpenseTypes = {
			error: false,
			redirect: null,
			expenses: null,
		}

		const result: ResultResponse<ResponseExpenses> = await HttpUtils.request<ResponseExpenses, null>('categories/expense')

		if (result.error) {
			if (returnObject.error) {
				returnObject.error = 'Возникла ошибка при запросе расходов'
			}
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.expenses = result.response
		return returnObject
	}

	static async getExpense(id: string | number): Promise<ExpenseTypes> {
		const returnObject: ExpenseTypes = {
			error: false,
			redirect: null,
			expense: null,
		}

		const result:ResultResponse<ResponseExpense> = await HttpUtils.request<ResponseExpense, null>('categories/expense/' + id)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при запросе расхода'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		returnObject.expense = result.response
		return returnObject
	}

	public static async createExpense(
		data: ExpenseBodyType
	): Promise<ExpenseTypes> {
		const returnObject: ExpenseTypes = {
			// одинаковые типы как и в getExpense
			error: false,
			redirect: null,
		}

		const result: ResultResponse<ResponseExpense> = await HttpUtils.request<ResponseExpense, ExpenseBodyType>(
			'categories/expense',
			true,
			'POST',
			data
		)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при создании расхода'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}

		return returnObject
	}

	static async deleteExpense(id: number | string): Promise<ExpenseTypes> {
		const returnObject: ExpenseTypes = {
			// одинаковые типы как и в getExpense
			error: false,
			redirect: null,
		}

		const result: ResultResponse<ResponseExpense> = await HttpUtils.request<ResponseExpense, null>(
			'categories/expense/' + id,
			true,
			'Delete'
		)

		if (result.error) {
			returnObject.error = 'Возникла ошибка при удалении расхода'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}
		return returnObject
	}

	static async updateExpense(
		id: string | number,
		data: ExpenseBodyType
	): Promise<ExpenseTypes> {
		const returnObject: ExpenseTypes = {
			error: false,
			redirect: null,
		}

		const result: ResultResponse<ResponseExpense> = await HttpUtils.request<ResponseExpense, ExpenseBodyType>(
			'categories/expense/' + id,
			true,
			'PUT',
			data
		)

		if (result.error || !result.response) {
			returnObject.error = 'Возникла ошибка при редактировании расхода'
			if (result.redirect) {
				returnObject.redirect = result.redirect
			}
			return returnObject
		}
		return returnObject
	}
}
