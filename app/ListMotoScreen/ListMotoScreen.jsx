import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useApi from "../../hooks/useApi";

const ListMotoScreen = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useApi("https://fake.prod.mapit.me/motos");

  if (loading) {
    return <ActivityIndicator size="large" color="#dc182d" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Motorcycles</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MapScreen", { id: item.id })}
            style={{ padding: 16, borderBottomWidth: 1 }}
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
