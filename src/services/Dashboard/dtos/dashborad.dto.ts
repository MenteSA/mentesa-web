export interface IDashboardDto {
  schedulePerDay: number;
  schedulePerMonth: number;
  scheduleCanceledPerMonth: number;
  totalPatientsNumber: number;
  totalIndividualSchedule: number;
  totalCoupleSchedule: number;
  totalGroupSchedule: number;
}

export interface IDashboardResponseDto {
  data: { dashboard?: IDashboardDto };
  message?: string;
}
