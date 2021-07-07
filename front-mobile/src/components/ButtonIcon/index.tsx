import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import arrow from '../../assets/arrow.png';

type Props = {
  name: string;
  path: string;
}

const ButtonIcon: React.FC<Props> = ({ name, path }: Props) => {
  return(
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <Text style={styles.text}>
          {name}
        </Text>
        <View style={styles.arrowContainer}>
          <Image source={arrow}/>
        </View>
      </TouchableOpacity>
  )
}

export default ButtonIcon;