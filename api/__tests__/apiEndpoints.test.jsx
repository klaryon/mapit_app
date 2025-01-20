import apiClient from "../apiClient";
import { fetchBaseData, fetchDataById } from "../apiEndpoints";

jest.mock("../apiClient");

describe("fetchBaseData and fetchDataById", () => {
  it("should fetch base data and return response data", async () => {
    const mockData = [
      { id: "MOTO_A", modelo: "AVR123" },
      { id: "MOTO_B", modelo: "ADV750" },
    ];
    apiClient.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchBaseData();

    expect(apiClient.get).toHaveBeenCalledWith("/motos");
    expect(result).toEqual(mockData);
  });

  it("should fetch data by Id and return response data", async () => {
    const mockData = { id: "MOTO_A", modelo: "AVR123" };
    const mockId = "MOTO_A";
    apiClient.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchDataById(mockId);

    expect(apiClient.get).toHaveBeenCalledWith(`/motos/${mockId}`);
    expect(result).toEqual(mockData);
  });
});
