import AsyncStorage from "@react-native-async-storage/async-storage"
import { errorMessage } from "../custom";

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

export const getAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('@accessToken');
    return accessToken;
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

const isTokenValid = (exp: number) => {
  const isValid = Date.now() <= exp * 1000;

  if(!isValid) {
    errorMessage('Sessão expirada, logue novamente');
  }

  return isValid;
}




