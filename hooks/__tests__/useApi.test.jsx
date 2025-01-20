import React from "react";
import { Text } from "react-native";
import { render, screen, waitFor } from "@testing-library/react-native";
import useApi from "../useApi";

const TestComponent = ({ fn }) => {
  const { data, loading, error } = useApi(fn);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;
  return <Text>Data: {data}</Text>;
};

describe("useApi", () => {
  it("should fetch data successfully", async () => {
    const mockFn = jest.fn().mockResolvedValue("mock data");

    render(<TestComponent fn={mockFn} />);

    expect(screen.getByText("Loading...")).toBeTruthy();

    await waitFor(() =>
      expect(screen.getByText("Data: mock data")).toBeTruthy()
    );

    expect(mockFn).toHaveBeenCalled();
  });

  it("should handle error with custom message", async () => {
    const mockFn = jest.fn().mockRejectedValue(new Error("mock error"));

    render(<TestComponent fn={mockFn} />);

    expect(screen.getByText("Loading...")).toBeTruthy();

    await waitFor(() =>
      expect(screen.getByText("Error: mock error")).toBeTruthy()
    );

    expect(mockFn).toHaveBeenCalled();
  });

  it("should handle error with default message", async () => {
    const mockFn = jest.fn().mockRejectedValue({});

    render(<TestComponent fn={mockFn} />);

    expect(screen.getByText("Loading...")).toBeTruthy();

    await waitFor(() =>
      expect(screen.getByText("Error: An error occurred")).toBeTruthy()
    );

    expect(mockFn).toHaveBeenCalled();
  });

  it("should set loading state correctly", async () => {
    const mockFn = jest.fn().mockResolvedValue("mock data");

    render(<TestComponent fn={mockFn} />);

    expect(screen.getByText("Loading...")).toBeTruthy();

    await waitFor(() =>
      expect(screen.getByText("Data: mock data")).toBeTruthy()
    );

    expect(mockFn).toHaveBeenCalled();
  });
});
