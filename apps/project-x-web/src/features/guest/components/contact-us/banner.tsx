import { Container, GeneralSpacer, Text } from "@repo/ui";
import { Col, Row } from "antd";

export const ContactBanner = () => {
  return (
    <GeneralSpacer>
      <Container className="contact-us rounded-2xl">
        <Row>
          <Col xs={16} className="flex  items-center">
            <Row>
              <Col xs={12}>
                <Container>
                  <Text variant="bodyRegular">Have a question? Let&apos;s talk</Text>
                </Container>
              </Col>
              <Col xs={12}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </GeneralSpacer>
  );
};
