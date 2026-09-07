"use client";

import * as React from "react";
import { Container } from "../container";



type IconTextProps = {
  icon?: React.ReactNode;
  isClickable?: boolean;
  isActive?: boolean;
  label: string;
  handleClick?: () => void;
};

export const IconText = ({
  icon,
  isClickable = false,
  isActive = false,
  label,
  handleClick,
}: IconTextProps) => {
  const handleClickWithGuard = () => {
    if (isClickable && handleClick) {
      handleClick();
    }
  };

  return (
    <Container
      onClick={handleClickWithGuard}
      className={`border flex items-center gap-2 rounded-xl px-2 py-1 transition-all duration-200 hover:border-s75
        ${isActive ? "bg-s50 text-p400 border-s75" : "bg-surface text-primary border-line"}
        ${isClickable ? "cursor-pointer" : "cursor-default"}
      `}
    >
      {icon ? <Container className="inline-flex h-4 w-4">{icon}</Container> : null}

      <Container as="span">{label}</Container>
    </Container>
  );
};

export type { IconTextProps };