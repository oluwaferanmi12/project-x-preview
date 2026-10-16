"use client";

import { Container, Text } from "@repo/ui";

import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import type { DialogType } from "../types/profile.types";
import { ActiveBadge } from "../components/active-badge";
import { InfoSection } from "../components/info-section";
import { InfoItem } from "../components/info-item";
import { ProfileSummary } from "../components/profile-summary";
import { ProfileSettings } from "../components/profile-settings";
import { ProfileDialog } from "../components/profile-dialog";

export const ProfileScreen = () => {
  const { user } = useAuthStore();
  const [dialog, setDialog] = useState<DialogType | null>(null);

  const firstName = user?.firstName || "Micheal";
  const lastName = user?.lastName || "Scofield";
  const email = user?.email || "mike@mail.com";
  const phone = user?.phoneNumber || "+234 801 234 5678";

  const profileValues = {
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    profileName: `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim(),
    phoneNumber: (user?.phoneNumber ?? "")
      .replace(/\s+/g, "")
      .replace(/^(\+?234|0)/, ""),
  };

  const handleEditProfile = () => {
    setDialog("profile");
  };

  const handleChangePassword = () => {
    setDialog("password");
  };

  const handleDeleteProfile = () => {
    setDialog("delete-profile");
  };

  const handleDeleteAccount = () => {
    setDialog("delete-account");
  };

  const handleCloseDialog = () => {
    setDialog(null);
  };

  return (
    <Container
      as="main"
      className="min-h-[80vh] pt-7 pb-[38px] text-primary max-[640px]:pt-6 [&_button]:cursor-pointer [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-p300 [&_button:focus-visible]:outline-offset-[3px]"
    >
      <Text
        as="h1"
        variant="h3"
        className="mt-0 mb-12 text-[28px] leading-[1.25] font-bold max-[640px]:mb-7 max-[640px]:text-2xl"
      >
        Your Profile
      </Text>
      <Container className="grid grid-cols-[minmax(0,1fr)_264px] items-start gap-[22px] max-[900px]:grid-cols-[minmax(0,1fr)_230px] max-[900px]:gap-4 max-[640px]:grid-cols-1">
        <Container className="grid gap-4">
          <ProfileSummary
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
          <InfoSection title="Account Information" onEdit={handleEditProfile}>
            <InfoItem label="First Name">{firstName}</InfoItem>
            <InfoItem label="Last Name">{lastName}</InfoItem>
            <InfoItem label="Email Address">{email}</InfoItem>
            <InfoItem label="Profile Type">Agent</InfoItem>
            <InfoItem label="Profile Name">
              {firstName} {lastName}
            </InfoItem>
            <InfoItem label="Phone Number">{phone}</InfoItem>
            <InfoItem label="Date Created">5 Apr, 2026</InfoItem>
            <InfoItem label="Account Status">
              <ActiveBadge />
            </InfoItem>
          </InfoSection>
          <InfoSection title="Listing Information">
            <InfoItem label="Average Rating">4.6/5.0</InfoItem>
            <InfoItem label="Total Reviews">34</InfoItem>
            <InfoItem label="Total Comments">34</InfoItem>
            <InfoItem label="Total Property">100</InfoItem>
            <InfoItem label="Available Properties">34</InfoItem>
          </InfoSection>
        </Container>
        <ProfileSettings
          onChangePassword={handleChangePassword}
          onDeleteProfile={handleDeleteProfile}
          onDeleteAccount={handleDeleteAccount}
        />
      </Container>
      {dialog && (
        <ProfileDialog
          type={dialog}
          onClose={handleCloseDialog}
          profileValues={profileValues}
        />
      )}
    </Container>
  );
};
