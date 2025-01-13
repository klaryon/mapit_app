import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ListMotoScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://fake.prod.mapit.me/motos");
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
