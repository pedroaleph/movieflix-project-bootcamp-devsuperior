import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingContent: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFC700" />
    </View>
  )
}

export default LoadingContent;

const styles = StyleSheet.create({
  container: {
    height: 550,
    justifyContent: "center",
  },
})