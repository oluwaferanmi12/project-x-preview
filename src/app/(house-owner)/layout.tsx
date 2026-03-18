import React from 'react';
import { Navbar } from '@/components/common/navbar/navbar';

export default function ListPropertylayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            <div className='bg-primary'>
                {children}
            </div>
        </div>
    )
}
