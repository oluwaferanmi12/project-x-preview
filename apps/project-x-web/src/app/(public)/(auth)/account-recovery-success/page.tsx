import { AccountRecoveredSuccessScreen } from "@/features/auth/screens/account-recovered-success.screen";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Account Recovered" };

function AccountRecoverySuccess() {
  return <AccountRecoveredSuccessScreen />;
}

export default AccountRecoverySuccess;
