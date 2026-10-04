export type DialogType =
  "password" | "profile" | "delete-profile" | "delete-account";

export type ProfileFormValues = {
  firstName: string;
  lastName: string;
  profileName: string;
  phoneNumber: string;
};
