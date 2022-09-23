export interface ISessionDto {
  id: number;
  subject: string;
  duration: number;
  professionalId: number;
  scheduleId: number;
  resourceId: number;
  createdAt: string;
  updateddAt: string;
  Schedule: IScheduleInterface;
  Resource: IResource;
}

interface IScheduleInterface {
  id: number;
  sessionDate: string;
  status: "PENDING" | "REALIZED" | "CANCELED";
  type: "ONLINE" | "PRESENTIAL";
  scheduleType: "INDIVIDUAL" | "COUPLE" | "IN_GROUP";
  professionalId: number;
  createdAt: string;
  updatedAt: string;
  PatientsSchedule: IPatient[];
}

interface IPatient {
  id: number;
  name: string;
  cpf: string;
  email: string;
  gender: string;
  cellphone: string;
  birthDate: string;
  professionalId: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IResource {
  id: number;
  professionalId: number;
  title: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseSessionListDto {
  data: {
    session?: ISessionDto[];
  };
  message: string;
}

export interface ISessionBodyDto {
  subject?: string;
  duration?: number;
  scheduleId?: number;
  resourceId?: number;
}
