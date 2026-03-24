import React from 'react';
import { Navbar } from '@/components/common/navbar/navbar';

export default function HouseOwnerlayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
            <Navbar />
            <div className='bg-surface  h-full'>
                {children}
            </div>
        </div>
    )
}
