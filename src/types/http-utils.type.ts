import type { ErrorCommonResponseType } from './error-common-response.type'

export interface ResultResponse<R> {
	error: boolean
	response: R | null | ErrorCommonResponseType
	redirect?: string
}
