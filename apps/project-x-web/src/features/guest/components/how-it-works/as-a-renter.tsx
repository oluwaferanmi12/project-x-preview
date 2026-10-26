import { SearchIcon, BookmarkIcon, MessagesIcon, PriceIcon } from "@repo/icons";
import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
import { Row, Col } from "antd";

export const AsARenter = () => {
  const items = [
    {
      icon: <SearchIcon size={20} className="text-inverted" />,
      title: "Explore properties",
      subtitle:
        "Browse available properties with clear details, photos, pricing, and location information.",
    },
    {
      icon: <BookmarkIcon size={20} className="text-inverted" />,
      title: "Compare your options",
      subtitle:
        "Save interesting properties in one place so you can easily come back to them.",
    },
    {
      icon: <MessagesIcon size={20} className="text-inverted" />,
      title: "Connect with the lister",
      subtitle:
        "Reach out to the owner or agent when you find a property you’re interested in.",
    },
    {
      icon: <PriceIcon size={20} className="text-inverted" />,
      title: "Make your move",
      subtitle:
        "Reach out to the owner or agent when you find a property you’re interested in.",
    },
  ];
  return (
    <Container className="py-9.5 bg-s50">
      <GeneralSpacer>
        <Row className="pt-12">
          <Col xs={8}>
            <Container className="flex flex-col gap-6">
              <Text className="w-[90%]" variant="h2">
                As a{" "}
                <Text variant="h2" className="text-s300" as="span">
                  Renter
                </Text>{" "}
                find a place that feels right.
              </Text>
              <Text tone="primary" variant="body-lg">
                Explore and compare your options, then connect with property
                listers directly.
              </Text>
              <Container className="flex">
                <Button variant="secondary">Get Started!</Button>
              </Container>
            </Container>
          </Col>
          <Col xs={16}>
            <Container className="px-12">
              <Row gutter={[32, 72]}>
                {items.map((item) => {
                  return (
                    <Col key={item.title} xs={12}>
                      <Container className="flex flex-col items-start gap-5">
                        {/* Only the background is tilted; the icon stays upright. */}
                        <Container className="relative p-2.5">
                          <Container className="absolute inset-0 rotate-[8deg] bg-s300 rounded-t-sm rounded-bl-sm rounded-br-2xl" />
                          <Container className="relative">
                            {item.icon}
                          </Container>
                        </Container>
                        <Text tone="primary" variant="h5">
                          {item.title}
                        </Text>
                        <Text variant="body-sm" tone="primary">
                          {item.subtitle}
                        </Text>
                      </Container>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </GeneralSpacer>
    </Container>
  );
};
