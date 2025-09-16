export interface UserInfo {
  id: string | number;
  name: string;
}

export interface SetUserInfoResult {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: UserInfo;
}
