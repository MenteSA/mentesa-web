export interface ISessionDto {
  id: number;
  subject: string;
  duration: number;
  professionalId: number;
  scheduleId: number;
  resourceId: number;
  createdAt: string;
  updateddAt: string;
}

export interface IResponseSessionListDto {
  data: {
    session?: ISessionDto[];
  };
  message: string;
}
