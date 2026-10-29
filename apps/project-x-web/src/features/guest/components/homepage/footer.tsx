import {
  FacebookIcon,
  FBIcon,
  InstagramIcon,
  LogoPlaceholderIcon,
  TiktokIcon,
  TTIcon,
  XIcon,
} from "@repo/icons";
import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
import Link from "next/link";
import React from "react";

export const HomeFooter = () => {
  const footerItemsOne = [
    { title: "Rent a Home" },
    { title: "List a Property" },
    { title: "Available Properties" },
    { title: "Contact Us" },
  ];
  const footerItemsTwo = [
    {
      title: "How It Works",
    },
    {
      title: "Coverage",
    },
    {
      title: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      title: "Terms of Use",
      link: "/terms-of-use",
    },
  ];
  return (
    <Container className="pt-12 landing-page-bg">
      <GeneralSpacer>
        <Container>
          <LogoPlaceholderIcon />
          <Container className="mt-6 flex lg:flex-row flex-col justify-between">
            <Container>
              <Text as="div" tone="primary" variant="h1">
                Find dream{" "}
                <Text as="span" variant="h1" className="text-s300">
                  properties{" "}
                  <Text as="span" variant="h1" tone="primary">
                    {" "}
                    to
                  </Text>
                </Text>{" "}
                rent.
              </Text>
              <Text className="mt-4">Various available options.</Text>
              <Container className="mt-6">
                <Button>Search Properties</Button>
              </Container>
            </Container>
            <Container className="flex flex-row gap-6 lg:mt-0 mt-14">
              <Container className="flex flex-col gap-4 pr-6.5">
                {footerItemsOne.map((item) => {
                  return (
                    <Container key={item.title} className="px-3 py-2">
                      <Text variant="action-button" tone="p300">
                        {item.title}
                      </Text>
                    </Container>
                  );
                })}
              </Container>
              <Container className="flex flex-col gap-4 pr-6.5">
                {footerItemsTwo.map((item) => {
                  const content = (
                    <Container className="px-3 py-2">
                      <Text variant="action-button" tone="p300">
                        {item.title}
                      </Text>
                    </Container>
                  );
                  return item.link ? (
                    <Link key={item.title} href={item.link}>
                      {content}
                    </Link>
                  ) : (
                    <React.Fragment key={item.title}>{content}</React.Fragment>
                  );
                })}
              </Container>
            </Container>
          </Container>
          <Container className="lg:mt-62.5 mt-20 mb-41 flex lg:flex-row flex-col gap-9 justify-between items-center">
            <Container className="flex items-center gap-6">
              <InstagramIcon size={20} className="text-secondary" />
              <FBIcon size={20} className="text-secondary" />
              <TTIcon size={20} className="text-secondary" />
              <XIcon size={20} className="text-secondary" />
            </Container>
            <Text variant="body-sm" tone="secondary">
              ©2026 Project X. All right Reserved.
            </Text>
          </Container>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
