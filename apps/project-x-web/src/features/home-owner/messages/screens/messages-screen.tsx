"use client";

import { useEffect, useState } from "react";
import { Container, Text, Button } from "@repo/ui";
import { messageThreads } from "../data/messages.mock";
import { MessageList } from "../components/message-list";
import { MessageDetail } from "../components/message-detail";
import { ArrowLeft } from "@repo/icons";

interface MessagesScreenProps {
  propertyId: string;
}

export function MessagesScreen({ propertyId }: MessagesScreenProps) {
  const [threads] = useState(messageThreads);
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);

  // null means the viewport has not been checked yet
  const [isMobileView, setIsMobileView] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleViewportChange = (event?: MediaQueryListEvent) => {
      const isMobile = event?.matches ?? mediaQuery.matches;

      setIsMobileView(isMobile);

      setSelectedThreadId((currentThreadId) => {
        // Whenever the user enters mobile view,
        // always show the message list first.
        if (isMobile) {
          return null;
        }

        // On desktop, open the existing selected thread
        // or select the first thread.
        return currentThreadId ?? threads[0]?.id ?? null;
      });
    };

    handleViewportChange();

    mediaQuery.addEventListener("change", handleViewportChange);

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange);
    };
  }, [threads]);

  const selectedThread =
    threads.find((thread) => thread.id === selectedThreadId) ?? null;

  const handleSelectThread = (threadId: string) => {
    setSelectedThreadId(threadId);
  };

  const handleBack = () => {
    setSelectedThreadId(null);
  };

  // Prevent desktop layout from briefly rendering before
  // the actual viewport size is determined.
  if (isMobileView === null) {
    return null;
  }

  return (
    <Container className="space-y-6">
      {isMobileView && selectedThreadId ? (
        <Button
        shorter
        variant="transparent"
        leftIcon={<ArrowLeft size={18} />}
        className="px-0 text-s500"
        onClick={handleBack}
        >
        Back
       </Button>
      ) : (
        <Text variant="h3" tone="primary" className="pt-4 md:pt-8">
          Messages
        </Text>
      )}

      <Container className="flex h-screen flex-col gap-0">
        <Container
          as="div"
          className="flex flex-1 gap-0 overflow-hidden rounded-xl bg-surface shadow-sm"
        >
          {!isMobileView ? (
            <>
              {/* Desktop message list */}
              <Container as="div" className="w-[30%]">
                <MessageList
                  threads={threads}
                  selectedThreadId={selectedThreadId}
                  onSelectThread={handleSelectThread}
                />
              </Container>

              {/* Desktop message detail */}
              <Container as="div" className="flex-1">
                <MessageDetail
                  thread={selectedThread}
                />
              </Container>
            </>
          ) : selectedThreadId === null ? (
            // Mobile always begins with the message list
            <Container as="div" className="w-full">
              <MessageList
                threads={threads}
                selectedThreadId={null}
                onSelectThread={handleSelectThread}
              />
            </Container>
          ) : (
            // A chat opens only after the user selects it
            <Container as="div" className="w-full">
              <MessageDetail
                thread={selectedThread}
              />
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  );
}