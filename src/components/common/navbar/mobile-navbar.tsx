// components/common/navbar/mobile-navbar.tsx

"use client";

import React, { useState } from "react";
import { Container } from "../container/container";
import { Text } from "../text/text";
import { useRouter } from "next/navigation";

import BrandLogo from "@/assets/svgs/brand-logo.svg";
import dashIcon from "@/assets/svgs/dash-icon.svg";
import buildingIcon from "@/assets/svgs/building-icon.svg";
import starIcon from "@/assets/svgs/outline-star.svg";
import messagesIcon from "@/assets/svgs/outline-messages.svg";
import QuestionMark from "@/assets/svgs/question-nav-icon.svg";

import MenuIcon from "@/assets/svgs/menu.svg";
import CloseIcon from "@/assets/svgs/close.svg";
import ProfileIcon from "@/assets/svgs/profile-icon.svg";
import SettingsIcon from "@/assets/svgs/settings-icon.svg";
import SubscriptionIcon from "@/assets/svgs/subscription-icon.svg";
import LogoutIcon from "@/assets/svgs/logout-icon.svg";
import ThemeToggleIcon from "@/assets/svgs/theme-toggle-icon.svg";
import ProfileSync from "@/assets/svgs/profile-sync.svg";

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

const bottomLinks = [
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

export const MobileNavbar = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const handleRoute = (href: string) => {
        router.push(href);
        setOpen(false);
    };

    return (
        <>
            {/* Top Navbar */}
            <Container className="lg:hidden fixed top-0 left-0 z-[1000] w-full bg-surface border-b ">
                <Container className="flex items-center justify-between px-4 py-4">
                    <Container className="flex items-center gap-4">
                        <button onClick={() => setOpen(true)}>
                            <MenuIcon className="text-p300" />
                        </button>
                        <BrandLogo className="text-primary h-7 w-auto" />
                    </Container>
                    <Container className="flex items-center gap-4">
                        <QuestionMark className="text-p300" />
                        <Container
                            as="div"
                            className="p-2 rounded-xl bg-p50 flex items-center justify-center"
                        >
                            <Text tone="p300" variant="h4">
                                MS
                            </Text>
                        </Container>


                    </Container>
                </Container>
            </Container>

            {/* Overlay */}
            {open && (
                <Container
                    className="fixed inset-0 bg-black/40 z-[1100]"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Sidebar */}
            <Container
                className={`
          fixed top-0 left-0 h-dvh w-[82%] max-w-[320px]
          bg-background z-[1200] transition-transform duration-300
          flex flex-col
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Header */}
                <Container className="bg-p300 px-4 pt-5 pb-6 relative overflow-hidden">
                    {/* Close */}
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute right-4 top-4"
                    >
                        <CloseIcon className="text-p300" />
                    </button>

                    {/* Profile */}
                    <Container className="mt-8 flex items-center gap-3 rounded-2xl bg-inverted p-3">
                        <Container className="flex h-11 w-11 items-center justify-center rounded-xl bg-p200">
                            <Text className="font-semibold text-inverted">MS</Text>
                        </Container>

                        <Container>
                            <Text className="font-semibold text-primary leading-tight">
                                Micheal Scofield
                            </Text>

                            <Text className="text-sm text-secondary">Agent</Text>
                        </Container>
                    </Container>
                </Container>

                {/* Nav Links */}
                <Container className="flex-1 overflow-y-auto px-4 py-5">
                    <Container className="flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <button
                                    key={link.label}
                                    onClick={() => handleRoute(link.href)}
                                    className="
                    flex items-center gap-3 rounded-xl px-3 py-3
                    transition-colors hover:bg-p50
                  "
                                >
                                    <Icon className="text-p300" />

                                    <Text className="text-primary font-medium">
                                        {link.label}
                                    </Text>
                                </button>
                            );
                        })}
                    </Container>

                    <Container className="my-4 h-[1px] bg-[#E7E7E7]" />

                    <Container className="flex flex-col gap-1">
                        {bottomLinks.map((link) => {
                            const Icon = link.icon;

                            return (
                                <button
                                    key={link.label}
                                    onClick={() => handleRoute(link.href)}
                                    className="
                    flex items-center gap-3 rounded-xl px-3 py-3
                    transition-colors hover:bg-p50
                  "
                                >
                                    <Icon className="text-p300" />

                                    <Text className="text-primary font-medium">
                                        {link.label}
                                    </Text>
                                </button>
                            );
                        })}
                    </Container>

                    {/* Dark mode */}
                    <Container className="mt-2 flex items-center justify-between rounded-xl px-3 py-3">
                        <Container className="flex gap-3 items-center">
                            <ThemeToggleIcon className="text-p300" />
                            <Text className="font-medium text-primary">Dark Mode</Text>
                        </Container>
                        

                        <Container className="relative h-6 w-11 rounded-full bg-[#E5E5EA]">
                            <Container className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm" />
                        </Container>
                    </Container>
                </Container>

                {/* Bottom User Card */}
                <Container className="border-y border-line p-4">
                    <Container className="flex items-center justify-between rounded-2xl bg-s50 p-3">
                        <Container className="flex items-center gap-3">
                            <Container className="flex h-10 w-10 items-center justify-center rounded-xl border border-p75 bg-p50">
                                <Text className="font-semibold text-p300">MS</Text>
                            </Container>

                            <Container>
                                <Text className="font-semibold text-primary leading-tight">
                                    Micheal Scofield
                                </Text>

                                <Text className="text-sm text-s200">
                                    Switch Profile
                                </Text>
                            </Container>
                        </Container>
                            <ProfileSync className="text-s300" />

                    </Container>

                    <button
                        className="
                            mt-4 flex items-center gap-2 px-2 py-2
                            "
                    >
                        <LogoutIcon className="text-d300" />

                        <Text className="font-medium text-d300">Log Out</Text>
                    </button>
                </Container>
            </Container>
        </>
    );
};