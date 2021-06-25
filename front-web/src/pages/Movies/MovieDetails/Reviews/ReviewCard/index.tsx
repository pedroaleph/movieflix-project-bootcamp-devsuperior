import { Review } from 'core/types/movie';
import { ReactComponent as StarIcon } from 'core/assets/images/star.svg';
import './styles.scss';

type Props = {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="movie-details-review-card">
      <h4 className="movie-details-review-card-user">
        <StarIcon className="movie-details-review-card-star-icon"/>
        {review.user.name}
      </h4>
      <p className="movie-details-review-card-text">
        {review.text}
      </p>
    </div>
  )
}

export default ReviewCard;