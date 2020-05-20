import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthToken } from "./authToken";
import Cookie from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

const requestHandler = (request: AxiosRequestConfig) => {
  const jwt = new AuthToken(Cookie.get("token"));
  request.headers["Authorization"] = jwt.authorizationString;
  return request;
};

const responseHandler = (response: AxiosResponse) => {
  return response;
};

const responseErrorHandler = (err: Error) => {
  console.error(err);
};

axiosInstance.interceptors.request.use(requestHandler);

axiosInstance.interceptors.response.use(responseHandler, responseErrorHandler);

export default axiosInstance;
