import AccountCreatedScreen from "@/features/auth/screens/account-created.screen";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Account Created" };

function AccountCreated() {
  return <AccountCreatedScreen />;
}

export default AccountCreated;
