"use client";

import React from "react";
import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import MessageCircleMore from "@/assets/svgs/chat-icon.svg";
import Phone from "@/assets/svgs/phone.svg";
import VerifiedCheck from "@/assets/svgs/verified-check.svg";

export const AgentCard = () => {
  return (
    <Container className="flex items-center justify-between rounded-2xl bg-s50 p-2.5">
      <Container className="flex items-center gap-2">
        <Container className="flex items-center justify-center rounded-xl text-lg bg-p200 w-10 h-10 font-bold text-inverted">
          MS
        </Container>

        <Container className="leading-tight">
          <Text tone="primary" className="text-sm font-medium">
            Michael Scofield
          </Text>
          <Container as="span" className="inline-flex items-center gap-1 text-xs font-medium text-primary">
            Agent
            <VerifiedCheck className="h-3 w-3" />
          </Container>
        </Container>
      </Container>

      <Container className="flex items-center gap-2">
        <Container
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-s75"
          aria-label="Message agent"
        >
          <MessageCircleMore className="h-5 w-5 text-s500" />
        </Container>

        <Container
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-s75"
          aria-label="Call agent"
        >
          <Phone className="h-5 w-5 text-s500" />
        </Container>
      </Container>
    </Container>
  );
};