import { StyleSheet } from "react-native";
import { colors } from "../../../App";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.015,
    color: colors.black,
    textTransform: 'uppercase',
  },
  arrowContainer: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: colors.arrow,
  },
})