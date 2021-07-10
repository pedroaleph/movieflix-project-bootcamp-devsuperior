import { StyleSheet } from "react-native";
import { colors } from "../../../custom";

export const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 33,
    letterSpacing: -0.015,
    color: colors.white,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  detailsContainer: {
    marginTop: 15,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  yearText: {
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 33,
    letterSpacing: -0.015,
    color: colors.primary,
  },
  subTitleText: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.015,
    color: colors.eyes,
  },
  synopsysNameText: {
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 30,
    letterSpacing: -0.015,
    color: colors.white,
    marginTop: 15,
    marginBottom: 10,
  },
});