import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getMovies } from '../../services/requests';
import { Genre } from '../../types/genre';
import { Movie } from '../../types/movie';
import GenreFilter from './GenreFilter';
import { styles } from './styles';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [genre, setGenre] = useState<Genre>();

  const loadMovies = async () => {
    const params = {
      genreId: genre?.id,
      size: 20,
    }
    setIsLoading(true);
    const res = await getMovies({ params });
    setMovies(res.data.content);
    setIsLoading(false);
  }

  const handleChangeGenre = (genre: Genre | undefined) => {
    setGenre(genre);
  }

  useEffect(() => {
    loadMovies();
  }, [])

  return (
    <View style={styles.container}>
      <GenreFilter handleChangeGenre={handleChangeGenre} />
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FFC700" />
          </View>
        )  : (
          <View>

          </View>
        )}
      </View>
  )
}

export default Movies;