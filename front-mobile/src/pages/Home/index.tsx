import React from "react";
import { Image, Text, View } from "react-native";
import home from '../../assets/home.png';
import { styles } from "./styles";

const Home = () => {

  return (
    <View style={styles.container}>
      <Image source={home} style={styles.image}/>
    </View>
  );
}
export default Home;