import api from "../api";
import {
  IAuthResponseDto,
  ILoginPropsDto,
  IRefreshTokenDto,
} from "./dtos/auth.dto";

export const TOKEN_KEY = "@menteSa-Token";
export const REFRESH_TOKEN = "@menteSa-RefreshTokem";
export const USER_EMAIL = "@menteSa-UserEmail";

export async function fetchUserLogin({
  email,
  password,
}: ILoginPropsDto): Promise<IAuthResponseDto> {
  const url = "auth/login";
  const payload = { email, password };

  return await api
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
}
export async function fetchUserLogout({ email }: ILoginPropsDto) {
  const url = "auth/logout";
  const payload = { email };

  const { status } = await api.post(url, payload);
  return status;
}

export async function fetchRefreshToken(
  refreshToken: string
): Promise<IRefreshTokenDto> {
  const url = "auth/refresh-token";

  const payload = { refreshToken };

  return await api
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
}
