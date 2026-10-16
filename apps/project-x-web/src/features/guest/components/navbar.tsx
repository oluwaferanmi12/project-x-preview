"use client";

import { useState } from "react";
import { CloseIcon, LogoPlaceholderIcon, Menu } from "@repo/icons";
import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
import Link from "next/link";

const NAV_ITEMS = [
  { text: "Available Properties", link: "/available-properties" },
  { text: "How It Works", link: "" },
  { text: "Coverage", link: "" },
  { text: "Contact us", link: "" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container className="relative bg-surface py-4.5">
      <GeneralSpacer>
        <Container className="flex items-center justify-between">
          <Link href="/" aria-label="Go to home page">
            <LogoPlaceholderIcon className="text-primary" />
          </Link>

          <Container className="hidden items-center lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link key={item.text} href={item.link}>
                <Container className="px-3 py-2">
                  <Text variant="action-button" tone="p300">
                    {item.text}
                  </Text>
                </Container>
              </Link>
            ))}
          </Container>

          <Container className="hidden items-center gap-5 lg:flex">
            <Button variant="secondary" shorter title="List a property">
              List a property
            </Button>
            <Button shorter title="Rent a home">
              Rent a home
            </Button>
          </Container>

          <Button
            variant="transparent"
            shorter
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="text-primary lg:hidden"
          >
            {open ? <CloseIcon size={24} /> : <Menu size={24} />}
          </Button>
        </Container>
      </GeneralSpacer>

      {open && (
        <Container className="absolute inset-x-0 top-full z-50 border-t border-line bg-surface pb-5 shadow-lg lg:hidden">
          <GeneralSpacer>
            <Container className="flex flex-col pt-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.text}
                  href={item.link}
                  onClick={() => setOpen(false)}
                >
                  <Container className="py-3">
                    <Text variant="action-button" tone="p300">
                      {item.text}
                    </Text>
                  </Container>
                </Link>
              ))}
            </Container>
            <Container className="mt-3 flex flex-col gap-3">
              <Button variant="secondary" fullWidth>
                List a property
              </Button>
              <Button fullWidth>Rent a home</Button>
            </Container>
          </GeneralSpacer>
        </Container>
      )}
    </Container>
  );
};
