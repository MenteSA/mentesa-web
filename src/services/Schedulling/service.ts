import api from '../api';
import { IScheduleDto } from './dtos/auth.dto';

export async function fetchAllSchedules(): Promise<IScheduleDto[]> {
  const { data: resp } = await api.get('/schedules');
  return resp.data;
}
