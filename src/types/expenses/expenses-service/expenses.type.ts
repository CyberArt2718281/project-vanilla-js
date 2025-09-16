import type { ErrorTypes } from '../../services/error.type'
import type { Expense } from './expense.type'

export interface ExpenseTypes {
	error: boolean | string
	redirect: null | string
	expenses?: null | Expense[] | ErrorTypes | []
	expense?: null | Expense | ErrorTypes
}
