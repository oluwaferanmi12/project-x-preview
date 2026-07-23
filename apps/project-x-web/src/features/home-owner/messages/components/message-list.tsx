"use client";

import {useState} from "react"
import { BuildingIcon } from "@repo/icons";
import { Text, Container } from "@repo/ui";
import { MessageThread } from "../types/messages.types";
import { MessagesSearch } from "./messages-search";
import { getInitialsFromFullName, getMessageTime } from "@repo/utils";





interface MessageListProps {
  threads: MessageThread[];
  selectedThreadId: string | null;
  onSelectThread: (threadId: string) => void;
}

export function MessageList({
  threads,
  selectedThreadId,
  onSelectThread,
}: MessageListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredThreads = threads.filter((thread) =>
    thread.participantName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Container className="flex flex-col h-full ">
      {/* Header */}
      <Container className="pt-6 px-3.5 pb-3 rounded-tl-xl border border-b-0 border-line">
        <Container className="flex items-center gap-3 mb-3">
          <Text variant="h5" className="font-semibold">
            All Messages
          </Text>

          <Container as="button" className="bg-indigo-back w-7.75 h-5.5 max-h-5.5 rounded-3xl px-0.5">
            <Text variant="body-xs" className="text-indigo-fore">{threads.length}</Text>
          </Container>
        </Container>

        <MessagesSearch value={searchQuery} onChange={setSearchQuery} />
      </Container>

      {/* Messages List */}
      <Container className="flex-1 overflow-y-auto border border-line">
        {filteredThreads.map((thread) => {
          const isActive = selectedThreadId === thread.id;

          const latestMessage = thread.messages.at(-1);
          
          const hasUnreadParticipantMessage =
            thread.unreadCount > 0 &&
            latestMessage &&
            !latestMessage.isOwn &&
            latestMessage.status !== "read";

          return (
            <Container
              key={thread.id}
              onClick={() => onSelectThread(thread.id)}
              className={`
               relative cursor-pointer border-b border-line  py-3 `}
            >
              <Container className={`pl-2 pr-4 py-3  hover:bg-s50 ${isActive && "bg-s50 border-r-8 border-s300"}`}>

              {/* Active dot */}
              {hasUnreadParticipantMessage && (
                <Container as="span" className="absolute left-4 top-10 h-2.5 w-2.5 rounded-full bg-p300" />
              )}
              

              {/* Profile information */}
              <Container className="ml-6 md:ml-7">
                <Container className="flex items-start gap-2">
                  {/* Avatar */}
                  <Container className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-xl bg-p300">
                    <Text
                      variant="h4"
                      tone="inverted"
                      className="text-xl font-bold"
                    >
                      {getInitialsFromFullName(thread.participantName)}
                    </Text>
                  </Container>

                  {/* Name, address and time */}
                  <Container className="min-w-0 flex-1">
                    <Container className="flex items-center justify-between gap-3">
                      <Text
                        variant="action-label"
                        tone="primary"
                        className="truncate font-medium"
                      >
                        {thread.participantName}
                      </Text>

                      <Text
                        variant="body-xs"
                        tone="secondary"
                        className="shrink-0"
                      >
                        {getMessageTime(thread.lastMessageTime)}
                      </Text>
                    </Container>

                    <Container className="mt-1 flex min-w-0 max-w-52 items-center gap-1.5">
                      <BuildingIcon className="h-5 w-5 shrink-0 text-primary" />

                      <Text
                        variant="body-xs"
                        tone="primary"
                        className="truncate font-normal"
                      >
                        {thread.propertyAddress}
                      </Text>
                    </Container>
                  </Container>
                </Container>

                {/* Message sits below avatar, name, address and time */}
                <Text
                  variant="body-sm"
                  tone="secondary"
                  className="mt-2 line-clamp-2"
                >
                  {thread.lastMessage}
                </Text>
              </Container>
              </Container>
            </Container>

          );
        })}
      </Container>
    </Container>
  );
}
