export interface IPatientProfileDto {
    nome: string;
    cpf: string;
    gender: string;
    birthDate: string;
    email: string;
    cellphone: string;
}

export interface PatientProfileDto {
  nome: string;
  cpf: string;
  gender: string;
  birthDate: string;
  email: string;
  cellphone: string;
}

export interface IPatientCreateDto extends PatientProfileDto {
    active: boolean;
}

export interface IPatientDto {
    id: number;
    nome: string;
    cpf: string;
    gender: string;
    birthDate: string;
    email: string;
    cellphone: string;
    createdAt: string;
    updateddAt: string;
}

export interface IResponsePatientListDto {
  data: {
    patient: IPatientDto[];
  };
  message: string;
}
