import type { ChangeEvent } from "react";
import { Container, Input } from "@repo/ui";
import { PasswordRequirement } from "@/features/auth/components/password-requirement";
import { passwordRequirements } from "../profile.constants";

type ChangePasswordFieldsProps = {
  password: string;
  onPasswordChange: (value: string) => void;
};

export function ChangePasswordFields({
  password,
  onPasswordChange,
}: ChangePasswordFieldsProps) {
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(event.target.value);
  };

  return (
    <>
      <Input
        label="Current Password"
        aria-label="Current Password"
        name="currentPassword"
        type="password"
        required
        placeholder="Enter your current password"
        autoComplete="current-password"
      />
      <Input
        label="New Password"
        aria-label="New Password"
        name="newPassword"
        type="password"
        required
        placeholder="Enter your new password"
        autoComplete="new-password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Container className="flex flex-wrap gap-2">
        {passwordRequirements.map(([label, pattern]) => (
          <PasswordRequirement
            key={label}
            value={label}
            active={pattern.test(password)}
          />
        ))}
      </Container>
    </>
  );
}
