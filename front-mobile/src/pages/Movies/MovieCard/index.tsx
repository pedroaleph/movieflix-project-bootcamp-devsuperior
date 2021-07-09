import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { defaultStyles } from "../../../custom";
import { Movie } from "../../../types/movie";
import { styles } from "./styles";

type Props = {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={[ defaultStyles.cardBase, styles.container]} >
      <Image source={{ uri: movie.imgUrl }} style={defaultStyles.movieImg} />
      <View style={styles.movieInfoContainer}>
        <Text style={styles.titleText}>{movie.title}</Text>
        <Text style={styles.yearText}>{movie.year}</Text>
        <Text style={styles.subtitleText}>{movie.subTitle}</Text>
        <TouchableOpacity
          style={styles.btnContainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('MovieDetails', { id: movie.id })}
        >
          <Text style={styles.btnText}>ver detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MovieCard;