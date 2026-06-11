import { apiClient } from "@/services";
import { Register } from "./auth.types";

export const register = async (payload: Register) => {
  const result = await apiClient.post("/auth/register", payload);
  return result.data;
};

export const login = async () => {
  const result = await apiClient.post("/auth/login", {});
  return result.data;
};

export const refreshToken = async () => {
  const result = await apiClient.post("/auth/refresh", {});
  return result.data;
};

export const generateOtp = async () => {
  const result = await apiClient.post("/auth/generate/otp", {});
  return result.data;
};

export const verifyEmail = async () => {
  const result = await apiClient.post("/auth/verify/otp", {});
  return result.data;
};

export const forgotPasswordOtp = async () => {
  const result = await apiClient.post("/auth/forgot-password/otp", {});
  return result.data;
};

export const forgotPasswordVerifyOtp = async () => {
  const result = await apiClient.post("/auth/forgot-password/verify", {});
  return result.data;
};

export const forgotPasswordReset = async () => {
  const result = await apiClient.post("/auth/forgot-password/reset", {});
  return result.data;
};
