import { useMutation } from "@tanstack/react-query";
import {
  forgotPasswordOtp,
  forgotPasswordReset,
  forgotPasswordVerifyOtp,
  generateOtp,
  login,
  refreshToken,
  register,
  verifyEmail,
} from "../auth.service";

export const useRegisterMutation = (sc: (data: any) => void) =>
  useMutation({
    mutationFn: register,
    onSuccess: sc,
  });

export const useLoginMutation = () =>
  useMutation({
    mutationFn: login,
  });

export const useRefreshTokenMutation = () =>
  useMutation({
    mutationFn: refreshToken,
  });

export const useGenerateOtpMutation = () =>
  useMutation({
    mutationFn: generateOtp,
  });

export const useVerifyEmailMutation = () =>
  useMutation({
    mutationFn: verifyEmail,
  });

export const useForgotPasswordOtpMutation = () =>
  useMutation({
    mutationFn: forgotPasswordOtp,
  });

export const useForgotPasswordVerifyOtpMutation = () =>
  useMutation({
    mutationFn: forgotPasswordVerifyOtp,
  });

export const useForgotPasswordResetMutation = () =>
  useMutation({
    mutationFn: forgotPasswordReset,
  });
