import {HttpUtils} from "../utils/http-utils";

export class OrdersService {
   static async getOrders() {
      const returnObject = {
         error: false,
         redirect: null,
         orders: null,
      }

      const result = await HttpUtils.request('orders');


      if (result.redirect || result.error || !result.response || (result.response && (result.response.error || !result.response.orders))) {
         returnObject.error = 'Возникла ошибка при запросе заказов';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }

      returnObject.orders = result.response.orders;
      return returnObject;
   }
   static async getOrder(id) {
      const returnObject = {
         error: false,
         redirect: null,
         order: null,
      }

      const result = await HttpUtils.request('orders/' + id);


      if (result.error || !result.response || (result.response && result.response.error)) {
         returnObject.error = 'Возникла ошибка при запросе заказа';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }

      returnObject.order = result.response;
      return returnObject;
   }

   static async createOrder(data) {
      const returnObject = {
         error: false,
         redirect: null,
         id: null,
      }

      const result = await HttpUtils.request('orders', true, "POST", data);


      if (result.error || !result.response || (result.response && result.response.error)) {
         returnObject.error = 'Возникла ошибка при создании заказа';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }

      returnObject.id = result.response.id;
      return returnObject;
   }

   static async deleteOrder(id) {
      const returnObject = {
         error: false,
         redirect: null,
      }

      const result = await HttpUtils.request('orders/' + id, true, "Delete"  );

      if (result.error || !result.response || (result.response && result.response.error)) {
         returnObject.error = 'Возникла ошибка при удалении заказа';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }
      return returnObject;
   }


   static async updateOrder(id,data) {
      const returnObject = {
         error: false,
         redirect: null,
      }

      const result = await HttpUtils.request('orders/' + id, true, "PUT", data );

      if (result.error || !result.response || (result.response && result.response.error)) {
         returnObject.error = 'Возникла ошибка при редактировании заказа';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }
      return returnObject;
   }
}