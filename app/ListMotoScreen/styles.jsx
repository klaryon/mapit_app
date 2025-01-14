import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  spacer: {
    height: 40,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  touchableOpacity: {
    padding: 16,
  },
});

export default styles;
