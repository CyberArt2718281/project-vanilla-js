import {ExpensesService} from "../../services/expenses-service";
import {KeyboardUtils} from "../../utils/keyboardUtils";


export class Expense {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      this.findElements();
      this.showContainers().then();
   }

   async getExpensesData(){
      const response = await ExpensesService.getExpenses();
      if(response.error){
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.expenses;
   }

   findElements(){
      document.body.style.position = 'relative';
      document.body.classList.remove('popup-open');
      this.containerItemsIncomes = document.getElementById('container-expenses');
      this.confirmedDeleteElement = document.getElementById('confirmed-delete');
      this.popupElement = document.querySelector('.popup');
      this.notDeleteElement = document.getElementById('not-delete');
      this.currentDeleteId = null;
      this.currentDeleteElement = null;
   }

   async showContainers(){
      const incomesData = await this.getExpensesData();
      if(incomesData && incomesData.length > 0){
         for (let i = incomesData.length-1; i >= 0 ; i--) {
            const itemIncome = document.createElement("div");
            itemIncome.classList.add("income-item");

            const titleElementIncome = document.createElement('h3');
            titleElementIncome.innerText = incomesData[i].title;
            titleElementIncome.classList.add('income-title');

            const processLinks = document.createElement('div');
            processLinks.classList.add('process-links');

            const processEditLink = document.createElement('a');
            processEditLink.classList.add('edit-link');
            processEditLink.href = '/expenses/edit?id=' + incomesData[i].id;
            processEditLink.innerText = 'Редактировать'

            const processDeleteBtn = document.createElement('button');
            processDeleteBtn.type = 'button';
            processDeleteBtn.dataset.id = incomesData[i].id;
            processDeleteBtn.classList.add('delete-link');
            processDeleteBtn.innerText = 'Удалить'

            processLinks.appendChild(processEditLink)
            processLinks.appendChild(processDeleteBtn)
            itemIncome.appendChild(titleElementIncome);
            itemIncome.appendChild(processLinks);

            this.containerItemsIncomes.prepend(itemIncome);
         }
         const deleteLinkElements = document.querySelectorAll('.delete-link');
         this.showPopup(deleteLinkElements);
      }
   }

   showPopup(deleteLinks){
      const self = this;

      deleteLinks.forEach(deleteLink => {
         deleteLink.removeEventListener('click', this.handleDeleteClick);
      });

      this.handleDeleteClick = function() {
         self.currentDeleteId = this.dataset.id;
         self.currentDeleteElement = this; // Сохраняем элемент
         document.body.classList.add('popup-open');
         self.popupElement.classList.remove('d-none');
      };

      deleteLinks.forEach(deleteLink => {
         deleteLink.addEventListener('click', this.handleDeleteClick);
      });

      if (!this.popupHandlersSet) {
         this.notDeleteElement.addEventListener('click', () => {
            self.popupElement.classList.add('d-none');
            document.body.classList.remove('popup-open');
            self.currentDeleteId = null;
            self.currentDeleteElement = null;
         });
         KeyboardUtils.setEnterHandler(async () => {
            if (!self.currentDeleteId || !self.currentDeleteElement) return;

            const response = await ExpensesService.deleteExpense(self.currentDeleteId);
            if (response.error) {
               alert(response.error);
               if (response.redirect) {
                  self.openNewRoute(response.redirect);
               }
            } else {
               self.currentDeleteElement.closest('.income-item').remove();
               self.popupElement.classList.add('d-none');
               document.body.classList.remove('popup-open');
               self.currentDeleteId = null;
               self.currentDeleteElement = null;
            }
         });
         this.confirmedDeleteElement.addEventListener('click', async () => {
            if (!self.currentDeleteId || !self.currentDeleteElement) return;

            const response = await ExpensesService.deleteExpense(self.currentDeleteId);
            if (response.error) {
               alert(response.error);
               if (response.redirect) {
                  self.openNewRoute(response.redirect);
               }
            } else {
               self.currentDeleteElement.closest('.income-item').remove();
               self.popupElement.classList.add('d-none');
               document.body.classList.remove('popup-open');
               self.currentDeleteId = null;
               self.currentDeleteElement = null;
            }
         });

         this.popupHandlersSet = true;
      }
   }


}