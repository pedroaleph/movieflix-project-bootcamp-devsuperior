import React from "react";
import { View } from "react-native";
import { Review } from "../../../types/movie";
import { styles } from "./styles";

type Props = {
  reviews: Review[];
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default Reviews;