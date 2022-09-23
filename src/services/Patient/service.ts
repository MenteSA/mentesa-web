import api from "../api";
import { PatientProfileDto, IResponsePatientListDto } from './dtos/Patient.dto';

export async function fetchPatientProfile(): Promise<PatientProfileDto> {
  const url = "patients/profile";
  const { data } = await api.get(url);
  return data;
}

export async function fetchPatientProfileUpdate({
  nome,
  cpf,
  gender,
  email,
  cellphone,
  birthDate,
}: PatientProfileDto): Promise<PatientProfileDto> {
  const url = `patients/profile`;
  const payload = { nome, cpf, gender, email, cellphone, birthDate };
  const { data } = await api.put(url, payload);
  return data;
}

export async function fetchPatientList(): Promise<IResponsePatientListDto> {
  const url = `patients`;
  return await api
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const data = {
        session: undefined,
        message: error.response.data.message,
      };
      return data;
    });
  //const { data } = await api.get(url);
  //return data;
}

export async function fetchPatientCreate({ name, cpf, gender, email, cellphone, birthDate, active }: PatientCreateDto): Promise<PatientProfileDto> {
    const url = `patients`; 
    const payload = { name, cpf, gender, email, cellphone, birthDate, active };
    const { data } = await api.post(url, payload);
    return data ;
}
export async function fetchPatientDelete(patientId: number): PatientProfileDto {
    const url = `patients/${patientId}`;
    const { data } = await api.delete(url);
    return data;   
}

export async function fetchPatientById(patientId: number): PatientProfileDto {
    const url = `patients/${patientId}`;
    const { data } = await api.get(url);
    return data;   
}

// import api from "../api";
// import {
//   IProfessionalId,
//   IProfessionalIdAndPatient,
// } from "../Profissional/dtos/IProfessional";
// import { PatientDto } from "./dtos/Patient.dto";

// export const TOKEN_KEY = "@menteSa-Token";

// export async function fetchPatientList(
//   dto: IProfessionalId
// ): Promise<PatientDto[]> {
//   const { id } = dto;
//   const url = `${id}/patients`;
//   const { data } = await api.get(url);

//   return data;
// }

// export async function fetchPatientById({
//   professionalId,
//   patientId,
// }: IProfessionalIdAndPatient): Promise<PatientDto> {
//   const url = `${professionalId}/patients/${patientId}`;
//   const { data } = await api.get(url);
//   return data;
// }

// export async function fetchDeletePatient({
//   professionalId,
//   patientId,
// }: IProfessionalIdAndPatient): Promise<any> {
//   const url = `${professionalId}/patients/${patientId}`;
//   const { data } = await api.delete(url);
//   return data;
// }

// export async function fetchAddPatient({
//   id,
//   name,
//   email,
//   gender,
//   createdAt,
//   cpf,
//   birthday,
//   professional,
// }: PatientDto): Promise<PatientDto> {
//   const params = {
//     id,
//     name,
//     email,
//     gender,
//     createdAt,
//     cpf,
//     birthday,
//     professional,
//   };

//   const url = `${professional}/patients`;
//   const { data } = await api.post(url, params);
//   return data;
// }

// export async function fetchEditPatient({
//   id,
//   name,
//   email,
//   gender,
//   createdAt,
//   cpf,
//   birthday,
//   professional,
// }: PatientDto): Promise<PatientDto> {
//   const params = {
//     id,
//     name,
//     email,
//     gender,
//     createdAt,
//     cpf,
//     birthday,
//     professional,
//   };

//   const url = `${professional}/patients`;
//   const { data } = await api.put(url, params);
//   return data;
// }
