"use client";

import React from 'react'
import { Container } from '../container/container';
import Image from 'next/image';
import BrandLogo from "@/assets/svgs/brand-logo.svg";
import dashIcon from "@/assets/svgs/dash-icon.svg";
import buildingIcon from "@/assets/svgs/building-icon.svg";
import starIcon from "@/assets/svgs/outline-star.svg";
import messagesIcon from "@/assets/svgs/outline-messages.svg";
import QuestionMark from "@/assets/svgs/question-nav-icon.svg";
import BellBadge from "@/assets/svgs/bell-badge.svg";
import ArrowDown from "@/assets/svgs/chevron-arrow-down.svg";

import { useRouter } from 'next/navigation';

const navLinks = [
    {
        icon: dashIcon,
        label: "Dashboard",
        href: "/"
    },
    {
        icon: buildingIcon,
        label: "Properties",
        href: "/properties"
    },
    {
        icon: starIcon,
        label: "Reviews",
        href: "/reviews"
    },
    {
        icon: messagesIcon,
        label: "Messages",
        href: "/messages"
    },
]

export const Navbar = () => {
    const router = useRouter();

    return (
        <Container as="nav" className='w-full bg-surface py-4 shadow-md px-24 fixed z-1000'>
            <div className='flex justify-between items-center'>
                <span>
                    <BrandLogo />
                </span>
                <div className="flex gap-3">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <button key={link.label} onClick={() => router.push(link.href)} className='flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors'>
                                <Icon />
                                <span>{link.label}</span>
                            </button>
                        );
                    })}
                </div>
                <div className='flex gap-4 items-center'>
                    <QuestionMark />
                    <BellBadge />
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <div className='w-10 h-10 rounded-xl   bg-p50 flex items-center justify-center text-p300'>
                            <p>MS</p>
                        </div>
                        <span>
                            <ArrowDown />
                        </span>
                    </div>


                </div>

            </div>

        </Container>

    )
}
