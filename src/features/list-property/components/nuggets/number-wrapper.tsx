import { Container } from "@/components/common/container/container";
import { Text } from "@/components/common/text/text";
import React, { ReactNode } from "react";
import { NumberHeader } from "./number-header";
import ToolTipIcon from "@/assets/svgs/tooltip.svg";
import { Tooltip } from "@/components/common/tooltip/tooltip";

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
