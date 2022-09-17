import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IUserRegisterDto } from "./dtos/user.dto";
import { fetchRegisterUser } from "./service";

export function useUserRegistration(
  email: string,
  password: string,
  name: string
): UseQueryResult<IUserRegisterDto> {
  const queryKey = ["userRegister"];

  return useQuery(queryKey, () => fetchRegisterUser(email, password, name), {
    keepPreviousData: true,
  });
}
