import {
  FacebookIcon,
  InstagramIcon,
  LogoPlaceholderIcon,
  TiktokIcon,
  XIcon,
} from "@repo/icons";
import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
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
    },
    {
      title: "Terms of Use",
    },
  ];
  return (
    <Container className="pt-12 landing-page-bg">
      <GeneralSpacer>
        <Container>
          <LogoPlaceholderIcon />
          <Container className="mt-6 flex justify-between">
            <Container>
              <Text tone="primary" variant="h1">
                Find dream{" "}
                <Text variant="h1" className="text-s300">
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
            <Container className="flex flex-row gap-6">
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
                  return (
                    <Container key={item.title} className="px-3 py-2">
                      <Text variant="action-button" tone="p300">
                        {item.title}
                      </Text>
                    </Container>
                  );
                })}
              </Container>
            </Container>
          </Container>
          <Container className="mt-62.5 mb-41 flex justify-between items-center">
            <Container className="flex items-center gap-6">
              <InstagramIcon size={20} className="text-secondary" />
              <FacebookIcon size={20} className="text-secondary" />
              <TiktokIcon size={20} className="text-secondary" />
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
