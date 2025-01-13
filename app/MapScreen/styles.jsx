import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  mapView: {
    flex: 1,
  },
  indicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPrimary: {
    backgroundColor: "#dc182d",
    borderColor: "#dc182d",
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
  },
  buttonSecondary: {
    backgroundColor: "#FFF",
    borderColor: "#dc182d",
    borderWidth: 1,
    padding: 12,
    borderRadius: 25,
  },
  buttonPrimaryText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
  },
  buttonSecondaryText: {
    color: "#dc182d",
    fontSize: 16,
    textAlign: "center",
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
    color: "#000",
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
