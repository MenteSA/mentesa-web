import api from '../api';
import { IResponseScheduleDto } from './dtos/schedule.dto';

export async function fetchAllSchedules(): Promise<IResponseScheduleDto> {
  const { data: resp } = await api.get('/schedules');
  return resp.data;
}
