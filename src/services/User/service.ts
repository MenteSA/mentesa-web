import api from "../api";
import { IUserRegisterDto, IUserRegisterResponseDto } from "./dtos/user.dto";

export async function fetchRegisterUser({
  name,
  password,
  email,
}: IUserRegisterDto): Promise<IUserRegisterResponseDto> {
  const payload = {
    name,
    password,
    email,
  };

  const url = "/auth/register";

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
