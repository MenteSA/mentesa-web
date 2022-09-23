import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IResponseSessionListDto } from "./dtos/Session.dto";
import { fetchSessionList } from "./service";

export function useSessionList(): UseQueryResult<IResponseSessionListDto> {
  const queryKey = ["sessionList"];
  return useQuery(queryKey, () => fetchSessionList(), {
    keepPreviousData: true,
  });
}
