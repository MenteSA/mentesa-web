import api from "../api";
import { IUserRegisterDto, IUserRegisterResponseDto } from "./dtos/user.dto";

export async function fetchRegisterUser(
  name: string,
  password: string,
  email: string
): Promise<IUserRegisterResponseDto> {
  const payload = {
    name,
    password,
    email,
  };
  console.log(payload);

  const url = "/auth/register";
  const { data } = await api.post(url, payload);
  return data;
}
