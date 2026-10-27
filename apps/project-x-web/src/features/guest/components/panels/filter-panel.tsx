import { Container } from '@repo/ui'
import React, { ReactNode } from 'react'

export const FilterPanel = ({ children, size = "regular" }: { children: ReactNode, size?: "regular" | "large" }) => {
    return (
        <Container className={`bg-surface p-6  rounded-3xl  shadow-[0_14px_40px_rgba(17,17,17,0.12)] ${size === "regular" ? "sm:w-85.5" : "sm:w-126"}`}>
            {children}
        </Container>
    )
}
