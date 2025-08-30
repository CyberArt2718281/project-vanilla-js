import {ValidationUtils} from "../../utils/validation-utils";
import {ExpensesService} from "../../services/expenses-service";
import {KeyboardUtils} from "../../utils/keyboardUtils";
import {AuthUtils} from "../../utils/auth-utils";

export class CreateExpense {
   constructor(openNewRoute){
      this.openNewRoute = openNewRoute;
      AuthUtils.initializeAuthentication(this.openNewRoute).then(isAuthenticated =>{
         if(!isAuthenticated){
            return;
         }

         this.findElements();
         this.nameValidation  = [{element: this.inputNameCategory}];
         KeyboardUtils.setEnterHandler(() => {
            this.createExpenseProcess().then();
         });
         this.saveButton.addEventListener('click', this.createExpenseProcess.bind(this));
      });

   }

   findElements(){
      this.inputNameCategory = document.getElementById('nameInput');
      this.saveButton = document.getElementById('saveButton');
      this.errorElement = document.getElementById(`input-error-${this.inputNameCategory.id.replace('Input', '').toLowerCase()}`);
   }

   async getIncomesData(){
      const response = await ExpensesService.getExpenses();
      if(response.error){
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.expenses;
   }

   async createExpenseProcess(){
      this.errorElement.style.display = 'none';

      // Сначала проверяем валидацию
      if(!ValidationUtils.validateForm(this.nameValidation)) {
         return;
      }

      const data = await this.getIncomesData();
      let incomeExists = false;

      if(data && data.length > 0){

         incomeExists = data.some(item =>
           item.title.toLowerCase() === this.inputNameCategory.value.toLowerCase().trim()
         );
      }

      if(incomeExists){
         this.errorElement.innerText = 'Такой расход уже присутствует';
         this.errorElement.style.display = 'block';
         return;
      }

      const response = await ExpensesService.createExpense({
         title: this.inputNameCategory.value.trim()
      });

      if(response.error){
         alert(response.error);
         if(response.redirect) {
            this.openNewRoute(response.redirect);
         }
         return;
      }

      this.openNewRoute('/expenses');
   }
}