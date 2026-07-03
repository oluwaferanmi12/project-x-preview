"use client";

import * as React from "react";
import { Container, Text, GeneralSpacer } from "@repo/ui";
import { ProfileDropdown } from "./profile-dropdown";
import { usePathname } from "next/navigation";

import {
  DashIcon,
  BuildingIcon,
  OutlineStar,
  OutlineMessages,
  QuestionNavIcon,
  BellBadge,
  ChevronArrowDown,
  LogoPlaceholderIcon,
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
  const pathname = usePathname();

  return (
    <Container
      as="nav"
      className="w-full hidden sm:flex bg-surface py-4 top-0 fixed z-1000"
    >
      <GeneralSpacer>
        <Container className="flex justify-between items-center">
          <Container as="span">
            <LogoPlaceholderIcon className="text-primary" />
          </Container>

          <Container className="flex gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Container
                  as="button"
                  key={link.label}
                  onClick={() => onNavigate(link.href)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 transition-colors ${
                    isActive
                      ? "bg-p300 text-inverted"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <Icon className={isActive ? "text-inverted" : "text-p300"} />

                  <Text
                    variant="action-label"
                    tone={isActive ? "inverted" : "primary"}
                  >
                    {link.label}
                  </Text>
                </Container>
              );
            })}
          </Container>

          <Container className="flex gap-4 items-center">
            <QuestionNavIcon className="text-primary" />

            <BellBadge className="text-primary" />

            <ProfileDropdown>
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
