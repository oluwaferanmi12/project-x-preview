import { Col, Row } from "antd";
import React from "react";
import { LogoPlaceholder } from "@/assets/images";
import { Container } from "@repo/ui";

export const AuthLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container
      as="section"
      className="house-bg min-h-screen px-6 py-10 md:px-0 md:pt-20 h-full bg-background"
    >
      <Row className="h-full">
        <Col
          xs={24}
          sm={18}
          md={12}
          lg={8}
          xl={6}
          className="mx-auto"
        >
          <img src={LogoPlaceholder} alt="Logo" />
          <Container className="mt-8">{children}</Container>
        </Col>
      </Row>
    </Container>
  );
};
