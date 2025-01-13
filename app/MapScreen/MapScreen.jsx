import React, { useState } from "react";
import { SafeAreaView, View, Text, Modal, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../MapScreen/Styles";
import useApi from "../../hooks/useApi";
import { fetchDataById } from "@/api/apiEndpoints";
import images from "../../constants/Images";
import text from "../../constants/text";
import colors from "../../constants/Colors";
import IndicatorActivity from "../../components/atoms/IndicatorActivity/IndicatorActivity";
import FlexButton from "../../components/atoms/FlexButton/FlexButton";

const MapScreen = ({ route }) => {
  const { id } = route.params;
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  const { data, loading, error } = useApi(() => fetchDataById(id));

  if (loading) {
    return (
      <IndicatorActivity
        size="large"
        color={colors.red}
        testID="loading-indicator"
      />
    );
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
        <FlexButton
          title={text.bookMoto}
          onPress={() => setOpenModal(!openModal)}
          type="primary"
        />

        <View style={styles.spacer} />

        <FlexButton
          title={text.goBack}
          onPress={() => navigation.navigate("ListMotoScreen")}
          type="secondary"
        />
      </View>

      <Modal visible={openModal} animationType="slide">
        <View style={styles.centeredView}>
          <Image source={images.modalLogo} style={styles.logo} />
          <View style={styles.spacerLogo} />

          <Text style={styles.modalTitle}>{text.confirmedMoto}</Text>
        </View>
        <View style={styles.paddingButton}>
          <FlexButton
            title={text.ok}
            onPress={() => setOpenModal(!openModal)}
            type="primary"
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MapScreen;
