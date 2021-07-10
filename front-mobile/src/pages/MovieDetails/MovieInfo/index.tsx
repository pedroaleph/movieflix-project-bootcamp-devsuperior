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
    <View style={[defaultStyles.cardBase, defaultStyles.movieDetailsContainer]}>
      <Text style={styles.titleText}>{movie.title}</Text>
      <Image source={{ uri: movie.imgUrl }} style={defaultStyles.movieImg} />
      <View style={styles.detailsContainer}>
        <Text style={styles.yearText}>{movie.year}</Text>
        <Text style={styles.subTitleText}>{movie.subTitle}</Text>
        <Text style={styles.synopsysNameText}>Sinopse</Text>
        <View style={defaultStyles.movieDetailsBorderContainer}>
        <Text style={defaultStyles.movieDetailsBorderText}>{movie.synopsis}</Text>
        </View>
      </View>
    </View>
  )
}

export default MovieInfo;