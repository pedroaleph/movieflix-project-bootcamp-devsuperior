import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import arrow from '../../assets/arrow.png';

const ButtonIcon = () => {
  return(
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <Text style={styles.text}>
          fazer login
        </Text>
        <View style={styles.arrowContainer}>
          <Image source={arrow}/>
        </View>
      </TouchableOpacity>
  )
}

export default ButtonIcon;