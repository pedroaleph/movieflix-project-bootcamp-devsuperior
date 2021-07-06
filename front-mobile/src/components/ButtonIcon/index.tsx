import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type props = {
  name: string;
  path: string;
}

const ButtonIcon = ({ name, path }: props) => {
  return(
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <Text style={styles.text}>
          {name}
        </Text>
        <View style={styles.arrowContainer}>
          <Image source={require('../../assets/arrow.png')}/>
        </View>
      </TouchableOpacity>
  )
}

export default ButtonIcon;