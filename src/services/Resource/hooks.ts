import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { IResponseResourceListDto } from "./dtos/Resource.dto";
import { fetchResourceList } from "./service";

export function useResourceList(): UseQueryResult<IResponseResourceListDto> {
  const queryKey = ["resourceList"];
  return useQuery(queryKey, () => fetchResourceList(), {
    keepPreviousData: true,
  });
}
