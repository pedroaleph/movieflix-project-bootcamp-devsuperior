import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import ButtonIcon from "../../components/ButtonIcon";
import { styles } from "./styles";
import homeImage from '../../assets/home.png';
import { useNavigation } from "@react-navigation/native";
import { getAccessToken, getUsername } from "../../services/auth";
import { defaultMessage } from "../../custom";

const Home: React.FC = () => {
  const navigation = useNavigation();

  const isLogged = async () => {
    if (await getAccessToken()) {
      navigation.reset({ routes: [{ name: 'Movies' }] });
      const username = await getUsername();
      defaultMessage(`Bem vindo(a) de volta, ${username}`)
    }
  }

  useEffect(() => {
    isLogged();
  }, [])

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Image source={homeImage} style={styles.image} />
      <Text style={styles.title}>
        Avalie filmes
      </Text>
      <Text style={styles.subtitle}>
        Diga o que você achou do seu filme favorito
      </Text>
      <ButtonIcon name="fazer login" handlePress={handleGoToLogin} />
    </View>
  );
}
export default Home;