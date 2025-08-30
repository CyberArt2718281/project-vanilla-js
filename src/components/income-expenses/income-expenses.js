import {KeyboardUtils} from "../../utils/keyboardUtils";
import {OperationsService} from "../../services/income-expense-service";
import config from "../../config/config";
import {AuthUtils} from "../../utils/auth-utils";

export class IncomeExpenses {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      AuthUtils.initializeAuthentication(this.openNewRoute).then(isAuthenticated =>{
         if(!isAuthenticated){
            return;
         }
         this.findElements();
         this.isAllBtn = true;
         this.operationsData = null;
         this.start().then();
         this.setupToggleButtons();
         this.setupIntervalButton();
         this.setupSorting();
      });


   }

   setupIntervalButton() {
      this.intervalBtn.addEventListener('click', () => {
         this.toggleIntervalMode();
      });
   }
   toggleIntervalMode() {
      this.isIntervalMode = !this.isIntervalMode;

      if (this.isIntervalMode) {
         this.showDateInputs();
      } else {
         this.hideDateInputs();
      }
   }

   setupSorting() {
      const headers = document.querySelectorAll('thead th');
      headers.forEach((header, index) => {

         if (index >= 5 || index === 6 || index===0) return;

         header.style.cursor = 'pointer';
         header.addEventListener('click', () => {
            this.sortTable(index);
         });
      });
   }
   sortTable(columnIndex) {
      if (!this.operationsData || this.operationsData.length === 0) return;

      const sortedData = [...this.operationsData].sort((a, b) => {
         let valueA, valueB;

         switch(columnIndex) {
            case 1:
               valueA = a.type === config.type.income ? 'доход' : 'расход';
               valueB = b.type === config.type.income ? 'доход' : 'расход';
               break;

            case 2:
               valueA = a.category || '';
               valueB = b.category || '';
               break;

            case 3:
               valueA = parseFloat(a.amount);
               valueB = parseFloat(b.amount);
               break;

            case 4:
               valueA = new Date(a.date);
               valueB = new Date(b.date);
               break;

            default:
               return 0;
         }

         if (valueA < valueB) return -1;
         if (valueA > valueB) return 1;
         return 0;
      });

      if (this.lastSortedColumn === columnIndex) {
         sortedData.reverse();
         this.lastSortedColumn = null;
      } else {
         this.lastSortedColumn = columnIndex;
      }

      this.clearTable();
      this.showTableData(sortedData);
   }

   showTableData(data) {
      this.tableBodyElement.innerHTML = '';

      data.forEach((operation, index) => {
         if(operation.category){
            const trElement = document.createElement("tr");
            trElement.classList.add("table-item");

            const tdNumber = document.createElement("td");
            tdNumber.classList.add("number");
            tdNumber.textContent = `${index + 1}`;

            const tdColor = document.createElement("td");
            if(operation.type === config.type.income){
               tdColor.classList.add("income-color");
               tdColor.textContent = 'доход';
            } else {
               tdColor.classList.add("expense-color");
               tdColor.textContent = 'расход';
            }

            trElement.appendChild(tdNumber);
            trElement.appendChild(tdColor);

            trElement.insertCell().innerHTML = operation.category;
            trElement.insertCell().innerHTML = operation.amount + "$";
            trElement.insertCell().innerHTML = operation.date;

            if(operation.comment && operation.comment !== "null") {
               trElement.insertCell().innerHTML = operation.comment;
            } else {
               trElement.insertCell().innerHTML = '';
            }

            const toolsElement = document.createElement("td");
            toolsElement.classList.add("del-create");
            toolsElement.innerHTML = `
         <button class="delete-link border-0" data-id="${operation.id}">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4.5 5.5C4.77614 5.5 5 5.72386 5 6V12C5 12.2761 4.77614 12.5 4.5 12.5C4.22386 12.5 4 12.2761 4 12V6C4 5.72386 4.22386 5.5 4.5 5.5Z" fill="black"/>
               <path d="M7 5.5C7.27614 5.5 7.5 5.72386 7.5 6V12C7.5 12.2761 7.27614 12.5 7 12.5C6.72386 12.5 6.5 12.2761 6.5 12V6C6.5 5.72386 6.72386 5.5 7 5.5Z" fill="black"/>
               <path d="M10 6C10 5.72386 9.77614 5.5 9.5 5.5C9.22386 5.5 9 5.72386 9 6V12C9 12.2761 9.22386 12.5 9.5 12.5C9.77614 12.5 10 12.2761 10 12V6Z" fill="black"/>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 3C13.5 3.55228 13.0523 4 12.5 4H12V13C12 14.1046 11.1046 15 10 15H4C2.89543 15 2 14.1046 2 13V4H1.5C0.947715 4 0.5 3.55228 0.5 3V2C0.5 1.44772 0.947715 1 1.5 1H5C5 0.447715 5.44772 0 6 0H8C8.55229 0 9 0.447715 9 1H12.5C13.0523 1 13.5 1.44772 13.5 2V3ZM3.11803 4L3 4.05902V13C3 13.5523 3.44772 14 4 14H10C10.5523 14 11 13.5523 11 13V4.05902L10.882 4H3.11803ZM1.5 3V2H12.5V3H1.5Z" fill="black"/>
            </svg>
         </button>
         <a href="/income-expenses/edit?id=${operation.id}">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12.1465 0.146447C12.3417 -0.0488155 12.6583 -0.0488155 12.8536 0.146447L15.8536 3.14645C16.0488 3.34171 16.0488 3.65829 15.8536 3.85355L5.85357 13.8536C5.80569 13.9014 5.74858 13.9391 5.68571 13.9642L0.68571 15.9642C0.500001 16.0385 0.287892 15.995 0.146461 15.8536C0.00502989 15.7121 -0.0385071 15.5 0.0357762 15.3143L2.03578 10.3143C2.06092 10.2514 2.09858 10.1943 2.14646 10.1464L12.1465 0.146447ZM11.2071 2.5L13.5 4.79289L14.7929 3.5L12.5 1.20711L11.2071 2.5ZM12.7929 5.5L10.5 3.20711L4.00001 9.70711V10H4.50001C4.77616 10 5.00001 10.2239 5.00001 10.5V11H5.50001C5.77616 11 6.00001 11.2239 6.00001 11.5V12H6.29291L12.7929 5.5ZM3.03167 10.6755L2.92614 10.781L1.39754 14.6025L5.21903 13.0739L5.32456 12.9683C5.13496 12.8973 5.00001 12.7144 5.00001 12.5V12H4.50001C4.22387 12 4.00001 11.7761 4.00001 11.5V11H3.50001C3.28561 11 3.10272 10.865 3.03167 10.6755Z" fill="black"/>
            </svg>
         </a>
         `;
            trElement.appendChild(toolsElement);

            this.tableBodyElement.appendChild(trElement);
         }

      });

      const deleteLinkElements = document.querySelectorAll('.delete-link');
      this.showPopup(deleteLinkElements);
   }
   showDateInputs() {
      // Создаем элементы для выбора дат
      const dateFromInput = document.createElement('input');
      dateFromInput.type = 'date';
      dateFromInput.id = 'dateFromInput';
      dateFromInput.className = 'date-input';

      const dateToInput = document.createElement('input');
      dateToInput.type = 'date';
      dateToInput.id = 'dateToInput';
      dateToInput.className = 'date-input';

      const saveButton = document.createElement('button');
      saveButton.id = 'saveInterval';
      saveButton.className = 'save-interval-btn';
      saveButton.textContent = 'Сохранить';
      saveButton.addEventListener('click', () => this.saveInterval());

      const dateCurrentDiv = document.querySelector('.date-current');
      dateCurrentDiv.innerHTML = '';

      const fromSpan = document.createElement('div');
      fromSpan.textContent = 'c ';
      dateCurrentDiv.appendChild(fromSpan);
      dateCurrentDiv.appendChild(dateFromInput);

      const toSpan = document.createElement('div');
      toSpan.textContent = ' по ';
      dateCurrentDiv.appendChild(toSpan);
      dateCurrentDiv.appendChild(dateToInput);

      dateCurrentDiv.appendChild(saveButton);

      this.intervalBtn.classList.add('active');
   }
   hideDateInputs() {
      const dateCurrentDiv = document.querySelector('.date-current');
      dateCurrentDiv.innerHTML = 'c <span id="dateFrom">Дата</span> по <span id="dateTo">Дата</span>';

      this.intervalBtn.classList.remove('active');
      this.isIntervalMode = false;
   }
   async saveInterval() {
      const dateFrom = document.getElementById('dateFromInput').value;
      const dateTo = document.getElementById('dateToInput').value;

      if (!dateFrom || !dateTo) {
         alert('Пожалуйста, выберите обе даты');
         return;
      }

      if (new Date(dateFrom) > new Date(dateTo)) {
         alert('Дата "с" не может быть позже даты "по"');
         return;
      }

      // Загружаем данные за выбранный интервал
      const data = await this.getOperationsIntervalData(dateFrom, dateTo);
      if (data) {
         this.clearTable();
         await this.showContainers(data);
      }
   }
   async start(){
      if(this.isAllBtn){
         this.allBtn.classList.add("active");
         const data = await this.getOperationsAllData();
         this.showContainers(data).then();
      }else{
         this.allBtn.classList.remove("active");
      }
   }
   async getOperationsAllData() {
      const response = await OperationsService.getOperationsAll();
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.operations;
   }
   async getOperationsDayData() {
      const response = await OperationsService.getOperationsDay();
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.operations;
   }
   async getOperationsMonthData() {
      const response = await OperationsService.getOperationsMonth();
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.operations;
   }
   async getOperationsWeekData() {
      const response = await OperationsService.getOperationsWeek();
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.operations;
   }
   async getOperationsYearData() {
      const response = await OperationsService.getOperationsYear();
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.operations;
   }
   async getOperationsIntervalData(dateFrom, dateTo) {
      const response = await OperationsService.getOperationsInterval(dateFrom, dateTo);
      if (response.error) {
         alert(response.error);
         return response.redirect ? this.openNewRoute(response.redirect) : null;
      }
      return response.operations;
   }

   setupToggleButtons() {
      const buttons = [this.allBtn, this.dayBtn, this.weekhBtn, this.monthBtn, this.yearBtn, this.intervalBtn];

      buttons.forEach(btn => {
         btn.addEventListener('click', async () => {
            if (btn.id !== 'interval') {
               this.isIntervalMode = false;
               this.hideDateInputs();
            }
            buttons.forEach(b => b.classList.remove('active'));

            btn.classList.add('active');
            if (btn.id === 'interval') {
               return; // Для интервала данные загружаются после выбора дат
            }
            let data;
            switch(btn.id) {
               case 'day':
                  data = await this.getOperationsDayData();
                  break;
               case 'week':
                  data = await this.getOperationsWeekData();
                  break;
               case 'month':
                  data = await this.getOperationsMonthData();
                  break;
               case 'year':
                  data = await this.getOperationsYearData();
                  break;
               default: // 'all'
                  data = await this.getOperationsAllData();
                  break;
            }

            if (data) {
               this.clearTable();
               await this.showContainers(data);
            }
         });
      });
   }
   clearTable() {
      this.tableBodyElement.innerHTML = '';
   }

   findElements() {
      document.body.style.position = 'relative';
      document.body.classList.remove('popup-open');
      this.tableBodyElement = document.getElementById('table-body');
      this.allBtn = document.getElementById('all');
      this.yearBtn = document.getElementById('year');
      this.monthBtn = document.getElementById('month');
      this.weekhBtn = document.getElementById('week');
      this.dayBtn = document.getElementById('day');
      this.intervalBtn = document.getElementById('interval');



      this.confirmedDeleteElement = document.getElementById('confirmed-delete');
      this.popupElement = document.querySelector('.popup');
      this.notDeleteElement = document.getElementById('not-delete');
      this.currentDeleteId = null;
      this.currentDeleteElement = null;
   }

   async showContainers(data) {

      const operationsData = await data;
      if (operationsData && operationsData.length > 0) {
         this.operationsData = operationsData;
         this.showTableData(operationsData);
      }
   }

   showPopup(deleteLinks) {
      const self = this;

      deleteLinks.forEach(deleteLink => {
         deleteLink.removeEventListener('click', this.handleDeleteClick);
      });

      this.handleDeleteClick = function () {
         self.currentDeleteId = this.dataset.id;
         self.currentDeleteElement = this;
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

            const response = await OperationsService.deleteOperation(self.currentDeleteId);
            if (response.error) {
               alert(response.error);
               if (response.redirect) {
                  self.openNewRoute(response.redirect);
               }
            } else {
               self.popupElement.classList.add('d-none');
               document.body.classList.remove('popup-open');
               self.currentDeleteId = null;
               self.currentDeleteElement = null;
               this.openNewRoute('/income-expenses');
            }
         });
         this.confirmedDeleteElement.addEventListener('click', async () => {
            if (!self.currentDeleteId || !self.currentDeleteElement) return;

            const response = await OperationsService.deleteOperation(self.currentDeleteId);
            if (response.error) {
               alert(response.error);
               if (response.redirect) {
                  self.openNewRoute(response.redirect);
               }
            } else {
               self.popupElement.classList.add('d-none');
               document.body.classList.remove('popup-open');
               self.currentDeleteId = null;
               self.currentDeleteElement = null;
               this.openNewRoute('/income-expenses');
            }
         });

         this.popupHandlersSet = true;
      }
   }
}