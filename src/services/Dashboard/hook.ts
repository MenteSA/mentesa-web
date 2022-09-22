import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IDashboardResponseDto } from "./dtos/dashborad.dto";
import { fetchDashboardInfo } from "./service";

export function useDashboardInfo(): UseQueryResult<IDashboardResponseDto> {
  const queryKey = ["dashboardInfo"];
  return useQuery(queryKey, () => fetchDashboardInfo(), {
    keepPreviousData: true,
  });
}
