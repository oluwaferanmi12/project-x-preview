"use client";

import * as React from "react";
import { Container, Text, GeneralSpacer } from "@repo/ui";
import { ProfileDropdown } from "./profile-dropdown";
import type { ProfileDropdownItem } from "./profile-dropdown";

import BrandLogo from "@/assets/svgs/brand-logo.svg";
import {
  DashIcon,
  BuildingIcon,
  OutlineStar,
  OutlineMessages,
  QuestionNavIcon,
  BellBadge,
  ChevronArrowDown,
} from "@repo/icons";
import { useAuthStore } from "@/store/useAuthStore";
import { getInitials } from "@repo/utils";

type NavLink = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

type NavbarProps = {
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

export const Navbar = ({ onNavigate }: NavbarProps) => {
  const { user } = useAuthStore();

  const profileMenuItems: ProfileDropdownItem[] = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "logout",
      label: "Logout",
      danger: true,
    },
  ];

  return (
    <Container
      as="nav"
      className="w-full hidden sm:flex bg-surface py-4 top-0 fixed z-1000"
    >
      <GeneralSpacer>
        <Container className="flex justify-between items-center">
          <Container as="span">
            <BrandLogo className="text-primary" />
          </Container>

          <Container className="flex gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Container
                  as="button"
                  key={link.label}
                  onClick={() => onNavigate(link.href)}
                  className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Icon className="text-p300" />

                  <Text variant="action-label" tone="p300">
                    {link.label}
                  </Text>
                </Container>
              );
            })}
          </Container>

          <Container className="flex gap-4 items-center">
            <QuestionNavIcon className="text-primary" />

            <BellBadge className="text-primary" />

            <ProfileDropdown items={profileMenuItems}>
              <Container className="p-2 rounded-xl bg-p50 flex items-center justify-center">
                <Text tone="p300" variant="h4">
                  {user && getInitials(user?.firstName, user?.lastName)}
                </Text>
              </Container>

              <Container>
                <ChevronArrowDown className="text-secondary" />
              </Container>
            </ProfileDropdown>
          </Container>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};

export type { NavbarProps };
