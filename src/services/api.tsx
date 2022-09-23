import axios from "axios";
import { useAuth } from "../context/auth.context";
import {
  fetchRefreshToken,
  getRefreshToken,
  getToken,
  removeToken,
} from "./Auth/service";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers!.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async function (error) {
    const refresh_token = getRefreshToken();

    if (error.response.status === 401 && refresh_token) {
      const response = await fetchRefreshToken(JSON.parse(refresh_token));

      const { verifyAuthentication } = useAuth();
      verifyAuthentication();
      return response;
    }

    return Promise.reject(error);
  }
);

export default api;
