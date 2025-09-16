import type { ErrorTypes } from '../../services/error.type'
import type { Operation } from './operation.type'

export interface OperationTypes {
	error: boolean | string
	redirect: null | string
	operations?: null | Operation[] | ErrorTypes | []
	operation?: null | Operation | ErrorTypes
}
