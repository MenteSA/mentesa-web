import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IPatientProfileDto, IResponsePatientListDto, IPatientDto } from "./dtos/Patient.dto";
import { fetchPatientProfile, fetchPatientList, fetchPatientById } from "./service";

export function useFetchPatientProfile(): UseQueryResult<IPatientProfileDto> {
  const queryKey = ["patientProfile"];

  return useQuery(queryKey, () => fetchPatientProfile(), {
    keepPreviousData: true,
  });
}

export function useFetchPatientList(): UseQueryResult<IResponsePatientListDto> {
  const queryKey = ["patientList"];

  return useQuery(queryKey, () => fetchPatientList(), {
    keepPreviousData: true,
  });
}

export function useFetchPatientById(patientId: number): UseQueryResult<IPatientDto> {
  const queryKey = ["patientById"];

  return useQuery(queryKey, () => fetchPatientById(patientId), {
    keepPreviousData: true,
  });
}


// import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import { PatientDto } from "./dtos/Patient.dto";
// import { fetchPatientList, fetchPatientById } from "./service";
// import {
//   IProfessionalId,
//   IProfessionalIdAndPatient,
// } from "../Profissional/dtos/IProfessional";

// export function usePatientList(
//   id: IProfessionalId
// ): UseQueryResult<PatientDto[]> {
//   const queryKey = ["patientList"];
//   return useQuery(queryKey, () => fetchPatientList(id), {
//     keepPreviousData: true,
//   });
// }

// export function usePatientById({
//   patientId,
//   professionalId,
// }: IProfessionalIdAndPatient): UseQueryResult<PatientDto> {
//   const queryKey = ["patientById"];
//   return useQuery(
//     queryKey,
//     () => fetchPatientById({ professionalId, patientId }),
//     {
//       keepPreviousData: true,
//     }
//   );
// }
