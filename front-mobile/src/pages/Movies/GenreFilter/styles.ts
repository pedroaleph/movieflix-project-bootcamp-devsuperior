import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../custom";

export const styles = StyleSheet.create({
  container: {
    height: 85,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  modalContainer: {
    marginTop: 15,
    width: "100%",
    height: "100%",
    backgroundColor: "#00000033",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    width: "75%",
    maxHeight: "27%",
    backgroundColor: colors.card,
    borderRadius: 10,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalText: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.015,
    color: colors.primary,
    paddingBottom: 20
  },
  modalItem: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  modalItemText: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.015,
    color: colors.primary,
  },
  filterContainer: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  filterText: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.015,
    color: colors.white
  },
  filterArrow: {
    transform: [{ rotate: '90deg'}],
    tintColor: colors.eyes,
  }
})