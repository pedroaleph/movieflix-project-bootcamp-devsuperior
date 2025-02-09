import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { getSessionData, logout } from "./auth";

export type LoginData = {
  username: string;
  password: string;
}

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'movieflix';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'movieflix123';

axios.interceptors.response.use(
  function (response) {
    return response;
  }, function (error) {
    if (error.response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);

export const makeRequest = (params: AxiosRequestConfig) => {
  const sessionData = getSessionData();

  const headers = {
    Authorization: `Bearer ${sessionData.access_token}`
  }

  return axios({
    ...params,
    headers,
    baseURL: BASE_URL
  })
}

export const makeLogin = (loginData: LoginData) => {
  const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

  const headers = {
    Authorization: `Basic ${window.btoa(token)}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  const payload = qs.stringify({ ...loginData, grant_type: 'password' });

  return axios({
    url: '/oauth/token',
    data: payload,
    method: 'POST',
    headers,
    baseURL: BASE_URL
  })
}