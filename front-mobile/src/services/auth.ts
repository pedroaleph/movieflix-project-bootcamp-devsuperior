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

export const getAccessToken = async () =>{
  const accessToken = await AsyncStorage.getItem('@accessToken');
  return accessToken;
}

export const getAccessTokenDecoded = async () => {
  try {
    const accessToken = await getAccessToken() as string;
    const tokenDecoded = jwtDecode(accessToken);
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
    AsyncStorage.removeItem('@username');
  }
  catch (err) {
    errorMessage('Erro ao sair!');
  }
}

export const isAuthenticated = async () => {
  const tokenDecoded = await getAccessTokenDecoded();

  return tokenDecoded && isTokenValid(tokenDecoded.exp);
}

const isTokenValid = (exp: number) => {
  const isValid = Date.now() <= exp * 1000;

  try {
    if(isValid)
      return isValid;
    else throw Error();
  }
  catch (err) {
    defaultMessage('Sessão expirada, logue novamente');
  }
}

export const getAuthorities = async () => {
  const tokenDecoded = await getAccessTokenDecoded();
  
  return tokenDecoded?.authorities;
}





