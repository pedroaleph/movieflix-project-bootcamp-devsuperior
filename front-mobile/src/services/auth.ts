import AsyncStorage from "@react-native-async-storage/async-storage"
import { dataErrorMessage } from "../custom";

export type LoginData = {
  username: string;
  password: string;
}

export const setAsyncStorageKeys = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } 
  catch (err) {
    dataErrorMessage();
  }
}