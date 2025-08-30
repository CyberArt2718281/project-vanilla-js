import {HttpUtils} from "../utils/http-utils";

export class ExpensesService {
   static async getExpenses() {
      const returnObject = {
         error: false,
         redirect: null,
         expenses: null,
      }

      const result = await HttpUtils.request('categories/expense');


      if (result.error) {
         returnObject.error = 'Возникла ошибка при запросе расходов';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }

      returnObject.expenses = result.response;
      return returnObject;
   }

   static async getExpense(id) {
      const returnObject = {
         error: false,
         redirect: null,
         expense: null,
      }

      const result = await HttpUtils.request('categories/expense/' + id);


      if (result.error || !result.response) {
         returnObject.error = 'Возникла ошибка при запросе расхода';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }

      returnObject.expense = result.response;
      return returnObject;
   }

   static async createExpense(data) {
      const returnObject = {
         error: false,
         redirect: null,
      }

      const result = await HttpUtils.request('categories/expense', true, "POST", data);


      if (result.error || !result.response) {
         returnObject.error = 'Возникла ошибка при создании расхода';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }

      return returnObject;
   }

   static async deleteExpense(id) {
      const returnObject = {
         error: false,
         redirect: null,
      }

      const result = await HttpUtils.request('categories/expense/' + id, true, "Delete");

      if (result.error) {
         returnObject.error = 'Возникла ошибка при удалении расхода';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }
      return returnObject;
   }


   static async updateExpense(id, data) {
      const returnObject = {
         error: false,
         redirect: null,
      }

      const result = await HttpUtils.request('categories/expense/' + id, true, "PUT", data);

      if (result.error || !result.response) {
         returnObject.error = 'Возникла ошибка при редактировании расхода';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }
      return returnObject;
   }
}