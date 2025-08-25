import {HttpUtils} from "../utils/http-utils";

export class AuthService {
   static async login(data) {
      const result = await HttpUtils.request('login', false, "POST", data)

      if (result.error || !result.response || (result.response && (!result.response.accessToken || !result.response.refreshToken || !result.response.id || !result.response.name))) {
         return result.response;
      }

      return result.response;
   }
   static async signup(data) {
      const result = await HttpUtils.request('signup', false, "POST", data)

      if (result.error || !result.response || (result.response && (!result.response.accessToken || !result.response.refreshToken || !result.response.id || !result.response.name))) {
         return result.response;
      }
      return result.response;
   }
   static async logout(data) {
      await HttpUtils.request('logout', false, "POST", data);
   }
}