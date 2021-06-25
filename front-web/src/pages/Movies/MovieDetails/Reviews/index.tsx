import { Review } from 'core/types/movie';
import { getAccessTokenDecoded } from 'core/utils/auth';
import CreateReview from './CreateReview';
import ReviewCard from './ReviewCard';
import './styles.scss';

type Props = {
  movie_id: number;
  reviews?: Review[];
}

const Reviews = ({ reviews, movie_id }: Props) => {
  const authorities = getAccessTokenDecoded().authorities;
  const isMember = authorities.includes('ROLE_MEMBER');
  const isExist = Boolean(reviews?.length);

  return (
    <div className="movie-details-reviews-container">
      {isMember && (
        <CreateReview movie_id={movie_id}/>
      )}
      {isExist && (
        <div className="card-base movie-details-reviews">
          {reviews?.map(review => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Reviews;