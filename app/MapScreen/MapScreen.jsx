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
import useApi from "../../hooks/useApi";
import { styles } from "./Styles";

const MapScreen = ({ route }) => {
  const { id } = route.params;
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  const { data, loading, error } = useApi(
    `https://fake.prod.mapit.me/motos/${id}`
  );

  if (loading) {
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#dc182d" />
    </View>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
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
          <Text style={styles.buttonPrimaryText}>Solicitar Cita</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />

        <TouchableOpacity
          onPress={() => navigation.navigate("ListMotoScreen")}
          style={styles.buttonSecondary}
        >
          <Text style={styles.buttonSecondaryText}>Volver</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={openModal} animationType="slide">
        <View style={styles.centeredView}>
          <Image
            source={require("../../assets/images/mapitme_logo.jpg")}
            style={styles.logo}
          />
          <View style={styles.spacerLogo} />

          <Text style={styles.modalTitle}>Moto Confirmada!</Text>
        </View>
        <View style={styles.paddingButton}>
          <TouchableOpacity
            onPress={() => setOpenModal(!openModal)}
            style={styles.buttonPrimary}
          >
            <Text style={styles.buttonPrimaryText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MapScreen;
