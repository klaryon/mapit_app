import React from "react";
import { render } from "@testing-library/react-native";
import IndicatorActivity from "../IndicatorActivity";
import colors from "../../../../constants/colors";

describe("IndicatorActivity Component", () => {
  it("renders the ActivityIndicator with default props", () => {
    const { getByTestId } = render(<IndicatorActivity />);
    const activityIndicator = getByTestId("activity-indicator");

    expect(activityIndicator).toBeTruthy();
    expect(activityIndicator.props.size).toBe(0);
    expect(activityIndicator.props.color).toBe("");
  });

  it("renders the ActivityIndicator with custom props", () => {
    const customSize = "large";
    const customColor = colors.red;

    const { getByTestId } = render(
      <IndicatorActivity size={customSize} color={customColor} />
    );
    const activityIndicator = getByTestId("activity-indicator");

    expect(activityIndicator.props.size).toBe(customSize);
    expect(activityIndicator.props.color).toBe(customColor);
  });
});
