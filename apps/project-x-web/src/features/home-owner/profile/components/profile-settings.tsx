import { Container, Text } from "@repo/ui";
import { SettingsAction } from "./settings-action";

type ProfileSettingsProps = {
  onChangePassword: () => void;
  onDeleteProfile: () => void;
  onDeleteAccount: () => void;
};

export function ProfileSettings({
  onChangePassword,
  onDeleteProfile,
  onDeleteAccount,
}: ProfileSettingsProps) {
  return (
    <Container
      as="aside"
      className="rounded-[15px] border border-line bg-surface p-3 [&_h2]:mt-0 [&_h2]:mb-[11px] [&_h2]:border-b [&_h2]:border-line [&_h2]:px-[9px] [&_h2]:pt-[5px] [&_h2]:pb-[13px] [&_h2]:text-[13px] [&_h2]:leading-[18px] [&_h2]:font-medium"
    >
      <Text as="h2" variant="body-sm">
        Settings
      </Text>
      {/* <SettingsAction kind="key" onClick={onChangePassword}>
        Change Password
      </SettingsAction>
      <SettingsAction kind="user" onClick={onDeleteProfile}>
        Delete Profile
      </SettingsAction>
      <SettingsAction kind="trash" onClick={onDeleteAccount}>
        Delete Account
      </SettingsAction> */}
    </Container>
  );
}
