import { StyleSheet } from "react-native";

export const colors = {
  primary: "#FFC700",
  background: "#525252",
  black: "#000000",
  white: "#FFFFFF",
  subtitle: "#F2F2F2",
  arrow: "rgba(38, 50, 56, 0.5)",
  input: "#FEFEFE",
  placeholder: "#BFBFBF",
  card: "#6C6C6C",
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});