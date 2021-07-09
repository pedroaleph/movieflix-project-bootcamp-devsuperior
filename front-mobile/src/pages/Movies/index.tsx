import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LoadingContent from '../../components/LoadingContent';
import { defaultStyles } from '../../custom';
import { getMovies } from '../../services/requests';
import { Genre } from '../../types/genre';
import { Movie } from '../../types/movie';
import GenreFilter from './GenreFilter';
import MovieCard from './MovieCard';

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [genre, setGenre] = useState<Genre>({ id: 0, name: '' });

  const loadMovies = useCallback(async () => {
      const params = {
        genreId: genre.id,
        size: 20,
      }
      setIsLoading(true);
      await getMovies({ params })
      .then(res => setMovies(res.data.content))
      .finally(() => setIsLoading(false)); 
    }, [genre])

  const handleChangeGenre = (genreSelected: Genre) => {
    setGenre(genreSelected);
  }

  useEffect(() => {
    loadMovies();
  }, [genre])

  return (
    <ScrollView style={defaultStyles.container}>
      <GenreFilter handleChangeGenre={handleChangeGenre} />
      {isLoading ? <LoadingContent /> : (movies && movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
      ))
      )}
      <View style={{ marginBottom: 60 }}/>
    </ScrollView>
  )
}

export default Movies;