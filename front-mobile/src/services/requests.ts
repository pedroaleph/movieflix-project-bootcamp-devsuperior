import axios, { AxiosRequestConfig } from "axios";
import { LoginData, logout, setAsyncStorageKeys, getAccessToken } from "./auth";
import queryString from 'query-string';
import { BACKEND_URL } from "@env";

const BASE_URL= BACKEND_URL ?? 'http://localhost:8080';

//localhost creio que só funcione por emulador
//const BASE_URL = 'https://movieflix-pedroaleph.herokuapp.com';

export const api  = axios.create({
  baseURL: BASE_URL,
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
const getBearerToken = async () => {
  const authToken = await getAccessToken();
  const headers = {
    Authorization: `Bearer ${authToken}`
  }

  return headers;
}

export const getMovies = async (params: AxiosRequestConfig) => {
  const headers = await getBearerToken();
  const res = await api.get('/movies', { ...params, headers } );

  return res;
}

export const getGenders = async () => {
  const headers = await getBearerToken();
  const res = await api.get('/genres', { headers });

  return res;
}

export const getMovieById = async (id : number) => {
  const headers = await getBearerToken();
  const res = await api.get(`/movies/${id}`, { headers });

  return res;
}

export const postReview = async (params: AxiosRequestConfig) => {
  const headers = await getBearerToken();
  const data = params.data;
  const res = await api.post('/reviews', data, { headers } );
  return res;
}