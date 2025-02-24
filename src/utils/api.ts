import axios from "axios";

const apiUrl =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3000";

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
