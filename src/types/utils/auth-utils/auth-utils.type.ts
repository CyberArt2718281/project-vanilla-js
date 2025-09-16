export type AuthKeys = 'accessToken' | 'refreshToken' | 'userInfo';

export const AuthKeysValues = {
    accessToken: 'accessToken' as const,
    refreshToken: 'refreshToken' as const,
    userInfo: 'userInfo' as const,
} as const;

