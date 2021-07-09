import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Movie } from "../../../types/movie";
import { styles } from "./styles";

type Props = {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }: Props) => {
  return (
    <View style={styles.container} >
      <Image source={{ uri: movie.imgUrl }} style={styles.movieImg} />
      <View style={styles.movieInfoContainer}>
        <Text style={styles.titleText}>{movie.title}</Text>
        <Text style={styles.yearText}>{movie.year}</Text>
        <Text style={styles.subtitleText}>{movie.subTitle}</Text>
        <TouchableOpacity
          style={styles.btnContainer}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>ver detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MovieCard;