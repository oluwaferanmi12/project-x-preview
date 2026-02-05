import { Col, Row } from "antd";
import React from "react";
import Logo from "@/assets/svgs/logo-placeholder.svg";
import { Container } from "@/components/common/container/container";
import Image from "next/image";

export const AuthLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Container
      as="section"
      className="house-bg min-h-screen pt-20 h-full bg-background"
    >
      <Row justify={"center"} align={"middle"} className="h-full">
        <Col xs={8}>
          <Logo />
          <Container className="mt-8">{children}</Container>
        </Col>
      </Row>
    </Container>
  );
};
