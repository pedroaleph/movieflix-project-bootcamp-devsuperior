import { StyleSheet } from "react-native";
import { colors } from "../../../../custom";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  userNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  starIconContainer: {
    width: 48,
    alignItems: "center",
  },
  usernameText: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.015,
    color: colors.white,
  },
});