"use client";

import { useState } from "react";
import { CheckIcon } from "@repo/icons";
import { Button, Container, Input, Select, Textarea } from "@repo/ui";

const TOPIC_OPTIONS = [
  { label: "What can we help you with?", value: "" },
  { label: "Renting a home", value: "renting" },
  { label: "Listing a property", value: "listing" },
  { label: "Something else", value: "other" },
];

const fieldClass = "!bg-background placeholder:!text-primary";

export const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container
      as="form"
      className="w-full rounded-3xl bg-surface p-5"
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
    >
      <Input
        label="Full Name"
        hideLabel
        placeholder="Full Name"
        className={fieldClass}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        label="Email Address"
        hideLabel
        type="email"
        placeholder="Email Address"
        className={fieldClass}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Select
        label="What can we help you with?"
        hideLabel
        options={TOPIC_OPTIONS}
        className="!bg-background [&>span]:!text-primary"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Textarea
        aria-label="Message"
        placeholder="Message"
        className={`${fieldClass} min-h-[140px]`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        type="submit"
        variant="secondary"
        fullWidth
        rightIcon={<CheckIcon size={16} />}
      >
        Send message
      </Button>
    </Container>
  );
};
