import { StyleSheet } from "react-native";
import colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.red,
    borderColor: colors.red,
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
  },
  buttonSecondary: {
    backgroundColor: colors.white,
    borderColor: colors.red,
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
  },
  buttonPrimaryText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
  },
  buttonSecondaryText: {
    color: colors.red,
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
