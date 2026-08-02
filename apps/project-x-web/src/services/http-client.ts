import axios from "axios";
import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { useAuthStore } from "@/store/useAuthStore";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

// ─── Token helpers (read from Zustand store, not localStorage directly) ───────

const getAccessToken = () => useAuthStore.getState().accessToken;
const getRefreshToken = () => useAuthStore.getState().refreshToken;

// ─── Request interceptors ─────────────────────────────────────────────────────

const attachBearerToken = (config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const attachRefreshBearerToken = (config: InternalAxiosRequestConfig) => {
  const token = getRefreshToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

// ─── Axios instances ──────────────────────────────────────────────────────────

export const apiClient = axios.create({
  baseURL: baseURL || undefined,
});

export const refreshClient = axios.create({
  baseURL: baseURL || undefined,
});

// ─── Refresh token queue (handles concurrent 401s) ───────────────────────────

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null,
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// ─── Response interceptor with auto token refresh on 401 ─────────────────────

const handleResponseSuccess = (response: AxiosResponse) => response;

const handleResponseError = async (error: AxiosError) => {
  const originalRequest = error.config as InternalAxiosRequestConfig & {
    _retry?: boolean;
  };

  if (error.response?.status === 401 && !originalRequest._retry) {
    if (isRefreshing) {
      // Queue up subsequent 401s while a refresh is in flight
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return apiClient(originalRequest);
        })
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    const {
      user,
      refreshToken,
      setAuth,
      logout: clearAuth,
    } = useAuthStore.getState();

    try {
      const response = await refreshClient.post(
        "/auth/refresh",
        {},
        { headers: { Authorization: `Bearer ${refreshToken}` } },
      );

      const { accessToken: newAccessToken} =
        response.data;

      setAuth(
        user!,
        newAccessToken,
      );
      processQueue(null, newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return apiClient(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError as AxiosError, null);
      clearAuth();
      if (typeof window !== "undefined") {
        window.location.replace("/login");
      }
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  }

  return Promise.reject(error.response?.data);
};

// ─── Wire interceptors ────────────────────────────────────────────────────────

apiClient.interceptors.request.use(attachBearerToken);
apiClient.interceptors.response.use(handleResponseSuccess, handleResponseError);

refreshClient.interceptors.request.use(attachRefreshBearerToken);
refreshClient.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError,
);

export const getStoredAccessToken = getAccessToken;
export const getStoredRefreshToken = getRefreshToken;
