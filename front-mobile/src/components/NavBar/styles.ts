import { StyleSheet } from "react-native";
import { colors } from "../../custom";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    flexDirection: "row",
    alignItems: "center",
  },
  goBackContainer: {
    width: 45,
    alignItems: "center",
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.015, 
    color: colors.black,
  }
});