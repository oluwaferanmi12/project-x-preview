import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.75 16.25H17.5v-5.625l.183.183a.626.626 0 1 0 .884-.886l-7.683-7.681a1.25 1.25 0 0 0-1.768 0L1.433 9.922a.625.625 0 0 0 .884.884l.183-.18v5.624H1.25a.625.625 0 1 0 0 1.25h17.5a.624.624 0 1 0 0-1.25m-6.875 0h-3.75V12.5a.313.313 0 0 1 .313-.312h3.124a.313.313 0 0 1 .313.312z"
    />
  </svg>
);
export default SvgHomeIcon;
