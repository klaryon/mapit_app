import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fake.prod.mapit.me",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
