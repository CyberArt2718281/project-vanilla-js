import {ValidationUtils} from "../../utils/validation-utils";
import {ExpensesService} from "../../services/expenses-service";
import {KeyboardUtils} from "../../utils/keyboardUtils";

export class EditExpense {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      this.findElements();
      this.userId = new URLSearchParams(window.location.search).get('id');
      if (!this.userId) {
         return this.openNewRoute('/');
      }
      this.getIncome().then();
      this.originInputValue = null;
      this.nameValidation = [{element: this.inputNameCategory}]
      KeyboardUtils.setEnterHandler(() => {
         this.saveExpenseProcess().then();
      });
      this.saveButton.addEventListener('click', this.saveExpenseProcess.bind(this));
   }

   findElements() {
      this.inputNameCategory = document.getElementById('nameInput');
      this.saveButton = document.getElementById('saveButton');
      this.errorElement = document.getElementById(`input-error-${this.inputNameCategory.id.replace('Input', '').toLowerCase()}`);
   }

   async getIncome() {
      const response = await ExpensesService.getExpense(this.userId);
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      this.inputNameCategory.value = response.expense.title;
      this.originInputValue= response.expense.title;
      return response.expense.title;
   }

   async saveExpenseProcess() {
      this.errorElement.style.display = 'none';
      if (!ValidationUtils.validateForm(this.nameValidation)) {
         this.errorElement.style.display = 'block';
         return;
      }
      if (this.inputNameCategory.value === this.originInputValue) {
         this.errorElement.style.display = 'block';
         this.errorElement.innerText = 'Изменений не произведено';
         return;
      }
      const response = await ExpensesService.updateExpense(this.userId, {
         title: this.inputNameCategory.value.trim()
      });

      if (response.error) {
         alert(response.error);
         if (response.redirect) {
            this.openNewRoute(response.redirect);
         }
         return;
      }

      this.openNewRoute('/expenses');
   }
}