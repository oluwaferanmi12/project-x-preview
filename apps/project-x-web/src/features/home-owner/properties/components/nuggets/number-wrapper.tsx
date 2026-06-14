import { Container } from "@repo/ui";
import { Text } from "@repo/ui";
import React, { ReactNode } from "react";
import { NumberHeader } from "./number-header";
import { Tooltip as ToolTipIcon } from "@repo/icons";
import { Tooltip } from "@repo/ui";

export const NumberWrapper = ({
  children,
  serialNo,
  text,
  showToolTip,
}: {
  children: ReactNode;
  serialNo: string;
  text: string;
  showToolTip?: boolean;
}) => {
  return (
    <Container className="mb-12 gap-3">
      <Container className="flex items-center gap-1 mb-6">
        <NumberHeader serialNo={serialNo} text={text} />
        {showToolTip && (
          <Tooltip
            trigger={<ToolTipIcon className="text-p100" />}
            content={<></>}
          />
        )}
      </Container>
      <Container className="flex flex-col gap-4">{children}</Container>
    </Container>
  );
};
