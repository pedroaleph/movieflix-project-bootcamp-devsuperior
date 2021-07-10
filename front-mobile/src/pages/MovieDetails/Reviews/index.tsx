import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { defaultStyles } from "../../../custom";
import { getAuthorities } from "../../../services/auth";
import { Review } from "../../../types/movie";
import CreateReview from "./CreateReview";
import ReviewCard from "./ReviewCard";
import { styles } from "./styles";

type Props = {
  movie_id: number;
  reviews: Review[];
  handleReload: () => void;
}

const Reviews: React.FC<Props> = ({ movie_id, reviews, handleReload }) => {
  const [isMember, setIsMember] = useState(false);
  const [isReviewsExists, setIsReviewsExists] = useState(false);

  const loadAuthorities = async () => {
    const authorities = await getAuthorities();
    authorities && setIsMember(authorities.includes('ROLE_MEMBER'));
  }

  useEffect(() => {
    loadAuthorities();
    setIsReviewsExists(Boolean(reviews.length));
  }, [])


  return (
    <View>
      {isMember && (
        <View style={[defaultStyles.cardBase, defaultStyles.movieDetailsContainer]}>
          <CreateReview
            movie_id={movie_id}
            handleReload={handleReload}
          />
        </View>
      )}
      <View style={[defaultStyles.cardBase, defaultStyles.movieDetailsContainer]}>
        <Text style={styles.reviewText}>Avaliações</Text>
        {isReviewsExists ? (
          reviews.map((review) => <ReviewCard key={review.id} review={review} />)
        ) : (
          <View style={styles.noReviewsContainer}>
            <Text style={defaultStyles.movieDetailsBorderText}>
              Este titulo ainda possui avaliações...
            </Text>
          </View>
        )}

      </View>
    </View>
  )
}

export default Reviews;