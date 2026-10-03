import { LogoPlaceholderIcon } from "@repo/icons";
import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
import Link from "next/link";

export const Navbar = () => {
  const navItems = [
    { text: "Available Properties", link: "" },
    { text: "How It Works", link: "" },
    { text: "Coverage", link: "" },
    { text: "Contact us", link: "" },
  ];
  return (
    <Container className="py-4.5 bg-surface">
      <GeneralSpacer>
        <Container className="flex items-center justify-between">
          <Container>
            <LogoPlaceholderIcon className="text-primary" />
          </Container>
          <Container className="flex items-center">
            {navItems.map((item) => {
              return (
                <Link key={item.text} href={item.link}>
                  <Container className="py-2 px-3">
                    <Text variant="action-button" tone="p300">
                      {item.text}
                    </Text>
                  </Container>
                </Link>
              );
            })}
          </Container>
          <Container className="flex items-center gap-5">
            <Button variant="secondary" shorter title="List a property">
              {" "}
              List a property{" "}
            </Button>
            <Button shorter title="Rent a home">
              {" "}
              Rent a home{" "}
            </Button>
          </Container>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
