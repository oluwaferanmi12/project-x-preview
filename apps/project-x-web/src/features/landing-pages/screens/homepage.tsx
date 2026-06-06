"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);
  return <></>;
}

export default HomePage;
