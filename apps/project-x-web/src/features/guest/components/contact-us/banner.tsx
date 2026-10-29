import { FBIcon, InstagramIcon, TTIcon, XIcon } from "@repo/icons";
import { Container, GeneralSpacer, Text } from "@repo/ui";
import { Col, Row } from "antd";
import { ContactForm } from "./contact-form";

export const ContactBanner = () => {
  return (
    <GeneralSpacer>
      <Container className="contact-us !h-auto min-h-[80vh] rounded-2xl flex items-center px-6 py-10 lg:px-16">
        <Row gutter={[32, 32]} align="middle" className="w-full">
          <Col xs={24} lg={14}>
            <Text variant="body-sm" tone="inverted">
              Have a question? Let&apos;s talk.
            </Text>
            <Container className="lg:w-4/5 w-full">
              <Text variant="h1" tone="inverted" className="mt-4">
                Whatever you need help with. Send us a message.
              </Text>
            </Container>
            <Text variant="body-sm" tone="inverted" className="mt-10">
              Connect with us.
            </Text>
            <Container className="mt-4 flex items-center gap-6">
              <InstagramIcon size={20} className="text-inverted" />
              <FBIcon size={20} className="text-inverted" />
              <TTIcon size={20} className="text-inverted" />
              <XIcon size={20} className="text-inverted" />
            </Container>
          </Col>
          <Col xs={24} lg={10}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </GeneralSpacer>
  );
};
