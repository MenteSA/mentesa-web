import api from "../api";
import { IResponseScheduleDto } from "./dtos/schedule.dto";

export async function fetchAllSchedules(): Promise<IResponseScheduleDto> {
  // const { data: resp } = await api.get("/schedules");
  // return resp.data;

  const url = "/schedules";
  return await api
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      const data = {
        schedule: undefined,
        message: error.response.data.message,
      };
      return data;
    });
}
