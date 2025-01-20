import React, { useState } from "react";
import { SafeAreaView, View, Text, Modal, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import useApi from "../../hooks/useApi/useApi";
import { fetchDataById } from "@/api/apiEndpoints";
import images from "../../constants/images";
import text from "../../constants/text";
import colors from "../../constants/colors";
import IndicatorActivity from "../../components/atoms/IndicatorActivity/IndicatorActivity";
import FlexButton from "../../components/atoms/FlexButton/FlexButton";
import { calculateDepreciation } from "../../utils/depreciation/depreciation";
import { getLocales } from "expo-localization";

const MapScreen = ({ route }) => {
  const { id } = route.params;
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation();
  const { data, loading, error } = useApi(() => fetchDataById(id));
  const depreciation = calculateDepreciation(
    data?.precioCompra,
    data?.fechaCompra
  );

  const locale = getLocales()[0];
  const currencySymbol = locale.currencySymbol;

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
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
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
        <View style={styles.repurchaseContainer}>
          <Text style={styles.repurchase}>
            {text.repurchaseValue}
            {currencySymbol}
            {depreciation}
          </Text>
        </View>

        <View style={styles.spacer} />
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
