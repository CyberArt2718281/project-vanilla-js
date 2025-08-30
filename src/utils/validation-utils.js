export class ValidationUtils {
   static validateForm(validations) {
      let isValid = true;

      // Сначала скрываем все сообщения об ошибках
      validations.forEach(validation => {
         const errorElement = document.getElementById(`input-error-${validation.element.id.replace('Input', '').toLowerCase()}`);
         if (errorElement) {
            errorElement.style.display = 'none';
         }
      });

      for (let i = 0; i < validations.length; i++) {
         const validationResult = this.validateField(validations[i].element, validations[i].options);
         if (!validationResult) {
            isValid = false;

            // Показываем сообщение об ошибке для этого поля
            const errorElement = document.getElementById(`input-error-${validations[i].element.id.replace('Input', '').toLowerCase()}`);
            if (errorElement) {
               errorElement.style.display = 'block';
            }
         }
      }

      return isValid;
   }

   static validateField(element, options) {
      let condition = element.value;

      if (options) {
         if (options.hasOwnProperty('pattern')) {
            condition = element.value && element.value.match(options.pattern);
         } else if (options.hasOwnProperty('checkProperty')) {
            condition = options.checkProperty;
         } else if (options.hasOwnProperty('compareTo')) {
            condition = element.value && element.value === options.compareTo.value;
         } else if (options.hasOwnProperty('checked')) {
            condition = element.checked;
         } else if (options.hasOwnProperty('amount')) {
            condition = parseInt(element.value) > 0;
         } else if (options.hasOwnProperty('date')) {
            condition = this.validateDatePattern(element.value);
         }
      }

      if (condition) {

         return true;
      } else {
         return false;
      }
   }
   static validateDatePattern(dateString) {
      if (!dateString) return false;

      const datePattern = /^\d{4}\.\d{2}\.\d{2}$/;
      if (!datePattern.test(dateString)) {
         return false;
      }

      const parts = dateString.split('.');
      const year = parseInt(parts[0]);
      const month = parseInt(parts[1]);
      const day = parseInt(parts[2]);

      if (year < 1900 || year > 2100) return false;
      if (month < 1 || month > 12) return false;

      const daysInMonth = new Date(year, month, 0).getDate();
      if (day < 1 || day > daysInMonth) return false;

      return true;
   }
}

