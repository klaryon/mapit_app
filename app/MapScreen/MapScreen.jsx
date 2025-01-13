import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./Styles";
import useApi from "../../hooks/useApi";
import { fetchDataById } from "@/api/apiEndpoints";
import images from "../../constants/images";
import text from "../../constants/text";

const MapScreen = ({ route }) => {
  const { id } = route.params;
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  const { data, loading, error } = useApi(() => fetchDataById(id));

  if (loading) {
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#dc182d" />
    </View>;
  }

  if (error) {
    return (
      <Text>
        {text.error} {error}
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: data?.coordenadas?.latitud,
          longitude: data?.coordenadas?.longitud,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: data?.coordenadas?.latitud,
            longitude: data?.coordenadas?.longitud,
          }}
          title={data?.id}
          description={data?.nombre}
        />
      </MapView>

      <View style={styles.paddingMapFooter}>
        <TouchableOpacity
          onPress={() => setOpenModal(!openModal)}
          style={styles.buttonPrimary}
        >
          <Text style={styles.buttonPrimaryText}>{text.bookMoto}</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />

        <TouchableOpacity
          onPress={() => navigation.navigate("ListMotoScreen")}
          style={styles.buttonSecondary}
        >
          <Text style={styles.buttonSecondaryText}>{text.goBack}</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={openModal} animationType="slide">
        <View style={styles.centeredView}>
          <Image source={images.modalLogo} style={styles.logo} />
          <View style={styles.spacerLogo} />

          <Text style={styles.modalTitle}>{text.confirmedMoto}</Text>
        </View>
        <View style={styles.paddingButton}>
          <TouchableOpacity
            onPress={() => setOpenModal(!openModal)}
            style={styles.buttonPrimary}
          >
            <Text style={styles.buttonPrimaryText}>{text.ok}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MapScreen;
