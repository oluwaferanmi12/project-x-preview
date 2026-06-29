"use client";

import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { Input } from "@repo/ui";
import { Text } from "@repo/ui";
import { useCreateNewPassword } from "../hooks/useAuth";
import { PasswordRequirement } from "../components/password-requirement";

export function CreateNewPasswordScreen() {
  const {
    setPayload,
    payload,
    isPending,
    handleCreateNewPassword,
    errors,
    passwordRules,
  } = useCreateNewPassword();
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Create a new password 🔑
      </Text>
      <Text as="p" variant="body-md" tone="secondary" className="mt-2 mb-6">
        A new password is needed to secure your account
      </Text>
      <Container
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateNewPassword();
        }}
        as="form"
        className="mt-6"
      >
        <Input
          type="password"
          label="New Password"
          placeholder="Enter your new password"
          value={payload.newPassword}
          error={errors.newPassword}
          onChange={(e) =>
            setPayload({ ...payload, newPassword: e.target.value })
          }
        />
        <Container className="flex items-center flex-wrap mb-4 gap-2">
          <PasswordRequirement value="Lowercase" active={passwordRules.hasLowercase} />
          <PasswordRequirement value="Uppercase" active={passwordRules.hasUppercase} />
          <PasswordRequirement value="Number" active={passwordRules.hasNumber} />
          <PasswordRequirement value="8 characters" active={passwordRules.hasMinLength} />
          <PasswordRequirement value="Special characters" active={passwordRules.hasSpecialChar} />
        </Container>
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm your new password"
          value={payload.confirmNewPassword}
          error={errors.confirmNewPassword}
          onChange={(e) =>
            setPayload({ ...payload, confirmNewPassword: e.target.value })
          }
        />
        <Container>
          <Button disabled={isPending} loading={isPending} fullWidth>
            Create Password
          </Button>
        </Container>
      </Container>
    </>
  );
}
