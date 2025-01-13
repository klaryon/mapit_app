import React from "react";
import { render } from "@testing-library/react-native";
import ListMotoScreen from "../ListMotoScreen";
import { NavigationContainer } from "@react-navigation/native";
import useApi from "../../../hooks/useApi";

jest.mock("../../../hooks/useApi", () => jest.fn());

describe("ListMotoScreen", () => {
  it("renders loading state", () => {
    useApi.mockImplementationOnce((fetchBaseData) => ({
      data: [],
      loading: true,
      error: null,
    }));

    const { getByTestId } = render(
      <NavigationContainer>
        <ListMotoScreen />
      </NavigationContainer>
    );
    const loadingIndicator = getByTestId("loading-indicator");

    expect(loadingIndicator).toBeTruthy();
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
        <ListMotoScreen />
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
        <ListMotoScreen />
      </NavigationContainer>
    );

    expect(getByTestId("loading-indicator")).toBeTruthy();
  });
});
