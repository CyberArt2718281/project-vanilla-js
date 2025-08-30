import {IncomesService} from "../../services/incomes-service";
import {OperationsService} from "../../services/income-expense-service";
import config from "../../config/config";
import {KeyboardUtils} from "../../utils/keyboardUtils";
import {ValidationUtils} from "../../utils/validation-utils";
import {ExpensesService} from "../../services/expenses-service";

export class CreateIncomesExpenses {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      this.findElements();

      this.typeId = new URLSearchParams(window.location.search).get('typeId');
      if (!this.typeId) {
         return this.openNewRoute('/');
      }
      this.setupDateMask();
      this.applyDateMask(this.dateInput);
      this.startTypesShow().then();
      this.typeInput.addEventListener("change", async (e) => {
         this.categoryInput.innerHTML = '';
         if (e.target.value === config.type.income) {
            const incomesData = await this.getIncomesData();
            if (incomesData) {
               this.setOption(incomesData);
            }
         }
         if (e.target.value === config.type.expense) {
            const expenseData = await this.getExpensesData();
            if (expenseData) {
               this.setOption(expenseData);
            }
         }
      })
      this.validations = [
         {element: this.amountInput, options: {amount: true}},

         {element: this.dateInput, options: {date: true}},
      ];

      KeyboardUtils.setEnterHandler(() => {
         this.saveOperation().then();
      });

      this.saveButton.addEventListener('click', this.saveOperation.bind(this));

   }
   async startTypesShow(){
      if(this.typeId === config.type.income) {
         const incomesData = await this.getIncomesData();
         if (incomesData) {
            return this.setOption(incomesData);
         }
      }
      if(this.typeId === config.type.expense) {
         const expensesData = await this.getExpensesData();
         if (expensesData) {
            this.typeInput.value = this.typeId;
            return this.setOption(expensesData);
         }
      }

   }
   formatDate(dateString) {
      dateString = dateString.replace(/\./g, '-');
      return dateString;
   }



   setOption(data) {
      data.forEach((item) => {
         const option = document.createElement("option");
         option.value = item.id;
         option.text = item.title;
         this.categoryInput.appendChild(option)
      })
   }

   async getExpensesData() {
      const response = await ExpensesService.getExpenses();
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.expenses;
   }

   async getIncomesData() {
      const response = await IncomesService.getIncomes();
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.incomes;
   }



   setupDateMask() {
      this.dateInput.addEventListener('input', (e) => {
         this.applyDateMask(e.target);
      });

      this.dateInput.placeholder = 'гггг.мм.дд';
   }

   applyDateMask(input) {
      let value = input.value.replace(/\D/g, '');

      if (value.length > 8) {
         value = value.slice(0, 8);
      }


      if (value.length > 4) {
         value = value.slice(0, 4) + '.' + value.slice(4);
      }
      if (value.length > 7) {
         value = value.slice(0, 7) + '.' + value.slice(7);
      }

      input.value = value;
   }


   findElements(){
      this.typeInput = document.getElementById("typeInput");
      this.amountInput = document.getElementById("amountInput");
      this.categoryInput = document.getElementById("categoryInput");
      this.dateInput = document.getElementById("dateInput");
      this.commentInput = document.getElementById("commentInput");

      this.saveButton = document.getElementById("editBtn");
   }

   async saveOperation() {
      if (ValidationUtils.validateForm(this.validations)) {
         const dataOperation = {};
         dataOperation.type = this.typeInput.value;
         dataOperation['category_id'] = parseInt(this.categoryInput.value);
         dataOperation.amount = parseInt(this.amountInput.value);
         dataOperation.date = this.formatDate(this.dateInput.value);
         dataOperation.comment = this.commentInput.value ? this.commentInput.value : "null";
         console.log(dataOperation)

         if (dataOperation) {
            const response = await OperationsService.createOperation(dataOperation);
            if (response.error) {
               alert(response.error);
               if (response.redirect) {
                  this.openNewRoute(response.redirect);
               }
               return;
            }
            this.openNewRoute('/income-expenses');
         }
      }
   }
}