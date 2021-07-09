import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import goBack from '../../assets/goBack.png';
import { isAuthenticated, logout } from "../../services/auth";
import { defaultMessage } from "../../custom";

const NavBar: React.FC = () => {
  const navigation = useNavigation();
  const [isLogged, setIsLogged] = useState(false);
  const privatesRoutes = ['Movies', 'MovieDetails'];
  const route = useRoute();

  const userState = async () => {
    const isRoutePrivate = privatesRoutes.includes(route.name);

    if (isRoutePrivate) {
      const state = await isAuthenticated();

      if (state) {
        setIsLogged(true);
      }
      else {
        setIsLogged(false);
        doLogout();
      }
    }
  }

  useEffect(() => {
    userState();
  }, [])

  const doLogout = () => {
    logout();
    navigation.reset({ routes: [{ name: 'Home' }] });
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
          onPress={() => {
            doLogout();
            defaultMessage('Volte sempre!');
          }}
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
