import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IAuthResponseDto } from "./dtos/auth.dto";
import { fetchUserLogin } from "./service";

export function useUserLogin(
  email: string,
  password: string
): UseQueryResult<IAuthResponseDto> {
  const queryKey = ["userLogin"];

  return useQuery(queryKey, () => fetchUserLogin({ email, password }), {
    keepPreviousData: true,
  });
}
