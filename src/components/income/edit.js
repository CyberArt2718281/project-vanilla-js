import {IncomesService} from "../../services/incomes-service";
import {ValidationUtils} from "../../utils/validation-utils";
import {KeyboardUtils} from "../../utils/keyboardUtils";
import {AuthUtils} from "../../utils/auth-utils";

export class EditIncome {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      AuthUtils.initializeAuthentication(this.openNewRoute).then(isAuthenticated =>{
         if(!isAuthenticated){
            return;
         }

         this.findElements();
         this.userId = new URLSearchParams(window.location.search).get('id');
         if (!this.userId) {
            return this.openNewRoute('/');
         }
         this.getIncome().then();
         this.originInputValue = null;
         this.nameValidation = [{element: this.inputNameCategory}]
         KeyboardUtils.setEnterHandler(() => {
            this.saveIncomeProcess().then();
         });
         this.saveButton.addEventListener('click', this.saveIncomeProcess.bind(this));
      });

   }

   findElements() {
      this.inputNameCategory = document.getElementById('nameInput');
      this.saveButton = document.getElementById('saveButton');
      this.errorElement = document.getElementById(`input-error-${this.inputNameCategory.id.replace('Input', '').toLowerCase()}`);
   }

   async getIncome() {
      const response = await IncomesService.getIncome(this.userId);
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      this.inputNameCategory.value = response.income.title;
      this.originInputValue= response.income.title;
      return response.income.title;
   }

   async saveIncomeProcess() {
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
      const response = await IncomesService.updateIncome(this.userId, {
         title: this.inputNameCategory.value.trim()
      });

      if (response.error) {
         alert(response.error);
         if (response.redirect) {
            this.openNewRoute(response.redirect);
         }
         return;
      }

      this.openNewRoute('/income');
   }
}