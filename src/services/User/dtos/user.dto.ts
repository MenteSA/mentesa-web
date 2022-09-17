export interface IUserRegisterDto {
  name: string;
  email: string;
  password: string;
}

export interface IUserDto {
  id?: number;
  email?: string;
  password?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserRegisterResponseDto {
  data: { user?: IUserDto };
  message?: string;
}
