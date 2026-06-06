import React, { useState } from "react";
import { Register } from "../auth.types";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "./auth.hooks";

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
  const [errorPayload, setErrorPayload] = useState<Partial<Register>>({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
  });
  const { mutate, isPending } = useRegisterMutation((data: any) => {
    router.replace("/verify-account");
  });

  const handleCreateUser = () => {
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
  };
  const validateForm = () => {};
  return {
    handleCreateUser,
    userPayload,
    errorPayload,
    setErrorPayload,
    handleUpdateUserPayload,
    isPending,
  };
};
