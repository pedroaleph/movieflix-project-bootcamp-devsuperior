import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import goBack from '../../assets/goBack.png';
import { getAccessToken, logout } from "../../services/auth";
import { defaultMessage } from "../../custom";

const NavBar: React.FC = () => {
  const navigation = useNavigation();
  const [isLogged, setIsLogged] = useState(false);

  const userState = async () => {
    const state = await getAccessToken();

    if(state) {
      setIsLogged(true);
    }
    else {
      setIsLogged(false);
    }

  }
  
  useEffect(() => {
    userState();
  }, [])

  const doLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    })
    defaultMessage('Volte sempre!');
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
      <View style={styles.goBackContainer}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Image source={goBack} />
        </TouchableOpacity>
      )}
      </View>
      <Text style={styles.text}>
        MovieFlix
      </Text>
      </View>
      {isLogged && (
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={doLogout}
        style={styles.exitContainer}
        >
          <Text style={styles.exitText}>
            sair
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default NavBar;
