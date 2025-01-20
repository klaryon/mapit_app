import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ListMotoScreen from "../ListMotoScreen";
import { useNavigation } from "@react-navigation/native";
import useApi from "../../../hooks/useApi/useApi";

jest.mock("../../../hooks/useApi/useApi", () => jest.fn());

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

const mockData = [
  { id: "MOTO_A", modelo: "AVR123" },
  { id: "MOTO_B", modelo: "ADV750" },
];

const mockNavigate = jest.fn();

describe("ListMotoScreen tests", () => {
  beforeEach(() => {
    useNavigation.mockReturnValue({ navigate: mockNavigate });

    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    useApi.mockImplementationOnce(() => ({
      data: null,
      loading: true,
      error: null,
    }));

    const { getByTestId } = render(<ListMotoScreen />);
    const loadingIndicator = getByTestId("loading-indicator");

    expect(loadingIndicator).toBeTruthy();
  });

  it("renders error message when there is an error", () => {
    const errorMessage = "Something went wrong";
    useApi.mockImplementationOnce(() => ({
      data: null,
      loading: false,
      error: errorMessage,
    }));

    const { getByText } = render(<ListMotoScreen />);

    expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
  });

  it("renders list of motos when data is loaded", () => {
    useApi.mockImplementationOnce(() => ({
      data: mockData,
      loading: false,
      error: null,
    }));

    const { getByText } = render(<ListMotoScreen />);
    expect(getByText("MOTO_A")).toBeTruthy();
    expect(getByText("MOTO_B")).toBeTruthy();
  });

  it("navigates to MapScreen when a moto is pressed", () => {
    useApi.mockImplementationOnce(() => ({
      data: mockData,
      loading: false,
      error: null,
    }));

    const { getByText } = render(<ListMotoScreen item={mockData[0]} />);
    const itemText = getByText(mockData[0].id.toString());
    fireEvent.press(itemText);

    expect(mockNavigate).toHaveBeenCalledWith("MapScreen", {
      id: mockData[0].id,
    });
  });
});
