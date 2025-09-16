import type { ErrorTypes } from '../../services/error.type'
import type { Income } from './income.type'

export interface IncomesTypes {
	error: boolean | string
	redirect: null | string
	incomes?: null | Income[] | ErrorTypes | []
	income?: null | Income | ErrorTypes
}
