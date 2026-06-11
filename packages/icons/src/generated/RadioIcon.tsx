import * as React from "react";
import type { SVGProps } from "react";
const SvgRadioIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={4}
      d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"
    />
  </svg>
);
export default SvgRadioIcon;
