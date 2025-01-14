import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";

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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  touchableOpacity: {
    padding: 16,
  },
  spacer: {
    height: 40,
  },
});

export default styles;
