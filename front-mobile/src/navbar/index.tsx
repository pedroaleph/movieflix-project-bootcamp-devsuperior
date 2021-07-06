import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        MovieFlix
      </Text>
    </View>
  );
}

export default NavBar;