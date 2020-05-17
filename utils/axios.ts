import axios, { AxiosRequestConfig } from "axios";
import { AuthToken } from "./authToken";
import Cookie from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

const requestHandler = (request: AxiosRequestConfig) => {
  const jwt = new AuthToken(Cookie.get("token"));
  request.headers["Authorization"] = `JWT ${jwt}`;
  return request;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

export default axiosInstance;
