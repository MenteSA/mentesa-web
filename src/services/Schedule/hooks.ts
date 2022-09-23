import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IResponseScheduleDto } from "./dtos/schedule.dto";
import { fetchAllSchedules } from "./service";

export function useScheduleList(): UseQueryResult<IResponseScheduleDto> {
  const queryKey = ["scheduleList"];

  return useQuery(queryKey, () => fetchAllSchedules(), {
    keepPreviousData: true,
  });
}
