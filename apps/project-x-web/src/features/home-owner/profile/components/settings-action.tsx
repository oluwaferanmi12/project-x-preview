import { Button, Container, Text } from "@repo/ui";
import type { ReactNode } from "react";
import {
  ChevronRight,
  // MenuKeyIcon,
  // MenuUserIcon,
  // MenuTrashIcon,
} from "@repo/icons";

// const settingsIcons = {
//   key: MenuKeyIcon,
//   user: MenuUserIcon,
//   trash: MenuTrashIcon,
// };

export function SettingsAction({
  kind,
  onClick,
  children,
}: {
  kind: "key" | "user" | "trash";
  onClick: () => void;
  children: ReactNode;
}) {
  // const Icon = settingsIcons[kind];

  return (
    <></>
    // <Button
    //   variant="transparent"
    //   fullWidth
    //   type="button"
    //   className={`mt-[18px] flex h-9 !items-stretch !gap-0.5 !bg-transparent !p-0 text-left text-[13px] font-bold first-of-type:mt-0 ${kind === "trash" ? "!text-d300" : "!text-primary"}`}
    //   onClick={onClick}
    // >
    //   <Container
    //     as="span"
    //     aria-hidden="true"
    //     className={`relative w-10 shrink-0 overflow-hidden rounded-[12px_4px_4px_12px] [&_svg]:absolute [&_svg]:top-3 [&_svg]:left-[7px] [&_svg]:size-[26px] ${kind === "trash" ? "bg-d50" : kind === "key" ? "bg-muted text-indigo-fore" : "bg-muted text-persian-red-fore"}`}
    //   >
    //     <Icon size={26} className="[&_path]:fill-current" />
    //   </Container>
    //   <Container
    //     as="span"
    //     className={`flex min-w-0 flex-1 items-center justify-between gap-2 rounded-[4px_12px_12px_4px] pr-2.5 pl-2 [&>svg]:shrink-0 ${kind === "trash" ? "bg-d50" : "bg-muted"}`}
    //   >
    //     <Text
    //       as="span"
    //       variant="action-label"
    //       className="text-[13px] font-bold"
    //     >
    //       {children}
    //     </Text>
    //     <Container as="span" aria-hidden="true" className="shrink-0">
    //       <ChevronRight size={16} />
    //     </Container>
    //   </Container>
    // </Button>
  );
}
