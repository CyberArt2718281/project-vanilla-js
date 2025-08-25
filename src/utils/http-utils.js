import config from "../config/config";
import {AuthUtils} from "./auth-utils";


export class HttpUtils {

  static async request(url, useAuth = true, method = "GET", body = null) {
    const result = {
      error: false,
      response: null,
    }


    const params = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }
    let token = null;
    if (useAuth) {
      token = AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)
      if (token) {
        params.headers['authorization'] = token;
      }
    }

    if (body) {
      params.body = JSON.stringify(body)
    }
    try {
      let response = await fetch(config.api + url, params);
      if (response.status < 200 || response.status >= 300) {
        result.error = true;
        if (useAuth && response.status === 401) {

          if (!token) {
            // 1 - токена нет
            result.redirect = '/login';
          }else{
            // 2 - токен устарел/невалидный (надо обновить)
            const updateTokenResult =  await AuthUtils.updateRefreshToken();
            if(updateTokenResult) {
              // запрос повторно
                return this.request(url, useAuth , method, body);
            }else{
              result.redirect = '/login';
            }

          }
        }
      }
      result.response = await response.json();
      return result;
    } catch (e) {
      result.error = true;
      return result;
    }
  }



}