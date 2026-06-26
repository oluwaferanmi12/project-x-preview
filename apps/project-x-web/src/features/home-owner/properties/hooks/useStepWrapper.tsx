import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const useStepWrapper = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialStep = Number(searchParams.get("step")) ?? 1;

  useEffect(() => {
    if (!searchParams.get("step")) {
      //   const step = searchParams.get("step");
      router.replace("/properties/list-property?step=1");
    }
  }, [searchParams, router]);
  return;
};
