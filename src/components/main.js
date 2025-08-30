import {OperationsService} from "../services/income-expense-service";

export class Main{
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      this.findElements();
      this.isAllBtn = true;

      this.start().then();
      this.setupToggleButtons();
      this.setupIntervalButton();

   }

   findElements(){

      this.allBtn = document.getElementById('all');
      this.yearBtn = document.getElementById('year');
      this.monthBtn = document.getElementById('month');
      this.weekhBtn = document.getElementById('week');
      this.dayBtn = document.getElementById('day');
      this.intervalBtn = document.getElementById('interval');

      this.pieChartCanvas = document.getElementById('donutChart').getContext('2d');
      this.pieChartCanvas2 = document.getElementById('donutChart2').getContext('2d');

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

      const data = await this.getOperationsIntervalData(dateFrom, dateTo);
      if(data){
         this.createPieChart(data);
      }
   }
   async start(){
      if(this.isAllBtn){
         this.allBtn.classList.add("active");
         const data = await this.getOperationsAllData();
         if(data){
            this.createPieChart(data);
         }
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
               return;
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

            if(data){
               this.createPieChart(data);
            }
         });
      });
   }

   createPieChart(operationsData) {
      console.log('Operations data:', operationsData); // Для отладки

      // Группируем доходы по категориям
      const incomeOperations = operationsData.filter(op => op.type === 'income');
      console.log('Income operations:', incomeOperations); // Для отладки

      const incomeData = this.groupDataByCategory(incomeOperations);
      console.log('Income data:', incomeData); // Для отладки

      // Группируем расходы по категориям
      const expenseOperations = operationsData.filter(op => op.type === 'expense');
      console.log('Expense operations:', expenseOperations); // Для отладки

      const expenseData = this.groupDataByCategory(expenseOperations);
      console.log('Expense data:', expenseData); // Для отладки

      // Создаем график для доходов (только если есть данные)
      if (incomeData.labels.length > 0 && incomeData.amounts.length > 0) {
         this.createChart(
           this.pieChartCanvas,
           incomeData.labels,
           incomeData.amounts,
           'Доходы по категориям',
           'pieChart'
         );
      } else {
         this.clearChart('pieChart');
         console.log('No income data to display');
      }

      // Создаем график для расходов (только если есть данные)
      if (expenseData.labels.length > 0 && expenseData.amounts.length > 0) {
         this.createChart(
           this.pieChartCanvas2,
           expenseData.labels,
           expenseData.amounts,
           'Расходы по категориям',
           'pieChart2'
         );
      } else {
         this.clearChart('pieChart2');
         console.log('No expense data to display');
      }
   }
   groupDataByCategory(operations) {
      const categories = {};

      operations.forEach(operation => {
         if (!categories[operation.category]) {
            categories[operation.category] = 0;
         }
         categories[operation.category] += parseFloat(operation.amount);
      });

      const sortedCategories = Object.entries(categories)
        .sort(([,a], [,b]) => b - a);

      return {
         labels: sortedCategories.map(([category]) => category),
         amounts: sortedCategories.map(([,amount]) => amount)
      };
   }
   clearChart(chartName) {
      if (this[chartName]) {
         this[chartName].destroy();
         this[chartName] = null;
      }

      const canvasId = chartName === 'pieChart' ? 'donutChart' : 'donutChart2';
      const canvas = document.getElementById(canvasId);
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#999';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Нет данных для отображения', canvas.width / 2, canvas.height / 2);
   }

   createChart(canvas, labels, data, title, chartName) {
      // Уничтожаем предыдущий график если он существует
      if (this[chartName]) {
         this[chartName].destroy();
      }

      const backgroundColors = [
         '#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de',
         '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
         '#FF6384', '#C9CBCF', '#4BC0C0', '#FFCD56', '#36A2EB', '#FF6384'
      ];

      const pieData = {
         labels: labels,
         datasets: [
            {
               data: data,
               backgroundColor: backgroundColors.slice(0, labels.length),
               borderWidth: 1,
               hoverOffset: 4
            }
         ]
      };

      const pieOptions = {
         maintainAspectRatio: false,
         responsive: true,
         plugins: {
            title: {
               display: true,
               text: title,
               font: {
                  size: 16,
                  weight: 'bold'
               },
               padding: 20
            },
            legend: {
               position: 'bottom',
               labels: {
                  boxWidth: 12,
                  padding: 15,
                  font: {
                     size: 12
                  }
               }
            },
            tooltip: {
               callbacks: {
                  label: function(context) {
                     const label = context.label || '';
                     const value = context.raw || 0;
                     const total = context.dataset.data.reduce((a, b) => a + b, 0);
                     const percentage = ((value / total) * 100).toFixed(1);
                     return `${label}: $${value} (${percentage}%)`;
                  }
               }
            }
         }
      };

      this[chartName] = new Chart(canvas, {
         type: 'pie',
         data: pieData,
         options: pieOptions
      });
   }


}