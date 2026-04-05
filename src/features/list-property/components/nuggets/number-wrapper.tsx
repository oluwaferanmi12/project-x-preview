import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import React, { ReactNode } from "react";
import { NumberHeader } from "./number-header";

export const NumberWrapper = ({
  children,
  serialNo,
  text,
}: {
  children: ReactNode;
  serialNo: string;
  text: string;
}) => {
  return (
    <Container className="mb-12 gap-3">
      <NumberHeader serialNo={serialNo} text={text} />
      <Container className="flex flex-col gap-4">{children}</Container>
    </Container>
  );
};
