import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import ButtonIcon from "../../components/ButtonIcon";
import eyesOpened from "../../assets/eyes-opened.png";
import eyesClosed from "../../assets/eyes-closed.png";
import { LoginData } from "../../services/auth";
import { styles } from "./styles";

const Login: React.FC = () => {
  const [userInfo, setUserInfo] = useState<LoginData>({
    username: '',
    password: '',
  });
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = () => {
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>login</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#BFBFBF"
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
        value={userInfo.username}
        onChangeText={event => setUserInfo({ ...userInfo, username: event })}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#BFBFBF"
          autoCapitalize="none"
          secureTextEntry={hidePassword}
          style={styles.input}
          value={userInfo.password}
          onChangeText={event => setUserInfo({ ...userInfo, password: event })}
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