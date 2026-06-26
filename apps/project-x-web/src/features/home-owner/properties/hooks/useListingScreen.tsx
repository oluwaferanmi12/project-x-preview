"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useGetDraftListing } from "./property.hook";
import { resolveDropOffStep } from "../utils/property.utils";

export const useListingScreen = () => {
  const params = useSearchParams();
  const router = useRouter();

  const propertyId = params.get("propertyId");
  const stepFromUrl = Number(params.get("step"));

  const { data: payload, isLoading: isDraftLoading } = useGetDraftListing(propertyId);

  const dropOffStep = propertyId && payload ? resolveDropOffStep(payload) : null;

  const didSeedStep = useRef(false);
  const [activeStep, setActiveStep] = useState(stepFromUrl || 1);
  const [activeSubStep, setActiveSubStep] = useState(
    Number(params.get("substep")) || 1,
  );

  // Only runs when there's a propertyId — seeds activeStep from the resolved drop-off
  useEffect(() => {
    if (!propertyId) return;
    if (!didSeedStep.current && dropOffStep && !stepFromUrl) {
      setActiveStep(dropOffStep);
      didSeedStep.current = true;
    }
  }, [dropOffStep]);

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

  // If no propertyId, always ready. If there is one, wait for the draft to load first.
  const isReadyToSync = !propertyId || !isDraftLoading;

  useEffect(() => {
    if (!isReadyToSync) return;

    const base = "/properties/list-property";
    const id = propertyId ? `&propertyId=${propertyId}` : "";
    if (!params.get("step")) {
      router.replace(`${base}?step=${activeStep}&substep=${activeSubStep}${id}`);
    } else {
      router.push(`${base}?step=${activeStep}&substep=${activeSubStep}${id}`);
    }
  }, [activeStep, activeSubStep, isReadyToSync]);

  return {
    activeStep,
    handleNextStep,
    handlePrevStep,
    activeSubStep,
    payload,
    dropOffStep,
    isDraftLoading,
  };
};
