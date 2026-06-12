"use client";

import { isValidEmail } from "@/utils/validation";
import {
  useForgotPasswordOtpMutation,
  useForgotPasswordResetMutation,
  useForgotPasswordVerifyOtpMutation,
  useGetAuthenticatedUserMutation,
  useLoginMutation,
} from "./auth.hooks";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyEmailMutation } from "./auth.hooks";
import { Register } from "../auth.types";
import { useRegisterMutation } from "./auth.hooks";
import { useAuthStore } from "@/store/useAuthStore";
import { useToast } from "@repo/ui";

type ErrorPayload = Partial<Register> & { confirmPassword?: string };

export type VerifyAccountErrors = {
  otp?: string;
  otpMedium?: string;
};

export type LoginErrors = {
  email?: string;
  password?: string;
};

export const useLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login: loginStore, setAuth } = useAuthStore();
  const { show } = useToast();

  const { mutate, isPending } = useLoginMutation((data) => {
    if (!data.userResponse.isEmailVerified) {
      router.push(
        `/verify-account?email=${encodeURIComponent(data.userResponse.email)}`,
      );
    }
  });

  const { mutate: fetchAuthenticatedUser, isPending: googleAuthLoading } =
    useGetAuthenticatedUserMutation((user) => {
      // Only now — after user details are confirmed — do we fully authenticate
      setAuth(user, useAuthStore.getState().accessToken!);
      router.replace("/");
    });

  const [payload, setPayload] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<LoginErrors>({});

  // Handle social sign-in redirect — server sends back /login?token=<jwt>
  // or /login?oauth_error=true&message=<reason> on failure
  useEffect(() => {
    const oauthError = searchParams.get("oauth_error");
    const errorMessage = searchParams.get("message");

    if (oauthError === "true") {
      show(
        "Sign-in failed",
        errorMessage ? decodeURIComponent(errorMessage) : "Could not sign in with your social account.",
        "error",
      );
      // Clean the URL so the params don't persist and don't re-trigger on re-render
      router.replace("/login");
      return;
    }

    const token = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    if (!token) return;
    try {
      // Only set the token — NOT isAuthenticated, so the guard doesn't trigger yet
      useAuthStore.setState({ accessToken: token, refreshToken });
      // Fetch full user details — setAuth (which sets isAuthenticated: true) only
      // runs in the success callback above, after the server confirms the user
      fetchAuthenticatedUser();
    } catch {
      show("Sign-in failed", "Could not process the sign-in token.", "error");
    }
  }, [searchParams]);

  const handleSignInWithGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_PLAIN_BASE_URL}/oauth2/authorization/google`;
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: LoginErrors = {};

    if (!payload.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(payload.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!payload.password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    mutate({ email: payload.email, password: payload.password });
  };

  return {
    handleLogin,
    isPending,
    setPayload,
    payload,
    errors,
    handleSignInWithGoogle,
    googleAuthLoading,
  };
};

export const useVerifyAccount = (forgotPassword?: boolean) => {
  const router = useRouter();
  const { mutate, isPending } = useVerifyEmailMutation(() => {
    router.replace("/account-created");
  });
  const { mutate: forgotPasswordMutate, isPending: forgotPasswordIsPending } =
    useForgotPasswordVerifyOtpMutation(() => {
      router.replace(
        `/create-new-password?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`,
      );
    });
  const searchParams = useSearchParams();
  const email = decodeURIComponent(searchParams.get("email") ?? "");
  const [errors, setErrors] = useState<VerifyAccountErrors>({});
  const [otp, setOtp] = useState("");

  const handleVerifyAccount = () => {
    const newErrors: VerifyAccountErrors = {};

    if (!otp || !/^\d{6}$/.test(otp)) {
      newErrors.otp = "OTP must be exactly 6 digits.";
    }

    if (!email) {
      newErrors.otpMedium = "Email is missing from the link.";
    } else if (!isValidEmail(email)) {
      newErrors.otpMedium = "The email in the link is invalid.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (forgotPassword) {
      forgotPasswordMutate({ otp, email });
    } else {
      mutate({ otp, email });
    }
  };

  return {
    handleVerifyAccount,
    isPending: isPending || forgotPasswordIsPending,
    errors,
    email,
    setOtp,
  };
};

export const useRegister = () => {
  const router = useRouter();
  const [userPayload, setUserPayload] = useState<
    Register & { confirmPassword: string }
  >({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  });
  const [errorPayload, setErrorPayload] = useState<ErrorPayload>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  });
  const { mutate, isPending } = useRegisterMutation((data: any) => {
    router.replace(
      `/verify-account?email=${encodeURIComponent(userPayload.email)}`,
    );
  });

  const validateForm = (): boolean => {
    const errors: ErrorPayload = {};

    if (!userPayload.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!userPayload.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!userPayload.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userPayload.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!userPayload.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(userPayload.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    if (!userPayload.password) {
      errors.password = "Password is required";
    } else if (userPayload.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!userPayload.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (userPayload.password !== userPayload.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrorPayload(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreateUser = () => {
    if (!validateForm()) return;
    mutate(userPayload);
  };

  const handleUpdateUserPayload = (
    field: keyof (Register & { confirmPassword: string }),
    value: string,
  ) => {
    setUserPayload((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrorPayload((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  return {
    handleCreateUser,
    userPayload,
    errorPayload,
    setErrorPayload,
    handleUpdateUserPayload,
    isPending,
  };
};

export const useForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useForgotPasswordOtpMutation(() => {
    router.push("/forgot-password-verify?email=" + encodeURIComponent(email));
  });
  const handleForgotPassword = () => {
    mutate(email);
  };
  return {
    setEmail,
    email,
    handleForgotPassword,
    isPending,
  };
};

export const useCreateNewPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = decodeURIComponent(searchParams.get("email") ?? "");
  const otp = decodeURIComponent(searchParams.get("otp") ?? "");
  const { mutate, isPending } = useForgotPasswordResetMutation(() => {
    router.replace("/account-recovery-success");
  });
  const [payload, setPayload] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const handleCreateNewPassword = () => {
    mutate({ ...payload, email, otp });
  };
  return {
    payload,
    setPayload,
    handleCreateNewPassword,
    isPending,
  };
};
