import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { getMovieById } from "../../services/requests";
import { Movie } from "../../types/movie";
import MovieInfo from "./MovieInfo";
import Reviews from "./Reviews";
import { styles } from "./styles";

type Props = {
  route: {
    params: {
      id: number;
    }
  }
}

const MovieDetails: React.FC<Props> = (
  { route: { params: { id } } }
) => {
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);

  const loadMovieById = useCallback(async () => {
    setIsLoading(true);
    await getMovieById(id)
      .then(res => setMovie(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    loadMovieById();
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FFC700" />
        </View>
      ) : <>
      {movie && <>
        <MovieInfo movie={movie} />
        <Reviews movie_id={id} reviews={movie.reviews} />
      </>}
      </>
      }
      <View style={{ marginBottom: 30 }} />
    </ScrollView>
  )
}

export default MovieDetails;