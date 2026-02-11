import axios from "axios";

export const api = axios.create({
  baseURL: "https://box-backend-l8sq.onrender.com/storage",
});

const publicEndpoints = ["/users", "/auth/login"];

api.interceptors.request.use(
  (config) => {
    const isPublicEndpoint = publicEndpoints.some((endpoint) =>
      config.url.startsWith(endpoint),
    );

    const token = localStorage.getItem("authToken");

    if (!isPublicEndpoint && !token) {
      return Promise.reject(new Error("Không có token, không thể truy cập"));
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Xóa token nếu server trả 401
      localStorage.removeItem("authToken");
    }
    return Promise.reject(error);
  },
);

export default api;
