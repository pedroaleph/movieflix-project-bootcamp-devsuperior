import { StyleSheet } from "react-native";
import { colors } from "../../custom";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContent: {
    flexDirection: "row",
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
  },
  exitContainer: {
    width: 75,
    height: 25,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.black,
    alignItems: "center",
    marginRight: 20
  },
  exitText: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    letterSpacing: -0.015,
    textTransform: "uppercase",
    color: colors.black,
  }
});