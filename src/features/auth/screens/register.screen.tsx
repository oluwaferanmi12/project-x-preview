"use client";
import GoogleIcon from "@/assets/svgs/google-icon.svg";
import Button from "@/components/common/button/button";
import { Container } from "@/components/common/container/container";
import { Input } from "@/components/common/input/input";
import { Text } from "@/components/common/text/text";
import { useRouter } from "next/navigation";
import { useRegister } from "../hooks/useAuth";

export function RegisterScreen() {
  const router = useRouter();
  const {
    handleCreateUser,
    userPayload,
    errorPayload,
    setErrorPayload,
    handleUpdateUserPayload,
    isPending,
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
