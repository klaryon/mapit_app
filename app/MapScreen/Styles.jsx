import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mapView: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spacer: {
    height: 15,
  },
  paddingMapFooter: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    color: colors.black,
  },
  modalText: {
    fontSize: 10,
  },
  logo: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  spacerLogo: {
    height: 60,
  },
  paddingButton: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});

export default styles;
