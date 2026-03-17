import axios from "axios";

export const api = axios.create({
  baseURL: "https://box-backend-e0wz.onrender.com/",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const skipRetryUrls = ["/auth/refresh", "/auth/me"];
    if (skipRetryUrls.some((url) => originalRequest.url?.includes(url))) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          "https://box-backend-e0wz.onrender.com/auth/refresh",
          {},
          { withCredentials: true },
        );

        const newToken = response.data.data.accessToken;
        api.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch {
        delete api.defaults.headers.common["Authorization"];
        if (window.location.pathname !== "/signin") {
          window.location.href = "/signin";
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
