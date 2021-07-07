import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import arrow from '../../assets/arrow.png';
import { useNavigation } from "@react-navigation/native";

type Props = {
  name: string;
  nextPage: string;
}

const ButtonIcon: React.FC<Props> = ({ name, nextPage }: Props) => {
  const navigation = useNavigation();

  return(
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate(nextPage)}
    >
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