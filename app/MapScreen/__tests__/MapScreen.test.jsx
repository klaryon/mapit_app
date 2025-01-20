import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import MapScreen from "../MapScreen";
import { useNavigation } from "@react-navigation/native";
import useApi from "../../../hooks/useApi/useApi";
import { getLocales } from "expo-localization";
jest.mock("../../../hooks/useApi/useApi", () => jest.fn());

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));
jest.mock("../../../utils/depreciation/depreciation", () => ({
  calculateDepreciation: jest.fn(),
}));
jest.mock("expo-localization", () => ({
  getLocales: jest.fn(),
}));

const mockData = {
  id: "MOTO_A",
  fechaCompra: "2016-10-05",
  precioCompra: 12000,
  modelo: "AVR123",
  nombre: "Favorita",
  coordenadas: {
    latitud: 41.7933321,
    longitud: 2.3943012,
  },
};

const mockNavigate = jest.fn();

describe("MapScreen", () => {
  beforeEach(() => {
    getLocales.mockReturnValue([{ languageTag: "es-ES" }]);
    useNavigation.mockReturnValue({ navigate: mockNavigate });
    jest.clearAllMocks();
  });

  it("renders indicator activity during loading state", () => {
    useApi.mockImplementationOnce(() => ({
      data: null,
      loading: true,
      error: null,
    }));

    const { getByTestId } = render(
      <MapScreen route={{ params: { id: "MOTO_A" } }} />
    );

    expect(getByTestId("loading-indicator")).toBeTruthy();
  });

  it("renders error message when there is an error", () => {
    const errorMessage = "Something went wrong";
    useApi.mockImplementationOnce(() => ({
      data: null,
      loading: false,
      error: errorMessage,
    }));

    const { getByText } = render(
      <MapScreen route={{ params: { id: "MOTO_A" } }} />
    );

    expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
  });

  it("displays the map with coordinates and data", () => {
    useApi.mockImplementationOnce(() => ({
      data: mockData,
      loading: false,
      error: null,
    }));

    render(<MapScreen route={{ params: { id: "MOTO_A" } }} />);

    expect(screen.getByText("Volver")).toBeTruthy();
  });

  it("opens and closes the modal when book moto is pressed", () => {
    useApi.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });

    render(<MapScreen route={{ params: { id: "MOTO_A" } }} />);

    fireEvent.press(screen.getByText("Solicitar Cita"));

    expect(screen.getByText("Moto Confirmada!")).toBeTruthy();

    fireEvent.press(screen.getByText("OK"));

    expect(screen.getByText("Solicitar Cita")).toBeTruthy();
  });

  it("navigates to ListMotoScreen when go back button is pressed", () => {
    useApi.mockImplementationOnce(() => ({
      data: mockData,
      loading: false,
      error: null,
    }));

    render(<MapScreen route={{ params: { id: "MOTO_A" } }} />);

    fireEvent.press(screen.getByText("Volver"));

    expect(mockNavigate).toHaveBeenCalledWith("ListMotoScreen");
  });
});
