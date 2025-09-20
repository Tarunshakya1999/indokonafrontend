import axios from "axios";

const baseURL = "https://indokonabackend-1.onrender.com";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

// ✅ Request interceptor (access token add karega)
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("access");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor (agar access token expire ho gaya to refresh karega)
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh");
        const response = await axios.post(`${baseURL}/api/token/refresh/`, {
          refresh: refreshToken,
        });

        localStorage.setItem("access", response.data.access);

        // retry request with new token
        originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        console.error("Refresh token expired, please login again.");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
