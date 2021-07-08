import { StyleSheet } from "react-native";
import { colors } from "../../custom";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-around',
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 40,
  },
  image: {
    width: '100%',
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
    marginHorizontal: 25,
    height: 70,
    marginBottom: 15,
  },
});