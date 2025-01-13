import apiClient from "./apiClient";

export const fetchBaseData = async () => {
  const response = await apiClient.get("/motos");
  return response.data;
};

export const fetchDataById = async (id) => {
  const response = await apiClient.get(`/motos/${id}`);
  return response.data;
};
