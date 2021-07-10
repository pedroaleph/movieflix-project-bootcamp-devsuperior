import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import ButtonIcon from "../../components/ButtonIcon";
import eyesOpened from "../../assets/eyes-opened.png";
import eyesClosed from "../../assets/eyes-closed.png";
import { getUsername, LoginData } from "../../services/auth";
import { styles } from "./styles";
import { defaultMessage, defaultStyles, errorMessage, loadingMessage } from "../../custom";
import { login } from "../../services/requests";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-tiny-toast";

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async () => {
    const loading = loadingMessage("Autenticando...");
    await login(loginData)
      .then(async () => {
        Toast.hide(loading);
        const username = await getUsername();
        navigation.reset({ routes: [{ name: 'Movies' }] })
        defaultMessage(`Bem vindo(a) ${username}`)
      })
      .catch(() => {
        Toast.hide(loading);
        errorMessage('Usuário ou senha inválidos!')
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>login</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#BFBFBF"
        autoCapitalize="none"
        keyboardType="email-address"
        style={[defaultStyles.inputBase, { height: 50 }]}
        value={loginData.username}
        onChangeText={event => setLoginData({ ...loginData, username: event })}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#BFBFBF"
          autoCapitalize="none"
          secureTextEntry={hidePassword}
          style={[defaultStyles.inputBase, { height: 50 }]}
          value={loginData.password}
          onChangeText={event => setLoginData({ ...loginData, password: event })}
        />
        <TouchableOpacity
          style={styles.toggle}
          activeOpacity={0.8}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <Image style={styles.eyes} source={hidePassword ? eyesClosed : eyesOpened} />
        </TouchableOpacity>
      </View>
      <ButtonIcon name="fazer login" handlePress={handleLogin} />
    </View>
  )
}

export default Login;