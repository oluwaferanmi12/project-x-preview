import { apiClient } from "@/services";
import { ForgotPasswordReset, LoginResponse, Register } from "./auth.types";

export const register = async (payload: Register) => {
  const result = await apiClient.post("/auth/register", payload);
  return result.data;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const result = await apiClient.post("/auth/login", { email, password });
  return result.data.data;
};

export const refreshToken = async () => {
  const result = await apiClient.post("/auth/refresh", {});
  return result.data;
};

export const generateOtp = async () => {
  const result = await apiClient.post("/auth/generate/otp", {});
  return result.data;
};

export const verifyEmail = async ({
  otp,
  email,
}: {
  otp: string;
  email: string;
}) => {
  const result = await apiClient.post("/auth/verify/otp", { otp, email });
  return result.data.data;
};

export const forgotPasswordOtp = async (email: string) => {
  const result = await apiClient.post("/auth/forgot-password/otp", { email });
  return result.data;
};

export const forgotPasswordVerifyOtp = async (payload: {
  otp: string;
  email: string;
}) => {
  const result = await apiClient.post("/auth/forgot-password/verify", payload);
  return result.data;
};

export const forgotPasswordReset = async (payload: ForgotPasswordReset) => {
  const result = await apiClient.post("/auth/forgot-password/reset", payload);
  return result.data;
};
