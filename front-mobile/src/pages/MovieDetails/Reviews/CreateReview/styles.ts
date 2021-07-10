import { StyleSheet } from "react-native";
import { colors } from "../../../../custom";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  reviewInput: {
    minHeight: 97,
    textAlignVertical: 'top',
  },
  saveContainer: {
    marginTop: 15,
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
  },
  saveText: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: -0.015,
    color: colors.black,
    textTransform: "uppercase",
  }
});