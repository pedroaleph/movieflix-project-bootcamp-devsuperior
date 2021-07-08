import axios from "axios";
import { LoginData, logout, setAsyncStorageKeys } from "./auth";
import queryString from 'query-string';

export const api  = axios.create({
  baseURL: 'https://movieflix-pedroaleph.herokuapp.com',
})

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

export const login = async (loginData: LoginData) => {
  const data = queryString.stringify({ ...loginData, grant_type: 'password'});

  const headers = {
    Authorization: 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==',
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  const res = await api.post('/oauth/token', data, { headers });

  const { access_token, userName } = res.data;
  setAsyncStorageKeys('@accessToken', access_token);
  setAsyncStorageKeys('@username', userName);

  return res;
}