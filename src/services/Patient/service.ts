import api from '../api';
import { IResponsePatientDto, PatientProfileDto } from './dtos/Patient.dto';

export async function fetchPatientProfile(): Promise<PatientProfileDto> {
  const url = 'patients/profile';
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

export async function fetchAllPatient(): Promise<IResponsePatientDto> {
  const url = 'patients';
  return await api
    .get(url)
    .then(resp => {
      const patients: IResponsePatientDto = resp.data;
      const newP = patients.data.map(patient => {
        return {
          id: patient.id,
          name: patient.name,
        };
      });
      console.log(newP);
      return resp.data;
    })
    .catch(error => {
      const data = {
        data: undefined,
        message: error.response.data.message,
      };
      return data;
    });
}
