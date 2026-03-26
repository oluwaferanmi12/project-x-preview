import { Col, Row } from "antd";
import React, { ReactNode } from "react";

export const GeneralSpacer = ({ children }: { children: ReactNode }) => {
  return (
    <Row justify={"center"} className="w-full">
      <Col xs={20}>{children}</Col>
    </Row>
  );
};
