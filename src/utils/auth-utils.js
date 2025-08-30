import config from "../config/config";


export class AuthUtils {
  static accessTokenKey = 'accessToken';
  static refreshTokenKey = 'refreshToken';
  static userInfoKey = 'userInfo';
  static setAuthInfo(accessToken, refreshToken, userInfo=null) {
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
    if (userInfo) {
      localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));
    }
  }

  static removeAuthInfo() {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userInfoKey);
  }

  static getAuthInfo(key = null) {
    if (key && [this.accessTokenKey, this.refreshTokenKey, this.userInfoKey].includes(key)) {
      return localStorage.getItem(key);
    } else {
      return {
        [this.accessTokenKey]: localStorage.getItem(this.accessTokenKey),
        [this.refreshTokenKey]: localStorage.getItem(this.refreshTokenKey),
        [this.userInfoKey]: localStorage.getItem(this.userInfoKey),
      }
    }
  }
  static async updateRefreshToken(){
    let result = false;
    const refreshToken = this.getAuthInfo(this.refreshTokenKey);
    if (refreshToken) {
       const response = await fetch(config.api + 'refresh', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body:JSON.stringify({refreshToken: refreshToken}),
       } )
      if(response && response.status === 200) {
        const tokens = await response.json();
        if(tokens && !tokens.error){
          this.setAuthInfo(tokens.tokens.accessToken, tokens.tokens.refreshToken);
          result = true;
        }

      }
    }
    if(!result) {
      this.removeAuthInfo();
    }
    return result;
  }

  static setUserInfo(result) {
    this.setAuthInfo(result.tokens.accessToken, result.tokens.refreshToken, {
      id: result.user.id, name: result.user.name
    });
  }

  static async checkAuthentication() {
    const authInfo = this.getAuthInfo();

    // Если нет refreshToken - не аутентифицирован
    if (!authInfo[this.refreshTokenKey]) {
      return false;
    }

    // Если есть refreshToken, но нет accessToken - пытаемся обновить
    if (!authInfo[this.accessTokenKey] && authInfo[this.refreshTokenKey]) {
      return await this.updateRefreshToken();
    }

    // Если есть оба токена - считаем аутентифицированным
    if (authInfo[this.accessTokenKey] && authInfo[this.refreshTokenKey]) {
      return true;
    }

    // Любой другой случай - не аутентифицирован
    return false;
  }

  static async initializeAuthentication(openNewRouteCallback) {
    const isAuthenticated = await this.checkAuthentication();

    if (!isAuthenticated) {
      openNewRouteCallback('/login');
      return false;
    }

    return true;
  }

}