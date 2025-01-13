import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 16,
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  touchableOpacity: {
    padding: 16,
  },
  spacer: {
    height: 40,
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
