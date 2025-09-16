import config from "../config/config";
import { AuthKeysValues } from "../types/utils/auth-utils/auth-utils.type";
import type { AuthKeys } from "../types/utils/auth-utils/auth-utils.type";
import type { GetInfoAllLocalStorageType, GetInfoLocalStorageType } from "../types/utils/auth-utils/getInfoLocalStorage.type";
import type { UserInfo, SetUserInfoResult } from "../types/utils/auth-utils/user-info.type";

export class AuthUtils {
  static accessTokenKey: AuthKeys = AuthKeysValues.accessToken;
  static refreshTokenKey: AuthKeys = AuthKeysValues.refreshToken;
  static userInfoKey: AuthKeys = AuthKeysValues.userInfo;

  static setAuthInfo(
      accessToken: string,
      refreshToken: string,
      userInfo: UserInfo | null = null
  ): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
    if (userInfo) {
      localStorage.setItem(this.userInfoKey, JSON.stringify(userInfo));
    }
  }

  static removeAuthInfo(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userInfoKey);
  }

  static getAuthInfo(): GetInfoAllLocalStorageType;
  static getAuthInfo(key: AuthKeys): GetInfoLocalStorageType;
  static getAuthInfo(key?: AuthKeys): GetInfoAllLocalStorageType | GetInfoLocalStorageType {
    if (key && [this.accessTokenKey, this.refreshTokenKey, this.userInfoKey].includes(key)) {
      return localStorage.getItem(key);
    } else {
      return {
        accessToken: localStorage.getItem(this.accessTokenKey),
        refreshToken: localStorage.getItem(this.refreshTokenKey),
        userInfo: localStorage.getItem(this.userInfoKey),
      };
    }
  }

  public static async updateRefreshToken(): Promise<boolean> {
    let result = false;
    const refreshToken = this.getAuthInfo(this.refreshTokenKey) as string | null;
    if (refreshToken) {
      const response = await fetch(config.api + 'refresh', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: refreshToken }),
      });
      if (response && response.status === 200) {
        const tokens = await response.json();
        if (tokens && !tokens.error) {
          this.setAuthInfo(tokens.tokens.accessToken, tokens.tokens.refreshToken);
          result = true;
        }
      }
    }
    if (!result) {
      this.removeAuthInfo();
    }
    return result;
  }

  public static setUserInfo(result: SetUserInfoResult): void {
    this.setAuthInfo(result.tokens.accessToken, result.tokens.refreshToken, {
      id: result.user.id,
      name: result.user.name,
    });
  }

  public static async checkAuthentication(): Promise<boolean> {
    const authInfo = this.getAuthInfo() as GetInfoAllLocalStorageType;

    if (!authInfo || !authInfo[this.refreshTokenKey]) {
      return false;
    }

    if (!authInfo[this.accessTokenKey] && authInfo[this.refreshTokenKey]) {
      return await this.updateRefreshToken();
    }

    if (authInfo[this.accessTokenKey] && authInfo[this.refreshTokenKey]) {
      return true;
    }

    return false;
  }

  public static async initializeAuthentication(openNewRouteCallback: (route: string) => void): Promise<boolean> {
    const isAuthenticated = await this.checkAuthentication();

    if (!isAuthenticated) {
      openNewRouteCallback('/login');
      return false;
    }

    return true;
  }
}
