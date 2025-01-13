import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  ActivityIndicator,
  Modal,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import useApi from "../../hooks/useApi";

const MapScreen = ({ route }) => {
  const { id } = route.params;
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  const { data, loading, error } = useApi(
    `https://fake.prod.mapit.me/motos/${id}`
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#dc182d" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
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

      <View style={{ padding: 16 }}>
        <Button
          title="Close"
          onPress={() => navigation.navigate("ListMotoScreen")}
        />
        <Button
          title="Book Appointment"
          onPress={() => setOpenModal(!openModal)}
        />
      </View>

      <Modal visible={openModal} transparent={true} animationType="slide">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18, marginBottom: 20 }}>
            Motocycle Confirmed!
          </Text>
          <Button title="OK" onPress={() => setOpenModal(!openModal)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MapScreen;
