import { UserIcon, PropertiesIcon, AgentIcon, Success } from "@repo/icons";
import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
import { Row, Col } from "antd";

export const GetYourProperty = () => {
  const items = [
    {
      icon: <UserIcon size={20} className="text-inverted" />,
      title: "Create your profile",
      subtitle:
        "Tell us who you are and whether you’re listing as an owner or agent.",
    },
    {
      icon: <PropertiesIcon size={20} className="text-inverted" />,
      title: "Add your property",
      subtitle:
        "Provide details about the property, including its location, features, rent, and additional fees.",
    },
    {
      icon: <AgentIcon size={20} className="text-inverted" />,
      title: "Submit for review",
      subtitle:
        "Your listing goes through our review process to check the information before it goes live.",
    },
    {
      icon: <Success size={20} className="text-inverted" />,
      title: "Connect with renters",
      subtitle:
        "Once approved, renters can discover your property and get in touch with you.",
    },
  ];
  return (
    <Container className="py-9.5 bg-p50">
      <GeneralSpacer>
        <Row className="pt-12">
          <Col xs={8}>
            <Container className="flex flex-col gap-6">
              <Text className="w-[90%]" tone="primary" variant="h2">
                Get your property in front of the right people.
              </Text>
              <Text tone="primary" variant="body-lg">
                Whether you’re an owner or an agent, connect with renters
                looking for a home.
              </Text>
              <Container className="flex">
                <Button variant="primary">Get Started!</Button>
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
                          <Container className="absolute inset-0 rotate-[8deg] bg-p300 rounded-t-sm rounded-bl-sm rounded-br-2xl" />
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
