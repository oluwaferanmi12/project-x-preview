import { Col, Row } from "antd";
import React, { ReactNode } from "react";

export const GuestSpacer = ({ children }: { children: ReactNode }) => {
  return (
    <Row justify={"center"} align={"middle"}>
      <Col xs={22}>{children}</Col>
    </Row>
  );
};
