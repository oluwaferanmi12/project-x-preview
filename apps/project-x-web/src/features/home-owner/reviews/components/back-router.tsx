import { ArrowLeft } from '@repo/icons'
import { Button, Container } from '@repo/ui'
import React from 'react'

export const BackRouter = ({ onBack, text = "Back" }: { onBack: () => void, text?: string }) => {
    return (
        <Container className="mb-4 hidden lg:flex">
            <Button
                shorter
                variant="transparent"
                leftIcon={<ArrowLeft size={14} />}
                className="px-0 text-s500"
                onClick={onBack}
            >
                {text}
            </Button>
        </Container>
    )
}
