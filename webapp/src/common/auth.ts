import Cookies from 'js-cookie';

export const cookiesAuthName = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  EXPIRES_IN: 'accessTokenExpiresIn',
  EXPIRES_AT: 'accessTokenExpiresAt',
};

export interface AuthTokensToCookies {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: string;
  accessTokenExpiresAt: string;
}

export const setTokenToCookies = (params: AuthTokensToCookies) => {
  const {
    accessToken,
    refreshToken,
    accessTokenExpiresIn,
    accessTokenExpiresAt,
  } = params;
  Cookies.set(cookiesAuthName.ACCESS_TOKEN, accessToken);
  Cookies.set(cookiesAuthName.REFRESH_TOKEN, refreshToken);
  Cookies.set(cookiesAuthName.EXPIRES_IN, accessTokenExpiresIn);
  Cookies.set(cookiesAuthName.EXPIRES_AT, accessTokenExpiresAt);
};

export const resetTokenOnCookies = () => {
  Object.values(cookiesAuthName).map(n => Cookies.remove(n));
};