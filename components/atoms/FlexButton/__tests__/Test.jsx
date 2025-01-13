import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FlexButton from "../FlexButton";
import styles from "../Styles";

describe("FlexButton Component", () => {
  it("renders flex button with default props", () => {
    const { getByText } = render(<FlexButton />);
    const buttonText = getByText("");

    expect(buttonText).toBeTruthy();
  });

  it("renders flex button with the correct title", () => {
    const title = "Click Me";
    const { getByText } = render(<FlexButton title={title} />);
    const buttonText = getByText(title);

    expect(buttonText).toBeTruthy();
  });

  it("applies primary styles by default flex button", () => {
    const { getByText } = render(<FlexButton title="Primary Button" />);
    const buttonText = getByText("Primary Button");

    expect(buttonText.props.style).toEqual(styles.buttonPrimaryText);
  });

  it("applies secondary styles when type is 'secondary' flex button", () => {
    const { getByText } = render(
      <FlexButton title="Secondary Button" type="secondary" />
    );
    const buttonText = getByText("Secondary Button");

    expect(buttonText.props.style).toEqual(styles.buttonSecondaryText);
  });

  it("triggers onPress when pressed flex button", () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <FlexButton title="Press Me" onPress={mockOnPress} />
    );
    const button = getByText("Press Me");

    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
