export interface ValidateField {
	element: HTMLInputElement
	options:
		| { ['pattern']: RegExp }
		| { ['checkProperty']: boolean }
		| { ['compareTo']: HTMLInputElement }
		| { ['checked']: boolean }
		| { ['amount']: boolean }
		| { ['date']: boolean }
	
}


export interface ValidateOptions {
	pattern?: RegExp
	checkProperty?: boolean
	compareTo?: HTMLInputElement
	checked?: boolean
	amount?: boolean
	date?: boolean
}
