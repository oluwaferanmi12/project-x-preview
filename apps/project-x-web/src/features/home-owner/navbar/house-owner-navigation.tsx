"use client";

import { Navbar } from "./navbar";
import { MobileNavbar } from "./mobile-navbar";
import { useRouter } from "next/navigation";

export const HouseOwnerNavigation = () => {
  const router = useRouter();

  return (
    <>
      <MobileNavbar onNavigate={(href) => router.push(href)} />

      <Navbar  onNavigate={(href) => router.push(href)} />
    </>
  );
};
