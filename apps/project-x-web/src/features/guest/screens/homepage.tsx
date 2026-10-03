"use client";
import { Container } from "@repo/ui";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { HomeBanner } from "../components/homepage/home-banner";

function HomePage() {
  return (
    <Container>
      <HomeBanner />
    </Container>
  );
}

export default HomePage;
