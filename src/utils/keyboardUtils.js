export class KeyboardUtils {
   static previousHandler = null;

   static setEnterHandler(callback) {
      // Удаляем предыдущий обработчик если он есть
      if (this.previousHandler) {
         document.removeEventListener('keydown', this.previousHandler);
      }

      // Создаем новый обработчик
      const handler = (e) => {
         if (e.key === 'Enter') {
            e.preventDefault();
            callback();
         }
      };

      // Добавляем новый обработчик
      document.addEventListener('keydown', handler);

      // Сохраняем ссылку для последующего удаления
      this.previousHandler = handler;
   }

   static clear() {
      if (this.previousHandler) {
         document.removeEventListener('keydown', this.previousHandler);
         this.previousHandler = null;
      }
   }
}