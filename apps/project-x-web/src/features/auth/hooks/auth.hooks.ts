"use client";

import { useMutation } from "@tanstack/react-query";
import {
  forgotPasswordOtp,
  forgotPasswordReset,
  forgotPasswordVerifyOtp,
  generateOtp,
  getAuthenticatedUser,
  login,
  refreshToken,
  register,
  verifyEmail,
} from "../auth.service";
import { useAuthStore } from "@/store/useAuthStore";
import { ForgotPasswordReset, LoginResponse } from "../auth.types";
import { useToast } from "@repo/ui";

export const useRegisterMutation = (sc: (data: any) => void) => {
  const { show } = useToast();
  return useMutation({
    mutationFn: register,
    onSuccess: sc,
    onError: (error) => {
      show(
        "Registration failed",
        error instanceof Error ? error.message : "An error occurred",
        "error",
      );
    },
  });
};

export const useLoginMutation = (sc?: (data: LoginResponse) => void) => {
  const { login: loginStore } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data?.accessToken) {
        loginStore(data);
      }
      sc?.(data);
    },
  });
};

export const useRefreshTokenMutation = () =>
  useMutation({
    mutationFn: refreshToken,
  });

export const useGenerateOtpMutation = () =>
  useMutation({
    mutationFn: generateOtp,
  });

export const useVerifyEmailMutation = (sc: (data: any) => void) => {
  const { login } = useAuthStore();
  return useMutation({
    mutationFn: verifyEmail,
    onSuccess: (data) => {
      login(data);
      sc(data);
    },
  });
};

export const useForgotPasswordOtpMutation = (sc: (val: any) => void) =>
  useMutation({
    mutationFn: (email: string) => forgotPasswordOtp(email),
    onSuccess: sc,
  });

export const useForgotPasswordVerifyOtpMutation = (sc?: (data: any) => void) =>
  useMutation({
    mutationFn: (payload: { otp: string; email: string }) =>
      forgotPasswordVerifyOtp(payload),
    onSuccess: sc,
  });

export const useForgotPasswordResetMutation = (sc: (data: any) => void) =>
  useMutation({
    mutationFn: (payload: ForgotPasswordReset) => forgotPasswordReset(payload),
    onSuccess: sc,
  });

export const useGetAuthenticatedUserMutation = (sc: (data: any) => void) => {
  const { show } = useToast();
  return useMutation({
    mutationFn: getAuthenticatedUser,
    onSuccess: sc,
    onError: () => {
      show("Sign-in failed", "Could not retrieve your account details.", "error");
    },
  });
}
