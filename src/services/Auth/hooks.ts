import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IAuthResponseDto } from "./dtos/auth.dto";
import { fetchUserLogin, fetchUserLogout } from "./service";

export function useUserLogin(
  email: string,
  password: string
): UseQueryResult<IAuthResponseDto> {
  const queryKey = ["userLogin"];

  return useQuery(queryKey, () => fetchUserLogin({ email, password }), {
    keepPreviousData: true,
  });
}

export function useUserLogout(email: string): UseQueryResult<IAuthResponseDto> {
  const queryKey = ["userLogout"];

  return useQuery(queryKey, () => fetchUserLogout(email), {
    keepPreviousData: true,
  });
}
