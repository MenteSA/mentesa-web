import api from "../api";
import { IResponseSessionListDto, ISessionBodyDto } from "./dtos/Session.dto";

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

export async function fetchAddSession(
  body: ISessionBodyDto
): Promise<IResponseSessionListDto> {
  const url = "/sessions";
  const payload = { body };
  return await api
    .post(url, payload)
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
export async function fetchPatchSession(
  id: number,
  body: ISessionBodyDto
): Promise<IResponseSessionListDto> {
  const url = `/sessions/${id}`;
  const payload = { body };
  return await api
    .patch(url, payload)
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

export async function fetchDeleteSession(
  id: number
): Promise<IResponseSessionListDto> {
  const url = `/sessions/${id}`;
  return await api
    .delete(url)
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
