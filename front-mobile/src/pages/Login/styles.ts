import { StyleSheet } from "react-native";
import { colors } from "../../custom";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 95,
    paddingHorizontal: 40,
  },
  text: {
    fontSize: 30,
    lineHeight: 41,
    textAlign: "center",
    letterSpacing: -0.015,
    color: colors.white,
    textTransform: "uppercase",
    height: 65,
    marginBottom: 50,
  },
  passwordContainer: {
    width: '100%',
    paddingVertical: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggle: {
    margin: -40,
  },
  eyes: {
    width: 25,
    tintColor: colors.eyes
  }
})