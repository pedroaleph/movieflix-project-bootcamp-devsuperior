import { Movie } from 'core/types/movie';
import './styles.scss';

type Props = {
  movie?: Movie;
}

const MovieInfo = ({ movie }: Props) => {
  return (
    <div className="card-base movie-details">
        <img
          src={movie?.imgUrl}
          alt={movie?.title}
          className="movie-details-image"
        />
        <div className="movie-details-info">
          <h2 className="movie-details-title">
            {movie?.title}
          </h2>
          <h3 className="text-primary movie-details-year">
            {movie?.year}
          </h3>
          <h4 className="movie-details-subtitle">
            {movie?.subTitle}
          </h4>
          <p className="movie-details-synopsis">
            {movie?.synopsis}
          </p>
        </div>
      </div>
  )
}

export default MovieInfo;