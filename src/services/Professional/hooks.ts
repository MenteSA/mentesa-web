import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ProfessionalProfileDto } from "./dtos/Professional.dto";
import { fetchProfessionalProfile } from "./service";

export function useFetchProfessionalProfile(): UseQueryResult<ProfessionalProfileDto> {
  const queryKey = ["professionalProfile"];

  return useQuery(queryKey, () => fetchProfessionalProfile(), {
    keepPreviousData: true,
  });
}
