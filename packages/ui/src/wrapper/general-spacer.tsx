import { Col, Row } from "antd";
import React, { ReactNode } from "react";

export const GeneralSpacer = ({ children }: { children: ReactNode }) => {
  return (
    <Row className="w-full">
      <Col xs={24}
        sm={22}
        md={20}
        className="lg:mx-auto">{children}</Col>
    </Row>
  );
};
