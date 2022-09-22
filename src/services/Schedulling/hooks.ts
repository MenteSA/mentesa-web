import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { IScheduleDto } from './dtos/auth.dto';
import { fetchAllSchedules } from './service';

export function useScheduleList(): UseQueryResult<IScheduleDto[]> {
  const queryKey = ['userRegister'];

  return useQuery(queryKey, () => fetchAllSchedules(), {
    keepPreviousData: true,
  });
}
