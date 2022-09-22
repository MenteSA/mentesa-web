export interface IScheduleDto {
  id?: number;
  sessionDate: string;
  status: 'PENDING' | 'REALIZED' | 'CANCELED';
  type: 'ONLINE' | 'PRESENTIAL';
  scheduleType: 'INDIVIDUAL' | 'COUPLE' | 'IN_GROUP';
}