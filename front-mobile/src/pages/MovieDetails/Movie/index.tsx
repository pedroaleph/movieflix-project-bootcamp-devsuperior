import React from "react";
import { View } from "react-native";
import { Movie } from "../../../types/movie";
import { styles } from "./styles";

type Props = {
  movie: Movie;
}

const Movie: React.FC<Props> = ({ movie }) => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default Movie;