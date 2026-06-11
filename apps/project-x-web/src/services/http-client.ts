import axios from "axios";
import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const accessTokenKey = "access_token";
const refreshTokenKey = "refresh_token";

const getStoredValue = (key: string) => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(key);
};

const getAccessToken = () => getStoredValue(accessTokenKey);
const getRefreshToken = () => getStoredValue(refreshTokenKey);

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

const handleResponseSuccess = (response: AxiosResponse) => response;
const handleResponseError = (error: AxiosError) => Promise.reject(error);

export const apiClient = axios.create({
  baseURL: baseURL || undefined,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const refreshClient = axios.create({
  baseURL: baseURL || undefined,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(attachBearerToken);
apiClient.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError,
);
refreshClient.interceptors.request.use(attachRefreshBearerToken);
refreshClient.interceptors.response.use(
  handleResponseSuccess,
  handleResponseError,
);

export const getStoredAccessToken = getAccessToken;
export const getStoredRefreshToken = getRefreshToken;
