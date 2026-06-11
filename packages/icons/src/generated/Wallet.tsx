import * as React from "react";
import type { SVGProps } from "react";
const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.022 5.456h-12.5a.625.625 0 1 1 0-1.25h10.625a.625.625 0 0 0 0-1.25H4.52a1.875 1.875 0 0 0-1.875 1.875v10a1.875 1.875 0 0 0 1.875 1.875h12.5a1.25 1.25 0 0 0 1.25-1.25v-8.75a1.25 1.25 0 0 0-1.25-1.25m0 10h-12.5a.625.625 0 0 1-.626-.625V6.6c.201.071.413.107.625.107h12.5zm-3.75-4.687a.938.938 0 1 1 1.875 0 .938.938 0 0 1-1.876 0"
    />
  </svg>
);
export default SvgWallet;
