"use client";

import { Navbar, MobileNavbar } from "@repo/ui";
import { useRouter } from "next/navigation";

export const HouseOwnerNavigation = () => {
  const router = useRouter();

  return (
    <>
      <MobileNavbar
        userName="Micheal Scofield"
        userRole="Agent"
        userInitials="MS"
        onNavigate={(href) => router.push(href)}
      />

      <Navbar
        userInitials="MS"
        onNavigate={(href) => router.push(href)}
      />
    </>
  );
};