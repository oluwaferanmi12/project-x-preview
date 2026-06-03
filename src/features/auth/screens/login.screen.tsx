import Link from "next/link";
import GoogleIcon from "@/assets/svgs/google-icon.svg";
import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { Input } from "@repo/ui";
import { Text } from "@repo/ui";

export function LoginScreen() {
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Welcome back 👋
      </Text>
      <Text as="p" variant="body-md" tone="secondary" className="mt-2 mb-6">
        Log in to your account to continue.
      </Text>
      <Container className="my-8" as="form">
        <Input
          label="Email Address / Phone Number"
          placeholder="Enter your email or phone no"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
        <Container className="flex justify-end">
          <Link href="/forgot-password">
            <Button
              className="relative -top-3 -right-2 text-right"
              variant="transparent"
            >
              Forgot Password
            </Button>
          </Link>
        </Container>
        <Container as="div">
          <Button fullWidth variant="primary">
            Log In
          </Button>
        </Container>
        <Button
          fullWidth
          variant="muted"
          leftIcon={<GoogleIcon className="text-secondary" />}
          className="my-6 border border-line rounded-xl"
        >
          <Text as="span">Sign up with Google</Text>
        </Button>

        <Text className="text-center mx-auto" as="p" tone="primary" variant="body-sm">
          Don&apos;t have an account ?
          <Link href="/register">
            <Text as="span" variant="action-label" tone="s500">
              {" "}
              Sign up{" "}
            </Text>
          </Link>
        </Text>
      </Container>
    </>
  );
}
