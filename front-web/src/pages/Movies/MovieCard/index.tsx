import { Movie } from 'core/types/movie';
import './styles.scss';

type Props = {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="card-base movie-card-container">
      <img
        src={movie.imgUrl}
        alt={movie.title}
        className="movie-card-image"
      />
      <div className="movie-card-info">
        <h5 className="movie-card-title">
          {movie.title}
        </h5>
        <h6 className="movie-card-year">
          {movie.year}
        </h6>
        <p className="movie-card-subtitle">
          {movie.subTitle}
        </p>
      </div>
    </div>
  )
}

export default MovieCard;