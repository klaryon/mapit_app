import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import useApi from "../../hooks/useApi";
import { fetchBaseData } from "@/api/apiEndpoints";
import images from "../../constants/images";
import text from "../../constants/text";
import colors from "../../constants/colors";
import IndicatorActivity from "../../components/atoms/IndicatorActivity/IndicatorActivity";

const ListMotoScreen = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useApi(fetchBaseData);

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
      <Image source={images.listLogo} style={styles.logo} />

      <View style={styles.spacer} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MapScreen", { id: item.id })}
            style={styles.touchableOpacity}
          >
            <Text>{item.id}</Text>
            <Text>{item.modelo}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ListMotoScreen;
