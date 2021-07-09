import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getAuthorities } from "../../../services/auth";
import { Review } from "../../../types/movie";
import { styles } from "./styles";

type Props = {
  movie_id: number;
  reviews: Review[];
}

const Reviews: React.FC<Props> = ({ movie_id, reviews }) => {
  const [isMember, setIsMember] = useState(false);
  const isExist = Boolean(reviews.length);

  const loadAuthorities = async () => {
    const authorities = await getAuthorities();
    authorities && setIsMember(authorities.includes('ROLE_MEMBER'));
  }

  useEffect(() => {
    loadAuthorities();
  }, [])

  
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default Reviews;