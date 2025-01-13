import React from "react";
import { Button } from "react-native";
import axios from "axios";

const getMotos = async () => {
  const response = await axios.get("https://fake.prod.mapit.me/motos");
  const data = response.data;
  alert("Listado Motos: " + JSON.stringify(data));
};

const getDMetailMoto = async () => {
  const response = await axios.get("https://fake.prod.mapit.me/motos/MOTO_B");
  const data = response.data;
  alert("Detalle Moto: " + JSON.stringify(data));
};

export default function App() {
  return (
    <>
      <Button onPress={() => getMotos()} title="Get listado Motos" />
      <Button onPress={() => getDMetailMoto()} title="Get Detalle Moto" />
    </>
  );
}
