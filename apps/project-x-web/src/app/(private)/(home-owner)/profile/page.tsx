import { ProfileScreen } from "@/features/home-owner/profile/screens/profile-screen";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profile" };

export default function ProfilePage() {
  return <ProfileScreen />;
}