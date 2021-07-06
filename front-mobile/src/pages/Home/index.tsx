import React from "react";
import { Image, Text, View } from "react-native";
import home from '../../assets/home.png';
import ButtonIcon from "../../components/ButtonIcon";
import { styles } from "./styles";

const Home = () => {

  return (
    <View style={styles.container}>
      <Image source={home} style={styles.image} />
      <Text style={styles.title}>
        Avalie filmes
      </Text>
      <Text style={styles.subtitle}>
        Diga o que você achou do seu filme favorito
      </Text>
      <ButtonIcon />
    </View>
  );
}
export default Home;