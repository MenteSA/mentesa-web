export interface PatientProfileDto {
  nome: string;
  cpf: string;
  gender: string;
  birthDate: string;
  email: string;
  cellphone: string;
}

export interface IResponsePatientDto {
  data: IPatientDto[];
  message: string;
}

export interface IPatientDto {
  id?: number;
  name: string;
  cpf: string;
  gender: string;
  birthDate: string;
  email: string;
  cellphone: string;
  active: boolean;
  professionalId: number;
  createdAt: string;
  updatedAt: string;
}
