"use client";
import { useFormStore } from "@/store/useFormStore";
import React, { useState } from "react";

export const useListingScreen = () => {
  const { formData, updateForm } = useFormStore();

  return { formData, updateForm };
};
