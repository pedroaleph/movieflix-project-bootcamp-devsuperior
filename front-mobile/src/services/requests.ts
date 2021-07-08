import axios from "axios";
import { LoginData, setAsyncStorageKeys } from "./auth";
import queryString from 'query-string';

export const api  = axios.create({
  baseURL: 'https://movieflix-pedroaleph.herokuapp.com',
})

export const login = async (loginData: LoginData) => {
  const data = queryString.stringify({ ...loginData, grant_type: 'password'});

  const headers = {
    Authorization: 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==',
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  const res = await api.post('/oauth/token', data, { headers });

  const { access_token } = res.data;
  setAsyncStorageKeys('@access_token', access_token);

  return res;
}