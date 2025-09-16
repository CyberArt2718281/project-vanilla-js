import {AuthKeys} from "./auth-utils.type";

export type GetInfoLocalStorageType = string | null;

export type GetInfoAllLocalStorageType = {
    accessToken: string | null;
    refreshToken: string | null;
    userInfo: string | null;
};
