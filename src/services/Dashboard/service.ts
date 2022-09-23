import api from "../api";
import { IDashboardResponseDto } from "./dtos/dashborad.dto";

export const TOKEN_KEY = "@menteSa-Token";

export async function fetchDashboardInfo(): Promise<IDashboardResponseDto> {
  const url = "/dashboards";

  return await api
  .get(url)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    const data = {
      user: undefined,
      message: error.response.data.message,
    };
    return data;
  });
}
