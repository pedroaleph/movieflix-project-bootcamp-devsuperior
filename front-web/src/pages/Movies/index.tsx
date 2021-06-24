import Pagination from 'core/components/Pagination';
import { Genre } from 'core/types/genre';
import { MoviesResponse } from 'core/types/movie';
import { makeRequest } from 'core/utils/request';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GenreFilter from './GenreFilter';
import MovieCardLoader from './Loaders/MovieCardLoader';
import MovieCard from './MovieCard';
import './styles.scss';

const Movies = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [genre, setGenre] = useState<Genre>();

  const getMovies = useCallback(() => {
    const params = {
      genreId: genre?.id,
      size: 8,
      page: activePage
    }

    setIsLoading(true);
    makeRequest({ url: '/movies', params })
      .then(response => setMoviesResponse(response.data))
      .finally(() => setIsLoading(false));
  }, [genre, activePage]);

  useEffect(() => { getMovies() }, [getMovies]);

  const handleChangeGenre = (genre: Genre) => {
    setGenre(genre);
  }

  return (
    <div className="movies-container">
      <GenreFilter handleChangeGenre={handleChangeGenre} />
      <div className="movies-catalog">
        {isLoading ? <MovieCardLoader /> : (
          moviesResponse?.content.map(movie => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="text-decoration-none"
            >
              <MovieCard movie={movie}/>
            </Link>
          ))
        )}
      </div>
      {moviesResponse && (
        <Pagination 
          totalPages={moviesResponse.totalPages}
          activePage={activePage}
          onChange={page  => setActivePage(page)}
        />
      )}
    </div>
  )
}

export default Movies;