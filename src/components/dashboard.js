import {HttpUtils} from "../utils/http-utils";
import config from "../config/config";

export class Dashboard {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;

      this.getOrders().then();


   }

   async getOrders() {
      const result = await HttpUtils.request('orders');

      if (result.redirect) {
         return this.openNewRoute(result.redirect);
      }

      if (result.error || !result.response || (result.response && (result.response.error || !result.response.orders))) {
         return alert('Возникла ошибка при запросе фрилансеров');
      }

      this.loadOrdersStatistic(result.response.orders);
      this.loadCalendarInfo(result.response.orders);
   }

   loadOrdersStatistic(orders) {
      document.getElementById('count-orders').innerText = orders.length;
      document.getElementById('done-orders').innerText = orders.filter(order => order.status === config.orderStatuses.success).length;
      document.getElementById('in-progress-orders').innerText = orders.filter(order => [config.orderStatuses.confirmed, config.orderStatuses.new].includes(order.status)).length;
      document.getElementById('canceled-orders').innerText = orders.filter(order => order.status === config.orderStatuses.canceled).length;
   }


   loadCalendarInfo(orders) {
      const prepareEvents = [];

      for (const order of orders) {
         let color = null;
         if (order.status === config.orderStatuses.success) {
            color = 'grey'
         }

         if (order.scheduledDate) {
            const scheduledDate = new Date(order.scheduledDate)

            prepareEvents.push({
               title: order.freelancer.name + " " + order.freelancer.lastName + " выполняет заказ " + order.number,
               start: scheduledDate,
               backgroundColor: color ? color : '#00c0ef',
               borderColor: color ? color : '#00c0ef',
               url: `/orders/view?id=${order.id}`,
               allDay: true
            });
         }
         if (order.deadlineDate) {
            const deadlineDate = new Date(order.deadlineDate)

            prepareEvents.push({
               title: "Дедлайн заказа " + order.number,
               start: deadlineDate,
               backgroundColor: color ? color : '#f39c12',
               borderColor: color ? color : '#f39c12',
               url: `/orders/view?id=${order.id}`,
               allDay: true
            });
         }
         if (order.completeDate) {
            const completeDate = new Date(order.completeDate)

            prepareEvents.push({
               title: "Заказ " + order.number + " выполнен фрилансером " + order.freelancer.name,
               start: completeDate,
               backgroundColor: color ? color : '#00a65a',
               borderColor: color ? color : '#00a65a',
               url: `/orders/view?id=${order.id}`,
               allDay: true
            });
         }
      }

      let calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
         headerToolbar: {
            left: 'prev,next today', center: 'title', right: ''
         },
         locale: "ru",
         firstDay: 1,
         themeSystem: 'bootstrap',
         events: prepareEvents,
      });
      calendar.render()
   }

}