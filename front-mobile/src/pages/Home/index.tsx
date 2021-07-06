import React from "react";
import { Image, Text, View } from "react-native";
import ButtonIcon from "../../components/ButtonIcon";
import { styles } from "./styles";

const Home = () => {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/home.png')} style={styles.image} />
      <Text style={styles.title}>
        Avalie filmes
      </Text>
      <Text style={styles.subtitle}>
        Diga o que você achou do seu filme favorito
      </Text>
      <ButtonIcon name="fazer login" path="Login" />
    </View>
  );
}
export default Home;