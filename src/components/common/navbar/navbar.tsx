"use client";

import React from "react";
import { Container } from "../container/container";
import Image from "next/image";
import BrandLogo from "@/assets/svgs/brand-logo.svg";
import dashIcon from "@/assets/svgs/dash-icon.svg";
import buildingIcon from "@/assets/svgs/building-icon.svg";
import starIcon from "@/assets/svgs/outline-star.svg";
import messagesIcon from "@/assets/svgs/outline-messages.svg";
import QuestionMark from "@/assets/svgs/question-nav-icon.svg";
import BellBadge from "@/assets/svgs/bell-badge.svg";
import ArrowDown from "@/assets/svgs/chevron-arrow-down.svg";

import { useRouter } from "next/navigation";
import { Text } from "../text/text";
import { GeneralSpacer } from "../wrapper/general-spacer";

const navLinks = [
  {
    icon: dashIcon,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: buildingIcon,
    label: "Properties",
    href: "/properties",
  },
  {
    icon: starIcon,
    label: "Reviews",
    href: "/reviews",
  },
  {
    icon: messagesIcon,
    label: "Messages",
    href: "/messages",
  },
];

export const Navbar = () => {
  const router = useRouter();

  return (
    <Container as="nav" className="w-full bg-surface py-4 top-0  fixed z-1000">
      <GeneralSpacer>
        <Container as="div" className="flex justify-between items-center">
          <Container as="span">
            <BrandLogo />
          </Container>
          <Container as="div" className="flex gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Container
                  as="button"
                  key={link.label}
                  onClick={() => router.push(link.href)}
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
          <Container as="div" className="flex gap-4 items-center">
            <QuestionMark className="text-primary" />
            <BellBadge className="text-primary" />
            <Container
              as="div"
              className="flex gap-1 items-center cursor-pointer"
            >
              <Container
                as="div"
                className="p-2 rounded-xl bg-p50 flex items-center justify-center"
              >
                <Text tone="p300" variant="h4">
                  MS
                </Text>
              </Container>
              <Container as="div">
                <ArrowDown className="text-secondary" />
              </Container>
            </Container>
          </Container>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
