import { StyleSheet } from "react-native";
import { colors } from "../../../custom";

export const styles = StyleSheet.create({
  container: {
    height: 408,
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 20,
  },
  movieImg: {
    width: "100%",
    height: 225
  },
  movieInfoContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    flex: 1,
    justifyContent: "space-between",
  },
  btnContainer: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    justifyContent: "center",
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.015,
    color: colors.white,
  },
  yearText: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.015,
    color: colors.primary,
  },
  subtitleText: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.015,
    color: "#CDCDCD",
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
    letterSpacing: -0.015,
    color: colors.white,
    textTransform: "uppercase",
  },
})