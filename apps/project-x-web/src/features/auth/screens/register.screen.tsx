"use client";
import { GoogleIcon } from "@repo/icons";
import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { Input } from "@repo/ui";
import { Text } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useRegister } from "../hooks/useAuth";
import { PasswordRequirement } from "../components/password-requirement";

export function RegisterScreen() {
  const router = useRouter();
  const {
    handleCreateUser,
    userPayload,
    errorPayload,
    setErrorPayload,
    handleUpdateUserPayload,
    isPending,
    passwordRules,
  } = useRegister();
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Set up your account
      </Text>

      <Container
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateUser();
        }}
        className="my-6 "
        as="form"
      >
        <Container as="div" className="flex flex-col sm:flex-row sm:gap-8">
          <Input
            label="First Name"
            placeholder="Enter your first name"
            error={errorPayload.firstName}
            onChange={({ target }) => {
              handleUpdateUserPayload("firstName", target.value);
            }}
          />
          <Input
            label="Last Name"
            error={errorPayload.lastName}
            onChange={({ target }) => {
              handleUpdateUserPayload("lastName", target.value);
            }}
            placeholder="Enter your last name"
          />
        </Container>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          error={errorPayload.email}
          onChange={({ target }) => {
            handleUpdateUserPayload("email", target.value);
          }}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          error={errorPayload.phoneNumber}
          onChange={({ target }) => {
            handleUpdateUserPayload("phoneNumber", target.value);
          }}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errorPayload.password}
          onChange={({ target }) => {
            handleUpdateUserPayload("password", target.value);
          }}
        />
        <Container className="flex items-center flex-wrap mb-4 gap-2">
          <PasswordRequirement value="Lowercase" active={passwordRules.hasLowercase} />
          <PasswordRequirement value="Uppercase" active={passwordRules.hasUppercase} />
          <PasswordRequirement value="Number" active={passwordRules.hasNumber} />
          <PasswordRequirement value="8 characters" active={passwordRules.hasMinLength} />
          <PasswordRequirement value="Special characters" active={passwordRules.hasSpecialChar} />
        </Container>
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          error={errorPayload.confirmPassword}
          onChange={({ target }) => {
            handleUpdateUserPayload("confirmPassword", target.value);
          }}
        />
        <Button
          loading={isPending}
          fullWidth
          className="mt-2"
          variant="primary"
        >
          Create Account
        </Button>
      </Container>
      <Text
        className="w-1/2 text-center mx-auto"
        as="p"
        tone="primary"
        variant="body-sm"
      >
        By continuing you agree to our{" "}
        <Text as="span" variant="action-label" tone="s500">
          {" "}
          Terms of Use{" "}
        </Text>{" "}
        and{" "}
        <Text as="span" variant="action-label" tone="s500">
          {" "}
          Privacy Policy.{" "}
        </Text>{" "}
      </Text>
    </>
  );
}
