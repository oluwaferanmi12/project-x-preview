"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, CloseIcon, LogoPlaceholderIcon } from "@repo/icons";
import { Button, Container, Text } from "@repo/ui";
import { ModalOverlay } from "./modal-overlay";

export const LoginRequiredModal = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();

  return (
    <ModalOverlay
      onClose={onClose}
      label="Login required"
      className="flex items-center justify-center bg-primary/60 p-4"
    >
      <Container className="relative grid max-h-full w-full max-w-200 grid-cols-1 overflow-auto rounded-2xl bg-surface md:grid-cols-2">
        <Container className="relative h-44 md:h-auto md:min-h-107">
          <Image
            src="/guest-signup-modal-image.jpg"
            alt=""
            fill
            sizes="400px"
            className="object-cover object-top"
          />
          <Button
            variant="surface"
            shorter
            aria-label="Close"
            onClick={onClose}
            className="absolute left-4 top-4 !h-9 !w-9 !rounded-lg !bg-muted !p-0 !text-primary hover:!bg-muted"
          >
            <CloseIcon size={18} />
          </Button>
        </Container>

        <Container className="flex flex-col p-6 md:p-8">
          <Container>
            <LogoPlaceholderIcon className="h-5 w-auto text-primary" />
          </Container>
          <Text variant="h3" tone="primary" className="mt-6 !font-bold">
            You need to be logged in to continue...
          </Text>
          <Container className="mt-6 flex flex-col gap-3">
            <Button fullWidth onClick={() => router.push("/login")}>
              Sign In
            </Button>
            <Button
              fullWidth
              variant="secondary"
              onClick={() => router.push("/register")}
            >
              Create an account
            </Button>
          </Container>
          <Container className="mt-8 border-t border-line pt-5 md:mt-auto">
            <Text variant="body-sm" tone="primary" className="!font-bold">
              Do you have a property to list?
            </Text>
            <Container className="mt-3">
              <Button
                variant="muted"
                shorter
                rightIcon={<ArrowRight size={14} />}
                onClick={() => router.push("/register")}
              >
                Continue
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </ModalOverlay>
  );
};
