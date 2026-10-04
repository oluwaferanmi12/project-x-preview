"use client";

import { Container, GeneralSpacer, Text } from "@repo/ui";
import { Col, Row } from "antd";
import React, { useState } from "react";
import { HomePill } from "./home-pill";
import { FaqBox } from "./faq-box";

const FAQS = [
  {
    question: "How do I find a property?",
    answer:
      "Search by location, property type, budget, and other preferences to discover properties that match what you’re looking for.",
  },
  {
    question: "Can I use the platform as both a renter and a property lister?",
    answer:
      "Yes. You can switch between a renter profile and a property lister profile from your account, so you can search for homes and manage your own listings with one login.",
  },
  {
    question: "Can I contact a property owner or agent directly?",
    answer:
      "Yes. Once you find a property you like, you can reach the owner or agent directly to ask questions and arrange a viewing.",
  },
  {
    question: "Can I list a property if I’m an agent?",
    answer:
      "Yes. Agents can list properties on the platform with the same details and the same review process as any other listing.",
  },
  {
    question: "Are properties verified?",
    answer:
      "Every listing goes through a review before it is published, including a check of the property details and location. Reviews from other users also help you judge a listing with confidence.",
  },
  {
    question: "How do I list my property?",
    answer:
      "Create an account, choose the option to list a property, and add its details, photos and pricing step by step. Your listing is reviewed and goes live once it is approved.",
  },
  {
    question: "How much does it cost to list a property?",
    answer:
      "The cost depends on the plan you choose. You can see the current pricing in your account before you publish a listing.",
  },
];

export const Faq = () => {
  // One open at a time; the first starts open. Clicking the open one closes it.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container className="relative isolate overflow-hidden py-28 bg-surface">
      {/* Decorative tilted bars bleeding off each side of the section. Each is
          a 136 × 482 rounded block rotated 25.6° counter-clockwise about its
          top-left corner; top/left give that corner's position. They sit
          behind the content (-z-10 inside the isolated section). */}
      <Container
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 top-[259px] -left-[226px] h-[481.64px] w-[136.22px] origin-top-left rotate-[-25.6deg] rounded-4xl bg-[#E6BBBA]"
      />
      <Container
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 top-[261px] left-[calc(100%-81px)] h-[481.64px] w-[136.22px] origin-top-left rotate-[-25.6deg] rounded-4xl bg-p100"
      />
      <GeneralSpacer>
        <Row>
          <Col xs={12}>
            <HomePill text="Frequently Asked Questions" />
            <Container className="my-4 w-1/2">
              <Text tone="primary" variant="h2">
                Answers to your possible questions
              </Text>
            </Container>
            <Text variant="body-sm" tone="primary">
              Couldn&apos;t find something?{" "}
              <Text as="span" variant="action-button" tone="s500">
                Contact Us
              </Text>
            </Text>
          </Col>
          <Col xs={12}>
            <Container className="py-5 px-16">
              {FAQS.map((faq, index) => (
                <FaqBox
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </Container>
          </Col>
        </Row>
      </GeneralSpacer>
    </Container>
  );
};
