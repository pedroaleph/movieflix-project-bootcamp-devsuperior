import React from "react";
import { Image, Text, View } from "react-native";
import ButtonIcon from "../../components/ButtonIcon";
import { styles } from "./styles";
import homeImage from '../../assets/home.png';

const Home: React.FC = () => {

  return (
    <View style={styles.container}>
      <Image source={homeImage} style={styles.image} />
      <Text style={styles.title}>
        Avalie filmes
      </Text>
      <Text style={styles.subtitle}>
        Diga o que você achou do seu filme favorito
      </Text>
      <ButtonIcon name="fazer login" currentPage="Home" nextPage="Login" />
    </View>
  );
}
export default Home;