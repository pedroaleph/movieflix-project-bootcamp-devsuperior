import { StyleSheet } from "react-native";
import { colors } from "../../../custom";

export const styles = StyleSheet.create({
  reviewText: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 30,
    letterSpacing: -0.015,
    color: colors.white,
    marginHorizontal: 20,
  },
  noReviewsContainer: {
    marginTop: 40,
    marginHorizontal: 20,
    alignItems: "flex-end",
  }
});