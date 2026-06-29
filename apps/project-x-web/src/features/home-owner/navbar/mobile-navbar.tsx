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
import { Button } from "../button";

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
  userName = "Micheal Scofield",
  userRole = "Agent",
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
            <Button
              as="button"
              onClick={() => setOpen(true)}
            >
              <Menu className="text-p300" />

              Label
            </Button>

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
          fixed top-0 left-0 h-dvh w-[90%] max-w-[330px]
          bg-background z-1200 transition-transform duration-300
          flex flex-col
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Container
          className="relative overflow-hidden px-4 pt-5 pb-8 h-60 w-full bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/menu-drawer-background.svg')",
          }}
        >
          <Button
            as="button"
            className="absolute right-4 top-18 z-50"
            onClick={() => setOpen(false)}
          >
            <Close className="text-inverted" />

            Label
          </Button>

          <Container className="absolute bottom-4 left-4 right-4 z-10 mt-16 flex items-center gap-3 rounded-2xl bg-inverted p-3 shadow-sm">
            <Container className="flex h-11 w-11 items-center justify-center rounded-xl bg-p200">
              <Text className="font-semibold text-inverted">
                {userInitials}
              </Text>
            </Container>

            <Container>
              <Text className="font-semibold text-primary leading-tight">
                {userName}
              </Text>

              <Text className="text-sm text-secondary">{userRole}</Text>
            </Container>
          </Container>
        </Container>

        <Container className="flex-1 overflow-y-auto px-4 py-5">
          <Container className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Button
                as="button"
                key={link.label}
                leftIcon={<Icon className="text-p300" />}
                className="transition-colors hover:bg-p50"
                onClick={() => handleRoute(link.href)}
              >
                <Text className="text-primary font-medium">
                    {link.label}
                  </Text>
              
    
                Label
              </Button>
              );
            })}
          </Container>

          <Container className="my-4 h-px bg-line" />

          <Container className="flex flex-col gap-1">
            {bottomLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Button
                  as="button"
                  key={link.label}
                  leftIcon={<Icon className="text-p300" />}
                  onClick={() => handleRoute(link.href)}
                  className="transition-colors hover:bg-p50"
                >
                  <Text className="text-primary font-medium">
                    {link.label}
                  </Text>
                </Button>
              );
            })}
          </Container>

          <Container className="mt-2 flex items-center justify-between rounded-xl px-3 py-3">
            <Container className="flex gap-3 items-center">
              <ThemeToggleIcon className="text-p300" />
              <Text className="font-medium text-primary">Dark Mode</Text>
            </Container>

            <Switch
              checked={isDark}
              onChange={toggleTheme}
            />
          </Container>
        </Container>

        <Container className="border-y border-line p-4">
          <Container className="flex items-center justify-between rounded-2xl bg-s50 p-3">
            <Container className="flex items-center gap-3">
              <Container className="flex h-10 w-10 items-center justify-center rounded-xl border border-p75 bg-p50">
                <Text className="font-semibold text-p300">
                  {userInitials}
                </Text>
              </Container>

              <Container>
                <Text className="font-semibold text-primary leading-tight">
                  {userName}
                </Text>

                <Text className="text-sm text-s200">Switch Profile</Text>
              </Container>
            </Container>

            <ProfileSync className="text-s300" />
          </Container>

          <button type="button" className="mt-4 flex items-center gap-2 px-2 py-2">
            <LogoutIcon className="text-d300" />

            <Text className="font-medium text-d300">Log Out</Text>
          </button>
        </Container>
      </Container>
    </>
  );
};

export type { MobileNavbarProps };