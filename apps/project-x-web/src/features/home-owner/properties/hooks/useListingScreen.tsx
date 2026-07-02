"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    const currentStepVariations = stepVariation[activeStep] || 1;
    
    if (activeSubStep < currentStepVariations) {
      setActiveSubStep((prev) => prev + 1);
    } else {
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
    const nextParams = new URLSearchParams(params.toString());

    if (!params.get("step")) {
      nextParams.set("step", "1");
      nextParams.set("substep", "1");
      const nextQueryString = nextParams.toString();

      if (nextQueryString !== params.toString()) {
        router.replace(`/properties/list-property?${nextQueryString}`);
      }
    } else {
      nextParams.set("step", String(activeStep));
      nextParams.set("substep", String(activeSubStep));
      const nextQueryString = nextParams.toString();

      if (nextQueryString !== params.toString()) {
        router.replace(`/properties/list-property?${nextQueryString}`);
      }
    }
  }, [activeStep, activeSubStep, params, router]);

  return { activeStep, handleNextStep, handlePrevStep, activeSubStep };
};
