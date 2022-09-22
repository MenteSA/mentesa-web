<<<<<<< Updated upstream
// import api from "../api";
// import {
//   IProfessionalId,
//   IProfessionalIdAndPatient,
// } from "../Profissional/dtos/IProfessional";
// import { PatientDto } from "./dtos/Patient.dto";
=======
import api from "../api";
import PatientProfileDto from './dtos/Patient';

import {
  ProfessionalId,
  ProfessionalIdAndPatient,
} from '../Professional/dtos/Professional.dto';
import { PatientDto } from "./dtos/Patient.dto";

export async function fetchPatientProfile(): PatientProfileDto {
    const url = 'patients/profile';
    const { data } = await api.get(url);
    return data;   
}


export async function fetchPatientProfileUpdate({ name, cpf, gender, email, cellphone, birthDate }: PatientProfileDto): Promise<PatientProfileDto> {
    const url = `patients/profile`; 
    const payload = { name, cpf, gender, email, cellphone, birthDate };
    const { data } = await api.put(url, payload);
    return data ;
}

>>>>>>> Stashed changes


export const TOKEN_KEY = "@menteSa-Token";

export async function fetchPatientList(
  dto: ProfessionalId
): Promise<PatientDto[]> {
  const { id } = dto;
  const url = `${id}/patients`;
  const { data } = await api.get(url);

  return data;
}

export async function fetchPatientById({
  professionalId,
  patientId,
}: ProfessionalIdAndPatient): Promise<PatientDto> {
  const url = `${professionalId}/patients/${patientId}`;
  const { data } = await api.get(url);
  return data;
}

export async function fetchDeletePatient({
  professionalId,
  patientId,
}: ProfessionalIdAndPatient): Promise<any> {
  const url = `${professionalId}/patients/${patientId}`;
  const { data } = await api.delete(url);
  return data;
}

export async function fetchAddPatient({
  id,
  name,
  email,
  gender,
  cpf,
  cellphone,
  birthday,
  professional,
}: PatientDto): Promise<PatientDto> {
  const params = {
    id,
    name,
    email,
    gender,
    cpf,
    cellphone,
    birthday,
    professional,
  };

  const url = `${professional}/patients`;
  const { data } = await api.post(url, params);
  return data;
}

export async function fetchEditPatient({
  id,
  name,
  email,
  gender,
  cpf,
  cellphone,
  birthday,
  professional,
}: PatientDto): Promise<PatientDto> {
  const params = {
    id,
    name,
    email,
    gender,
    cpf,
    cellphone,
    birthday,
    professional,
  };

  const url = `${professional}/patients`;
  const { data } = await api.put(url, params);
  return data;
}
