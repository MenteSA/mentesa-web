import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { IResponsePatientDto, PatientProfileDto } from './dtos/Patient.dto';
import { fetchAllPatient, fetchPatientProfile } from './service';

export function useFetchPatientProfile(): UseQueryResult<PatientProfileDto> {
  const queryKey = ['patientProfile'];

  return useQuery(queryKey, () => fetchPatientProfile(), {
    keepPreviousData: true,
  });
}

export function useFetchPatients(): UseQueryResult<IResponsePatientDto> {
  const queryKey = ['patients'];

  return useQuery(queryKey, () => fetchAllPatient(), {
    keepPreviousData: true,
  });
}
