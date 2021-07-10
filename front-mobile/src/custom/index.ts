import { StyleSheet } from "react-native";
import Toast from "react-native-tiny-toast";

const colors = {
  primary: "#FFC700",
  background: "#525252",
  black: "#000000",
  white: "#FFFFFF",
  subtitle: "#F2F2F2",
  arrow: "rgba(38, 50, 56, 0.5)",
  input: "#FEFEFE",
  border: "#E1E1E1",
  placeholder: "#BFBFBF",
  eyes: "#9E9E9E",
  card: "#6C6C6C",
  shadow: "rgba(0, 0, 0, 0.25)",
};

const defaultStyles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputBase: {
    width: '100%',
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.015,
  },
  cardBase: {
    width: "100%",
    backgroundColor: colors.card,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  movieImg: {
    width: "100%",
    height: 225,
  },
  movieDetailsContainer: {
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 20,
    marginBottom: 20,
  },
  movieDetailsBorderContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  movieDetailsBorderText: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.015,
    textAlign: "justify",
    color: colors.eyes,
  },
});

const errorMessage = (message: string) => {
  Toast.show(message, {
    containerStyle: { backgroundColor: colors.black },
    textStyle: { color: colors.primary },
  })
}

const defaultMessage = (message: string) => {
  Toast.show(message, {
    containerStyle: { backgroundColor: colors.primary },
    textStyle: { color: colors.black },
  })
}

const successMessage = (message: string) => {
  Toast.showSuccess(message, {
    containerStyle: { backgroundColor: colors.primary },
    textStyle: { color: colors.black },
  })
}

const loadingMessage = (message: string) => {
  Toast.showLoading(message, {
    containerStyle: { backgroundColor: colors.primary },
    textStyle: { color: colors.black },
  })
}

export { colors, defaultStyles, errorMessage, defaultMessage, successMessage, loadingMessage };