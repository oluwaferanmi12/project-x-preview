import React from "react";
import { Container } from "@/components/common/container/container";
import { Input } from "@/components/common/input/input";
import { Text } from "@/components/common/text/text";
import EyeOpenIcon from "@/assets/svgs/eye-opened.svg";
import EyeCloseIcon from "@/assets/svgs/eye-closed.svg";

export default function CreateNewPassword() {
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Create a new password 🔑
      </Text>
      <Text as="p" variant="body-md" tone="secondary" className="mt-2 mb-6">
        A new password is needed to secure your account
      </Text>
      <Container as="form" className="mt-6">
        <Input
          type="password"
          label="New Password"
          placeholder="Enter your new password"
          showPasswordIcon={<EyeOpenIcon />}
          hidePasswordIcon={<EyeCloseIcon />}
        />
        <Input
          type="password"
          label="Confirm Password"
          placeholder="Confirm your new password"
          showPasswordIcon={<EyeOpenIcon />}
          hidePasswordIcon={<EyeCloseIcon />}
        />
      </Container>
    </>
  );
}
