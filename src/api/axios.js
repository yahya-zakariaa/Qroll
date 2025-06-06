import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://azure-hawk-973666.hostingersite.com/api",
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default axiosInstance;
