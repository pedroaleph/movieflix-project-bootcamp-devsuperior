import jwtDecode from "jwt-decode";
import history from "./history";
import { toast } from "react-toastify";

type LoginResponse = {
  access_token: string;
  token_type: string;
  //refresh_token: string;
  expires_in: number;
  scope: string;
  userName: string;
  userId: number;
}

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
}

export const saveSessionData = (loginResponse: LoginResponse) => {
  localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
  const sessionData = localStorage.getItem('authData') ?? '{}';
  const parsedSessionData = JSON.parse(sessionData);

  return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () => {
  const sessionData = getSessionData();
  try {
    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AccessToken;
  } catch (error) {
    return {} as AccessToken;
  }
}
export const isTokenValid = () => {
  const { exp } = getAccessTokenDecoded();
  const expirationTime = Date.now() <= exp * 1000;
  if (!expirationTime) {
    toast("Sua sessão foi expirada, logue novamente", {
      className: 'dark-toast',
      progressClassName: 'yellow-progress'
    });
  }
  return expirationTime;
}

export const isAuthenticated = () => {
  const sessionData  = getSessionData();
  return sessionData.access_token && isTokenValid();
}

export const logout = () => {
  localStorage.removeItem('authData');
  history.replace('/auth/login');
}