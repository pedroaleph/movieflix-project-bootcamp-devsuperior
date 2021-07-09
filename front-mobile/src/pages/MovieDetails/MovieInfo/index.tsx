import React from "react";
import { Image, Text, View } from "react-native";
import { Movie } from "../../../types/movie";
import { styles } from "./styles";

type Props = {
  movie: Movie;
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Text>{movie.title}</Text>
    </View>
  )
}

export default MovieInfo;