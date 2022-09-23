import api from "../api";
import { IResponseResourceListDto, IResourceBodyDto } from "./dtos/Resource.dto";

export async function fetchResourceList(): Promise<IResponseResourceListDto> {
  const url = "/resources";
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

export async function fetchAddResource(
  body: IResourceBodyDto
): Promise<IResponseResourceListDto> {
  const url = "/resources";
  console.log('body', body);
  const payload = { ...body };
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
export async function fetchPatchResource(
  id: number,
  body: IResourceBodyDto
): Promise<IResponseResourceListDto> {
  const url = `/resources/${id}`;
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

export async function fetchDeleteResource(
  id: number
): Promise<IResponseResourceListDto> {
  const url = `/resources/${id}`;
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
