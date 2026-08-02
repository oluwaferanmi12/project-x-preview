"use client";

import { useState, useRef } from "react";
import { ArrowLeft, BuildingIcon, ChevronRight, IconImage } from "@repo/icons";
import { Button, Text, Container, Textarea } from "@repo/ui";
import { MessageThread } from "../types/messages.types";
import { getInitialsFromFullName, getMessageDay } from "@repo/utils";


interface MessageDetailProps {
  thread: MessageThread | null;
}

export function MessageDetail({ thread }: MessageDetailProps) {
  // const [messageInput, setMessageInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleOpenImagePicker = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Extra validation in addition to accept="image/*"
    if (!file.type.startsWith("image/")) {
      event.target.value = "";
      return;
    }

    setSelectedImage(file);

    // Allows the same image to be selected again later.
    event.target.value = "";
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() && !selectedImage) return;

    // TODO: Upload selectedImage and send messageInput.

    console.log({
      message: messageInput.trim(),
      image: selectedImage,
    });

    setMessageInput("");
    setSelectedImage(null);
  };

  if (!thread) {
    return (
      <Container className="hidden lg:flex flex-col h-full bg-s50 items-center justify-center">
        <Text variant="body-sm" className="text-secondary">
          Select a conversation to start messaging
        </Text>
      </Container>
    );
  }

  return (
    <Container className="flex flex-col h-full bg-surface">
      {/* MOBILE Header */}
      <Container className="sm:hidden flex items-center rounded-tl-xl md:rounded-tl-none rounded-tr-xl border border-line px-5 py-2">
        <Container className="flex min-w-0 items-center gap-3">
          <Container className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl bg-p300">
            <Text variant="h4" tone="inverted" className="font-bold">
              {getInitialsFromFullName(thread.participantName)}
            </Text>
          </Container>
          <Container className="flex flex-col min-w-0 gap-2">
            <Text
              variant="body-md"
              tone="primary"
              className="truncate font-semibold"
            >
              {thread.participantName}
            </Text>
            <Container className="flex min-w-0 items-center gap-1">
              <BuildingIcon className="h-5 w-5 shrink-0 text-primary" />
              <Text
                variant="body-sm"
                tone="primary"
                className="max-w-64 truncate"
              >
                {thread.propertyAddress}
              </Text>
              <ChevronRight size={14} className="text-primary" />
            </Container>
          </Container>


        </Container>


      </Container>



      {/* DESKTOP Header */}
      <Container className="hidden md:flex items-center justify-between rounded-tr-xl border border-line px-5 py-2">
        <Container className="flex min-w-0 items-center gap-3">
          <Container className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl bg-p300">
            <Text variant="h4" tone="inverted" className="font-bold">
              {getInitialsFromFullName(thread.participantName)}
            </Text>
          </Container>

          <Text
            variant="body-md"
            tone="primary"
            className="truncate font-semibold"
          >
            {thread.participantName}
          </Text>
        </Container>

        <Container className="ml-4 flex min-w-0 items-center gap-2">
          <BuildingIcon className="h-5 w-5 shrink-0 text-primary" />
          <Text
            variant="body-sm"
            tone="primary"
            className="max-w-64 truncate"
          >
            {thread.propertyAddress}
          </Text>
          <ChevronRight size={14} className="text-primary" />
        </Container>
      </Container>



      {/* Messages */}
      <Container className="flex-1 overflow-y-auto px-5 pb-4">
        {thread.messages.map((message, index) => {
          const currentDay = getMessageDay(message.timestamp);

          const previousDay =
            index > 0
              ? getMessageDay(thread.messages[index - 1].timestamp)
              : null;

          const shouldShowDayDivider = currentDay !== previousDay;

          return (
            <Container key={message.id}>
              {/* Day divider */}
              {shouldShowDayDivider && (
                <Container className="mb-6 mt-2 flex items-center gap-3">
                  <Container as="span" className="h-px flex-1 bg-line" />

                  <Text
                    variant="body-sm"
                    tone="secondary"
                    className="shrink-0 font-medium"
                  >
                    {currentDay}
                  </Text>

                  <Container as="span" className="h-px flex-1 bg-line" />
                </Container>
              )}

              {/* Message */}
              <Container
                className={`mb-5 flex ${message.isOwn ? "justify-end" : "justify-start"
                  }`}
              >
                {!message.isOwn && (
                  <Container className="mr-2 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-lg bg-p300">
                    <Text
                      variant="body-sm"
                      tone="inverted"
                      className="font-bold"
                    >
                      {getInitialsFromFullName(message.senderName)}
                    </Text>
                  </Container>
                )}

                <Container className="w-full max-w-[70%]">
                  {/* Sender name and time */}
                  <Container
                    className={`mb-1 justify-between flex items-center gap-3 ${message.isOwn && "ml-3"}`}
                  >
                    <Text
                      variant="body-sm"
                      tone="primary"
                      className="font-medium"
                    >
                      {message.isOwn ? "You" : message.senderName}
                    </Text>

                    <Text
                      variant="body-xs"
                      tone="secondary"
                      className="shrink-0"
                    >
                      {message.timestamp}
                    </Text>
                  </Container>

                  {/* Message bubble */}
                  <Container
                    className={`
                px-4 py-3
                ${message.isOwn
                        ? "ml-auto w-fit rounded-tl-xl rounded-tr-sm rounded-br-xl rounded-bl-xl bg-p300"
                        : "rounded-xl rounded-tl-sm bg-muted"
                      }
              `}
                  >
                    <Text
                      variant="body-sm"
                      tone={message.isOwn ? "inverted" : "primary"}
                      className="break-words"
                    >
                      {message.content}
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Container>
          );
        })}
      </Container>

      {/* Input */}
      <Container className="p-4">
        {/* Hidden image input */}
        <input
          ref={imageInputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          onChange={handleImageChange}
          className="hidden"
        />

        <Textarea
          value={messageInput}
          label=""
          placeholder={
            selectedImage
              ? `Selected: ${selectedImage.name}`
              : "Send a message"
          }
          onChange={(event) => setMessageInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              handleSendMessage();
            }
          }}
          className="min-h-[120px] bg-background!"
          endAdornment={
            <>
              <Button
                type="button"
                variant="muted"
                shorter
                onClick={handleOpenImagePicker}
                aria-label="Select an image"
                title="Select an image"
                className="h-9 w-16! p-0!"
              >
                <IconImage className="h-6 w-6" aria-hidden="true" />
              </Button>

              <Button
                type="button"
                onClick={handleSendMessage}
                disabled={!messageInput.trim() && !selectedImage}
                className="h-9 px-4 py-0!"
              >
                Send
              </Button>
            </>
          }
        />
      </Container>
    </Container>
  );
}
