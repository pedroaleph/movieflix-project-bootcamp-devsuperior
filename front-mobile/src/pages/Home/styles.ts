import { StyleSheet } from "react-native";
import { colors } from "../../../App";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-around',
    backgroundColor: colors.background,
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  image: {
    width: 340,
    height: 250,
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: -0.015,
    color: colors.white,
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.015,
    color: colors.subtitle,
    marginHorizontal: 45,
    height: 70,
    marginBottom: 15,
  },
})