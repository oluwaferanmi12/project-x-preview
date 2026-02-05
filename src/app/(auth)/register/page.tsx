import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import GoogleIcon from "@/assets/svgs/google-icon.svg";
import { Input } from "@/components/common/input/input";
import EyeOpenIcon from "@/assets/svgs/eye-opened.svg";
import EyeCloseIcon from "@/assets/svgs/eye-closed.svg";
import Button from "@/components/common/button/button";

function Register() {
  return (
    <>
      <Text as="p" variant="h3" tone="primary">
        Register for account
      </Text>
      <Button
        fullWidth
        variant="muted"
        leftIcon={<GoogleIcon className="text-secondary" />}
        className="mt-6 border border-line rounded-xl"
      >
        <Text as="span">Sign up with Google</Text>
      </Button>
      <Container className="flex gap-6 mt-6 mb-8 w-full">
        <Container className="border-b border-line relative -top-2 w-full"></Container>
        <Text variant="body-xs">or</Text>
        <Container className="border-b border-line w-full relative -top-2"></Container>
      </Container>
      <Container className="mb-6" as="form">
        <Container as="div" className="flex gap-8">
          <Input label="First Name" placeholder="Enter your first name" />
          <Input label="Last Name" placeholder="Enter your last name" />
        </Container>
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          showPasswordIcon={<EyeOpenIcon />}
          hidePasswordIcon={<EyeCloseIcon />}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          showPasswordIcon={<EyeOpenIcon className="text-secondary" />}
          hidePasswordIcon={<EyeCloseIcon className="text-secondary" />}
        />
        <Button fullWidth className="mt-2" variant="p300">
          Create Account
        </Button>
      </Container>
      <Text className="w-1/2 text-center mx-auto" as="p" variant="body-sm">
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

export default Register;
