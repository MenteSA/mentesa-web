export interface ILoginPropsDto {
  email: string;
  password?: string;
}

export interface IAccessTokenDto {
  token: string;
  refresh_token: string;
}

export interface ILoginDto {
  id: number;
  email: string;
  role: string;
  name: string;
  refId: number;
}

export interface IAuthResponseDto {
  accessToken: IAccessTokenDto;
  login: ILoginDto;
  message: string;
}

export interface IRefreshTokenDto {
  token: string;
  message: string;
}
