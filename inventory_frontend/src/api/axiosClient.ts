import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

// 1. Create the base instance
const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api", 
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Request Interceptor: Automatically inject JWT Token
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Retrieve your token from localStorage or your preferred state management
    const token = localStorage.getItem("jwt_token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 3. Response Interceptor: Handle Global Error Codes (like 401)
axiosClient.interceptors.response.use(
  (response) => {
    // If the request succeeds, just return the response data layer directly
    return response;
  },
  (error: AxiosError) => {
    // Check if the server returned a response and if it's a 401 Unauthorized
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized request detected (401). Redirecting to login...");

      // Clear out the stale token so they aren't stuck in a loop
      localStorage.removeItem("jwt_token");

      // Redirect the user to the login screen natively
      window.location.href = "/login";
    }

    // Return the error back to the specific component catch block if they want to use it
    return Promise.reject(error);
  }
);

export default axiosClient;