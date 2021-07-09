import React, { useCallback, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";

type Props = {
  route: {
    params: {
      id: number;
    }
  }
}

const MovieDetails: React.FC<Props> = (
  { route: { params: { id } } }
) => {

  const loadMovie = useCallback(async() => {

  }, []);

  useEffect(() => {
    loadMovie();
  }, []);
  return (
    <ScrollView style={styles.container}>
      
      <View style={{ marginBottom: 30 }}/>
    </ScrollView>
  )
}

export default MovieDetails;