export interface IScheduleDto {
  id?: number;
  sessionDate: string;
  status: 'PENDING' | 'REALIZED' | 'CANCELED';
  type: 'ONLINE' | 'PRESENTIAL';
  scheduleType: 'INDIVIDUAL' | 'COUPLE' | 'IN_GROUP';
  schedulePatients: ISchedulePatientsDto[];
}

export interface IResponseScheduleDto {
  data: IScheduleDto[];
  message: string;
}

export interface ISchedulePatientsDto {
  id?: number;
  scheduleId: number;
  patientId: number;
  patient: IPatientDto;
}

export interface IPatientDto {
  id?: number;
  nome: string;
  cpf: string;
  gender: string;
  birthDate: string;
  email: string;
  cellphone: string;
}
