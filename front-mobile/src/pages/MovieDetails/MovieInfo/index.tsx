import React from "react";
import { Image, Text, View } from "react-native";
import { defaultStyles } from "../../../custom";
import { Movie } from "../../../types/movie";
import { styles } from "./styles";

type Props = {
  movie: Movie;
}

const MovieInfo: React.FC<Props> = ({ movie }) => {
  return (
    <View style={[ defaultStyles.cardBase, styles.container]}>
      <Text>{movie.title}</Text>
    </View>
  )
}

export default MovieInfo;