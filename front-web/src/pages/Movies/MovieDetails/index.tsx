import { Movie } from 'core/types/movie';
import { makeRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailsLoader from './Loaders/MovieDetailsLoader';
import MovieInfo from './MovieInfo';
import Reviews from './Reviews';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: `/movies/${movieId}` })
      .then(response => setMovie(response.data))
      .finally(() => setIsLoading(false));
  }, [movieId])


  return (
    <div className="movie-details-container">
      {isLoading ? <MovieDetailsLoader /> : (
        <>
          <MovieInfo movie={movie} />
          <Reviews reviews={movie?.reviews} movie_id={Number(movieId)}/>
        </>
      )}
    </div>
  )
}

export default MovieDetails;