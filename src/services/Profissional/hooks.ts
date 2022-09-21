import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProfessionalProfileDto } from "./dtos/Professional.dto";
import { fetchProfessionalProfile } from "./service";

export function useFetchProfessionalProfile(id: number): UseQueryResult<IAuthResponseDto> {
  const queryKey = ["professionalProfile"];

  return useQuery(queryKey, () => fetchProfessionalProfile(id), {
    keepPreviousData: true,
  });
}

/*export function useUserLogout(email: string): UseQueryResult<IAuthResponseDto> {
  const queryKey = ["userLogout"];

  return useQuery(queryKey, () => fetchUserLogout(email), {
    keepPreviousData: true,
  });
}
*/
