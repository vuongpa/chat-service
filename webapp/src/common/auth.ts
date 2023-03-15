import Cookies from 'js-cookie';

export const cookiesAuthName = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  EXPIRES_IN: 'accessTokenExpiredIn',
};

export interface AuthTokensToCookies {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiredIn: string;
}

export const setTokenToCookies = (params: AuthTokensToCookies) => {
  const {
    accessToken,
    refreshToken,
    accessTokenExpiredIn,
  } = params;
  Cookies.set(cookiesAuthName.ACCESS_TOKEN, accessToken);
  Cookies.set(cookiesAuthName.REFRESH_TOKEN, refreshToken);
  Cookies.set(cookiesAuthName.EXPIRES_IN, accessTokenExpiredIn);
};

export const resetTokenOnCookies = () => {
  Object.values(cookiesAuthName).forEach(n => Cookies.remove(n));
};
