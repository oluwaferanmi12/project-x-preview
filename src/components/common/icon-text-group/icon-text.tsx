import React from 'react'
import { Container } from "@/components/common/container/container";
import Image, { StaticImageData } from "next/image";


type IconTextProps = {
    icon?: StaticImageData | string;
    isClickable?: boolean;
    isActive?: boolean;
    label: string;
    handleClick?: () => void;
}

export const IconText = ({ icon, isClickable = false, isActive = false, label, handleClick }: IconTextProps) => {
    const handleClickWithGuard = () => {
        if (isClickable && handleClick) {
            handleClick();
        }
    };

    return (
        <Container
            onClick={handleClickWithGuard}
            className={`border 
                            flex items-center gap-2 px-2 py-1 rounded-xl
                            hover:border-s75
                            transition-all duration-200
                        ${isActive 
                            ? "bg-s50 text-p400 border-s75" 
                            : "bg-surface text-primary border-line"
                        } 
                        ${isClickable ? "cursor-pointer" : "cursor-default"}
            `}>
            {icon && <Image src={icon} alt={label} width={16} height={16} />
            }
            <Container as="span">{label}</Container>
        </Container>
    )
}
