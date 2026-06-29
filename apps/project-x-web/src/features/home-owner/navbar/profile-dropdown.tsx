"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Switch, Text } from "@repo/ui";
import { ProfileNameWrapper } from "./profile-name-wrapper";
import {
  ProfileIcon,
  SettingsIcon,
  SubscriptionIcon,
  ThemeToggleIcon,
  LogoutIcon,
} from "@repo/icons";
import { useTheme } from "@/context/ThemeContext";
import { ProfileSwitchWrapper } from "./profile-switch-wrapper";
import { useLogout } from "@/features/auth/hooks/auth.hooks";

export type ProfileDropdownItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  danger?: boolean;
  onClick?: () => void;
  rightContent?: React.ReactNode;
  keepOpen?: boolean;
};

type ProfileDropdownProps = {
  children: React.ReactNode;
};

export const ProfileDropdown = ({ children }: ProfileDropdownProps) => {
  const { isDark, toggleTheme } = useTheme();
  const { mutate, isPending } = useLogout();
  const items: ProfileDropdownItem[] = [
    {
      key: "profile",
      label: "Profile",
      icon: <ProfileIcon size={20} className="text-p300" />,
    },
    {
      key: "subscription",
      label: "Subscription",
      icon: <SubscriptionIcon size={20} className="text-p300" />,
    },
    {
      key: "setting",
      label: "Settings",
      icon: <SettingsIcon size={20} className="text-p300" />,
    },
    {
      key: "dark-mode",
      label: "Dark mode",
      icon: <ThemeToggleIcon size={20} className="text-p300" />,
      onClick: toggleTheme,
      keepOpen: true,
      rightContent: (
        <Container onClick={(e) => e.stopPropagation()}>
          <Switch checked={isDark} onChange={toggleTheme} />
        </Container>
      ),
    },
  ];
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container className="relative" ref={ref}>
      {/* Trigger */}
      <Container
        className="flex gap-1 items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {children}
      </Container>

      {/* Dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-60 rounded-3xl pb-4 shadow-lg overflow-hidden z-50 bg-surface"
          >
            <Container className="h-21.5 px-4 py-3.5 bg-p200">
              <ProfileNameWrapper />
            </Container>
            <Container className="flex flex-col gap-4 py-4">
              {items.map((item, index) => (
                <Container
                  className="flex items-center justify-between px-4"
                  key={item.key}
                >
                  <Container
                    as="button"
                    onClick={() => {
                      item.onClick?.();
                      if (!item.keepOpen) setOpen(false);
                    }}
                    className={`w-full flex items-center gap-3  text-left transition-colors  ${
                      item.danger ? "text-error" : ""
                    }`}
                  >
                    {item.icon && <span className="shrink-0">{item.icon}</span>}
                    <Text variant="action-label" tone="primary">
                      {item.label}
                    </Text>
                  </Container>
                  {item.rightContent && item.rightContent}
                </Container>
              ))}
            </Container>
            <Container className="px-4 py-2.5 border-t mb-3 border-b border-t-line border-b-line">
              <ProfileSwitchWrapper />
            </Container>
            <Container
              as="button"
              onClick={() => {
                mutate();
              }}
              className="px-4 flex items-center gap-2"
            
            >
              <LogoutIcon className="text-d300" />
              <Text tone="danger" variant="action-label">
                Log Out
              </Text>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};
