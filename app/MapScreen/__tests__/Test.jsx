import React from "react";
import { render, screen } from "@testing-library/react-native";
import MapScreen from "../MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import useApi from "../../../hooks/useApi";
jest.mock("../../../hooks/useApi", () => jest.fn());

describe("MapScreen", () => {
  it("renders loading state", () => {
    useApi.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    render(
      <NavigationContainer>
        <MapScreen route={{ params: { id: "MOTO_A" } }} />
      </NavigationContainer>
    );

    expect(screen.getByTestId("loading-indicator")).toBeTruthy();
  });

  it("renders error message when there is an error", () => {
    const errorMessage = "Something went wrong";
    useApi.mockImplementationOnce((fetchBaseData) => ({
      data: [],
      loading: false,
      error: errorMessage,
    }));

    const { getByText } = render(
      <NavigationContainer>
        <MapScreen route={{ params: { id: "MOTO_A" } }} />
      </NavigationContainer>
    );

    expect(getByText(`Error: ${errorMessage}`)).toBeTruthy();
  });

  it("renders indicator activity during loading state", () => {
    useApi.mockImplementationOnce((fetchBaseData) => ({
      data: [],
      loading: true,
      error: null,
    }));

    const { getByTestId } = render(
      <NavigationContainer>
        <MapScreen route={{ params: { id: "MOTO_A" } }} />
      </NavigationContainer>
    );

    expect(getByTestId("loading-indicator")).toBeTruthy();
  });
});
