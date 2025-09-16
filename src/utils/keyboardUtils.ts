export class KeyboardUtils {
	// Объявляем статическое свойство с правильным типом
	private static previousHandler: ((e: KeyboardEvent) => void) | null = null

	static setEnterHandler(callback: () => void) {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				callback()
			}
		}

		// Удаляем предыдущий обработчик, если он существует
		this.clear()

		// Добавляем новый обработчик
		document.addEventListener('keydown', handler)

		// Сохраняем ссылку для последующего удаления
		this.previousHandler = handler
	}

	static clear() {
		if (this.previousHandler) {
			document.removeEventListener('keydown', this.previousHandler)
			this.previousHandler = null
		}
	}
}
