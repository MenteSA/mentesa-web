import api from "../api";
import {
  IAuthResponseDto,
  ILoginPropsDto,
  IRefreshTokenDto,
} from "./dtos/auth.dto";

export const TOKEN_KEY = "@menteSa-Token";
export const REFRESH_TOKEN = "@menteSa-RefreshTokem";
export async function fetchUserLogin({
  email,
  password,
}: ILoginPropsDto): Promise<IAuthResponseDto> {
  const url = "auth/login";
  const payload = { email, password };

  const result = await api
    .post(url, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const data = {
        user: undefined,
        message: error.response.data.message,
      };
      return data;
    });

  if (result.login !== undefined) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(result.accessToken.token));
    localStorage.setItem(
      REFRESH_TOKEN,
      JSON.stringify(result.accessToken.refresh_token)
    );
  }

  return result;
}
export async function fetchUserLogout(userEmail: string) {
  const url = "auth/logout";
  const payload = { email: userEmail };

  const { status } = await api.post(url, payload);
  if (status === 200) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN);
  }

  return status;
}

export async function fetchRefreshToken(
  refreshToken: string
): Promise<IRefreshTokenDto> {
  const url = "auth/refresh-token";

  const payload = { refreshToken };

  const result = await api
    .post(url, payload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const data = {
        user: undefined,
        message: error.response.data.message,
      };
      return data;
    });

  if (result.token !== undefined) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(result.token));
  } else {
    removeTokens();
  }

  return result;
}

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);
export const removeRefresh = () => localStorage.removeItem(TOKEN_KEY);
export const removeTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN);
};
