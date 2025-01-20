import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mapView: {
    flex: 1,
  },
  paddingMapFooter: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  repurchaseContainer: {
    alignItems: "center",
  },
  repurchase: {
    fontSize: 20,
    color: colors.black,
  },
  spacer: {
    height: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  spacerLogo: {
    height: 60,
  },
  modalTitle: {
    fontSize: 20,
    color: colors.black,
  },
  paddingButton: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});

export default styles;
