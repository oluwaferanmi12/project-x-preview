"use client";

import { useMutation } from "@tanstack/react-query";
import {
  forgotPasswordOtp,
  forgotPasswordReset,
  forgotPasswordVerifyOtp,
  generateOtp,
  getAuthenticatedUser,
  login,
  logout,
  refreshToken,
  register,
  verifyEmail,
} from "../auth.service";
import { useAuthStore } from "@/store/useAuthStore";
import { ForgotPasswordReset, LoginResponse } from "../auth.types";
import { useRouter } from "next/navigation";

export const useRegisterMutation = (sc: (data: any) => void) =>
  useMutation({
    mutationFn: register,
    onSuccess: sc,
    meta: { errorTitle: "Registration failed" },
  });

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
    meta: { errorTitle: "Sign-in failed" },
  });
};

export const useRefreshTokenMutation = () =>
  useMutation({
    mutationFn: refreshToken,
    meta: { errorTitle: "Session refresh failed" },
  });

export const useGenerateOtpMutation = () =>
  useMutation({
    mutationFn: generateOtp,
    meta: { errorTitle: "Could not send verification code" },
  });

export const useVerifyEmailMutation = (sc: (data: any) => void) => {
  const { login } = useAuthStore();
  return useMutation({
    mutationFn: verifyEmail,
    onSuccess: (data) => {
      login(data);
      sc(data);
    },
    meta: { errorTitle: "Verification failed" },
  });
};

export const useForgotPasswordOtpMutation = (sc: (val: any) => void) =>
  useMutation({
    mutationFn: (email: string) => forgotPasswordOtp(email),
    onSuccess: sc,
    meta: { errorTitle: "Could not send reset code" },
  });

export const useForgotPasswordVerifyOtpMutation = (sc?: (data: any) => void) =>
  useMutation({
    mutationFn: (payload: { otp: string; email: string }) =>
      forgotPasswordVerifyOtp(payload),
    onSuccess: sc,
    meta: { errorTitle: "Verification failed" },
  });

export const useForgotPasswordResetMutation = (sc: (data: any) => void) =>
  useMutation({
    mutationFn: (payload: ForgotPasswordReset) => forgotPasswordReset(payload),
    onSuccess: sc,
    meta: { errorTitle: "Could not reset password" },
  });

export const useGetAuthenticatedUserMutation = (sc: (data: any) => void) =>
  useMutation({
    mutationFn: getAuthenticatedUser,
    onSuccess: sc,
    meta: { errorTitle: "Sign-in failed" },
  });

export const useLogout = (sc?: (data: any) => void) => {
  const router = useRouter();
  const { logout: logoutFn } = useAuthStore();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      logoutFn();
      router.replace("/login");
    },
    meta: { errorTitle: "Logout failed" },
  });
};
