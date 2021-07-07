import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import goBack from '../../assets/goBack.png';

const NavBar: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.goBackContainer}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Image source={goBack} />
        </TouchableOpacity>
      )}
      </View>
      <Text style={styles.text}>
        MovieFlix
      </Text>
    </View>
  );
}

export default NavBar;
