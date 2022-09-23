import api from "../api";
import { PatientProfileDto, IResponsePatientListDto } from './dtos/Patient.dto';

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
}

export async function fetchPatientCreate({ name, cpf, gender, email, cellphone, birthDate, active }: PatientCreateDto): Promise<PatientProfileDto> {
    const url = `patients`; 
    const payload = { name, cpf, gender, email, cellphone, birthDate, active };
    console.log(payload);
    const { data } = await api.post(url, payload);
    return data ;
}
export async function fetchPatientDelete(patientId: number): PatientProfileDto {
    const url = `patients/${patientId}`;
    const { data } = await api.delete(url);
    return data;   
}

export async function fetchPatientById(patientId: number): Promise<PatientProfileDto> {
    const url = `patients/${patientId}`;
    const { data } = await api.get(url);
    return data;   
}

