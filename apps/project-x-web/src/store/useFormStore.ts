import { FormData } from "@/features/home-owner/properties/forms/form.types";
import { useState } from "react";

export const useFormStore = () => {
  const [formData, setFormData] = useState<FormData>({});

  const updateForm = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return { formData, updateForm };
};
