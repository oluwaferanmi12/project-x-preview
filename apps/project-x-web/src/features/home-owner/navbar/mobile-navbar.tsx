"use client";

import * as React from "react";
import { Container, Text} from "@repo/ui";
import { BrandLogo } from "@/assets/images";
import { QuestionNavIcon, Menu } from "@repo/icons";
import { MobileNavDrawer } from "./mobile-nav-drawer";
import Image from "next/image";
import { useAuthStore } from "@/store/useAuthStore";
import { getInitials } from "@repo/utils";

type MobileNavbarProps = {
  userName?: string;
  userRole?: string;
  userInitials?: string;
  onNavigate: (href: string) => void;
};

export const MobileNavbar = ({ onNavigate }: MobileNavbarProps) => {
  const [open, setOpen] = React.useState(false);
  const { user } = useAuthStore();

  const handleRoute = (href: string) => {
    onNavigate(href);
    setOpen(false);
  };

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <Container className="lg:hidden fixed top-0 left-0 z-1000 w-full bg-surface border-b">
        <Container className="flex items-center justify-between px-4 py-4">
          <Container className="flex items-center gap-4">
            <Container as="button" onClick={() => setOpen(true)}>
              <Menu className="text-p300" />
            </Container>
            <Image
              width={30}
              height={30}
              src={BrandLogo}
              alt="Brand Logo"
              className="h-7 w-auto"
            />
          </Container>
          <Container className="flex items-center gap-4">
            <QuestionNavIcon className="text-p300" />
            <Container
              as="div"
              className="p-2 rounded-xl bg-p50 flex items-center justify-center"
            >
              <Text tone="p300" variant="h4">
                {user && getInitials(user.firstName, user.lastName)}
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>

      <MobileNavDrawer
        open={open}
        onClose={() => setOpen(false)}
        onNavigate={handleRoute}
      />
    </>
  );
};

export type { MobileNavbarProps };
