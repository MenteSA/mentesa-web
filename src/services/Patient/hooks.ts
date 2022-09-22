<<<<<<< Updated upstream
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
=======
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PatientProfileDto } from "./dtos/Patient.dto";
import { fetchPatientProfile } from "./service";

import { PatientDto } from "./dtos/Patient.dto";
import { fetchPatientList, fetchPatientById } from "./service";
import {
  ProfessionalId,
  ProfessionalIdAndPatient,
} from '../Professional/dtos/Professional.dto';

export function useFetchPatientProfile(): UseQueryResult<PatientProfileDto> {
  const queryKey = ["patientProfile"];

  return useQuery(queryKey, () => fetchPatientProfile(), {
    keepPreviousData: true,
  });
}

export function usePatientList(
  id: ProfessionalId
): UseQueryResult<PatientDto[]> {
  const queryKey = ["patientList"];
  return useQuery(queryKey, () => fetchPatientList(id), {
    keepPreviousData: true,
  });
}

export function usePatientById({
  patientId,
  professionalId,
}: ProfessionalIdAndPatient): UseQueryResult<PatientDto> {
  const queryKey = ["patientById"];
  return useQuery(
    queryKey,
    () => fetchPatientById({ professionalId, patientId }),
    {
      keepPreviousData: true,
    }
  );
}
>>>>>>> Stashed changes
