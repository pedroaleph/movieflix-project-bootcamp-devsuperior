import AsyncStorage from "@react-native-async-storage/async-storage"
import jwtDecode from "jwt-decode";
import { defaultMessage, errorMessage } from "../custom";

export type LoginData = {
  username: string;
  password: string;
}

type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
}

export const setAsyncStorageKeys = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } 
  catch (err) {
    errorMessage('Erro ao salvar dados!');
  }
}

export const getAccessTokenDecoded = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('@accessToken') as string;
    const tokenDecoded = await jwtDecode(accessToken);
    return tokenDecoded as AccessToken;
  }
  catch (err) {
    errorMessage('Nenhum usuário encontrado!');
  }
}

export const getUsername = async () => {
  try {
    const username = await AsyncStorage.getItem('@username');
    return username;
  }
  catch (err) {
    errorMessage('Nenhum usuário encontrado!');
  }
}

export const logout = () => {
  try {
    AsyncStorage.removeItem('@accessToken');
  }
  catch (err) {
    errorMessage('Erro ao sair!');
  }
}

export const isAuthenticated = async () => {
  const token = await getAccessTokenDecoded();
  return token && isTokenValid(token.exp);
}

const isTokenValid = (exp: number) => {
  const isValid = Date.now() <= exp * 1000;

  if(!isValid) {
    defaultMessage('Sessão expirada, logue novamente');
  }

  return isValid;
}

export const getAuthorities = async () => {
  const tokenDecoded = await getAccessTokenDecoded();
  
  return tokenDecoded?.authorities;
}




