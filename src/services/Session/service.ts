import api from "../api";
import { IResponseSessionListDto } from "./dtos/Session.dto";

export async function fetchSessionList(): Promise<IResponseSessionListDto> {
  const url = "/sessions";
  return await api
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const data = {
        session: undefined,
        message: error.response.data.message,
      };
      return data;
    });
}
