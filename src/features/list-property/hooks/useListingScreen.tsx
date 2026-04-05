"use client";
import { useFormStore } from "@/store/useFormStore";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const useListingScreen = () => {
  const params = useSearchParams();
  const [activeStep, setActiveStep] = useState(
    Number(params.get("step")) ? Number(params.get("step")) : 1,
  );
  const [activeSubStep, setActiveSubStep] = useState(
    Number(params.get("substep")) ? Number(params.get("substep")) : 1,
  );

  const router = useRouter();
  const stepVariation: Record<number, number> = {
    1: 1,
    2: 3,
    3: 2,
    4: 2,
    5: 2,
    6: 3,
    7: 1,
  };

  const handleNextStep = () => {
    if (
      activeStep < Object.keys(stepVariation).length ||
      stepVariation[activeStep] < activeSubStep
    ) {
      if (activeSubStep < stepVariation[activeStep]) {
        setActiveSubStep((prev) => prev + 1);
        return;
      }
      setActiveStep((prev) => prev + 1);
      setActiveSubStep(1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1 || stepVariation[activeStep] < 1) {
      if (activeSubStep > 1) {
        setActiveSubStep((prev) => prev - 1);
        return;
      }
      setActiveSubStep(stepVariation[activeStep - 1]);
      setActiveStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!params.get("step")) {
      router.replace("/list-property?step=1&substep=1");
    } else {
      router.push(`/list-property?step=${activeStep}&substep=${activeSubStep}`);
    }
  }, [activeStep, activeSubStep]);

  return { activeStep, handleNextStep, handlePrevStep, activeSubStep };
};
