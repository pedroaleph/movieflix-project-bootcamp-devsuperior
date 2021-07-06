import { StyleSheet } from "react-native";
import { colors } from "../../App";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.015, 
    color: colors.black,
  }
});