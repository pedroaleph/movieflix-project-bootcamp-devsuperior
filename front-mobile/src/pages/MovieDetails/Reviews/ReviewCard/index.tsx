import React from "react";
import { Image, Text, View } from "react-native";
import { defaultStyles } from "../../../../custom";
import { Review } from "../../../../types/movie";
import { styles } from "./styles";
import star from "../../../../assets/star.png";

type Props = {
  review: Review;
}

const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userNameContainer}>
        <View style={styles.starIconContainer}>
          <Image source={star} />
        </View>
        <Text style={styles.usernameText}>{review.user.name}</Text>
      </View>
      <View style={defaultStyles.movieDetailsBorderContainer}>
        <Text style={defaultStyles.movieDetailsBorderText}>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewCard;