import {HttpUtils} from "../utils/http-utils";

export class BalanceService {
   static async getBalance(){
      const returnObject = {
         error: false,
         redirect: null,
         balance: null,
      }

      const result = await HttpUtils.request('balance');


      if (result.error || !result.response) {
         returnObject.error = 'Возникла ошибка при запросе баланса';
         if (result.redirect) {
            returnObject.redirect = result.redirect;
         }
         return returnObject;
      }

      returnObject.balance = result.response.balance;
      return returnObject;
   }
}