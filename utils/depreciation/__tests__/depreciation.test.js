import { calculateDepreciation } from "../depreciation";

describe("calculateDepreciation", () => {
  it("should calculate depreciation correctly for the same year", () => {
    const purchaseValue = 1000;
    const purchaseDate = new Date().toISOString();
    const result = calculateDepreciation(purchaseValue, purchaseDate);
    expect(result).toBe("1000.00");
  });

  it("should calculate depreciation correctly for one year", () => {
    const purchaseValue = 1000;
    const purchaseDate = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    ).toISOString();
    const result = calculateDepreciation(purchaseValue, purchaseDate);
    expect(result).toBe("500.00");
  });

  it("should handle invalid dates", () => {
    const purchaseValue = 1000;
    const purchaseDate = "invalid-date";
    const result = calculateDepreciation(purchaseValue, purchaseDate);
    expect(result).toBe("NaN");
  });
});
