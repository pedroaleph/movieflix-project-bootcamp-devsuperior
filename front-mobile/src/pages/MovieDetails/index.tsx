import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import LoadingContent from "../../components/LoadingContent";
import { defaultStyles } from "../../custom";
import { getMovieById } from "../../services/requests";
import { Movie } from "../../types/movie";
import MovieInfo from "./MovieInfo";
import Reviews from "./Reviews";

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
  const [reload, setReload] = useState(1);

  const loadMovieById = async () => {
    setIsLoading(true);
    await getMovieById(id)
      .then(res => setMovie(res.data))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadMovieById();
  }, [reload]);

  const handleReload = () => {
    setReload(reload + 1);
  }
  
  return (
    <ScrollView style={defaultStyles.container}>
      {isLoading ? <LoadingContent /> : <>
      {movie && <>
        <MovieInfo movie={movie} />
        <Reviews
          movie_id={id}
          reviews={movie.reviews}
          handleReload={handleReload}
        />
      </>}
      </>
      }
      <View style={{ marginBottom: 30 }} />
    </ScrollView>
  )
}

export default MovieDetails;