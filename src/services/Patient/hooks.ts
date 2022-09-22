import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PatientProfileDto } from "./dtos/Patient.dto";
import { fetchPatientProfile } from "./service";

export function useFetchPatientProfile(): UseQueryResult<PatientProfileDto> {
  const queryKey = ["patientProfile"];

  return useQuery(queryKey, () => fetchPatientProfile(), {
    keepPreviousData: true,
  });
}
