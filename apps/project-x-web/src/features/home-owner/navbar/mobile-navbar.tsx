"use client";

import * as React from "react";
import { Container, Text, Switch } from "@repo/ui";

import { BrandLogo } from "@/assets/images";
import { useTheme } from "@/context/ThemeContext";
import {
  DashIcon,
  BuildingIcon,
  OutlineStar,
  OutlineMessages,
  QuestionNavIcon,
  Menu,
  Close,
  ProfileIcon,
  SettingsIcon,
  SubscriptionIcon,
  LogoutIcon,
  ThemeToggleIcon,
  ProfileSync,
} from "@repo/icons";
import { ProfileNameWrapper } from "./profile-name-wrapper";
import { ProfileSwitchWrapper } from "./profile-switch-wrapper";
import { LogoutWrapper } from "./logout-wrapper";

type NavLink = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

type MobileNavbarProps = {
  userName?: string;
  userRole?: string;
  userInitials?: string;
  onNavigate: (href: string) => void;
};

const navLinks: NavLink[] = [
  {
    icon: DashIcon,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: BuildingIcon,
    label: "Properties",
    href: "/properties",
  },
  {
    icon: OutlineStar,
    label: "Reviews",
    href: "/reviews",
  },
  {
    icon: OutlineMessages,
    label: "Messages",
    href: "/messages",
  },
];

const bottomLinks: NavLink[] = [
  {
    icon: ProfileIcon,
    label: "Profile",
    href: "/profile",
  },
  {
    icon: SubscriptionIcon,
    label: "Subscription",
    href: "/subscription",
  },
  {
    icon: SettingsIcon,
    label: "Settings",
    href: "/settings",
  },
];

export const MobileNavbar = ({
  userInitials = "MS",
  onNavigate,
}: MobileNavbarProps) => {
  const [open, setOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

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
            <button type="button" onClick={() => setOpen(true)}>
              <Menu className="text-p300" />
            </button>

            <img src={BrandLogo} alt="Brand Logo" className="h-7 w-auto" />
          </Container>

          <Container className="flex items-center gap-4">
            <QuestionNavIcon className="text-p300" />

            <Container
              as="div"
              className="p-2 rounded-xl bg-p50 flex items-center justify-center"
            >
              <Text tone="p300" variant="h4">
                {userInitials}
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>

      {open && (
        <Container
          className="lg:hidden fixed inset-0 bg-black/40 z-1100"
          onClick={() => setOpen(false)}
        />
      )}

      <Container
        className={`
          fixed top-0 left-0 h-dvh w-[90%] max-w-82.5
          bg-background z-1200 transition-transform duration-300
          flex flex-col
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Container
          className="flex items-center flex-col justify-end pb-3.5 px-2 h-[120px] w-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/menu-drawer-background.svg')",
          }}
        >
          <Container
            as="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-50"
          >
            <Close className="text-inverted" size={16} />
          </Container>
          <Container className="w-full">
            <ProfileNameWrapper />
          </Container>
        </Container>

        <Container className="flex-1 overflow-y-auto px-4 py-5">
          <Container className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Container
                  as="button"
                  key={link.label}
                  onClick={() => handleRoute(link.href)}
                  className="flex items-center gap-1 rounded-xl px-2 py-2 transition-colors hover:bg-p50"
                >
                  <Icon className="text-p300" />

                  <Text
                    variant="action-label"
                    className="text-primary font-medium"
                  >
                    {link.label}
                  </Text>
                </Container>
              );
            })}
          </Container>

          <Container className="my-4 h-px bg-line" />

          <Container className="flex flex-col gap-2">
            {bottomLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Container
                  as="button"
                  key={link.label}
                  onClick={() => handleRoute(link.href)}
                  className="flex items-center gap-1 rounded-xl px-2 py-2 transition-colors hover:bg-p50"
                >
                  <Icon className="text-p300" />

                  <Text
                    variant="action-label"
                    className="text-primary font-medium"
                  >
                    {link.label}
                  </Text>
                </Container>
              );
            })}
          </Container>

          <Container className="mt-2 flex items-center justify-between rounded-xl px-2 py-2">
            <Container className="flex gap-1 items-center">
              <ThemeToggleIcon className="text-p300" />
              <Text variant="action-label" className="font-medium text-primary">
                Dark Mode
              </Text>
            </Container>

            <Switch checked={isDark} onChange={toggleTheme} />
          </Container>
        </Container>

        <Container className="border-y border-line p-4 mb-6">
          <ProfileSwitchWrapper />
        </Container>
        <Container className="pb-4">
          <LogoutWrapper />
        </Container>
      </Container>
    </>
  );
};

export type { MobileNavbarProps };
