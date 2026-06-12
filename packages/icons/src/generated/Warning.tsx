import * as React from "react";
import type { SVGProps } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5 14.387 11.67 2.522a1.934 1.934 0 0 0-3.336 0L1.5 14.387a1.84 1.84 0 0 0 0 1.853 1.9 1.9 0 0 0 1.668.952h13.664a1.9 1.9 0 0 0 1.666-.952 1.84 1.84 0 0 0 .002-1.853m-9.124-6.57a.625.625 0 0 1 1.25 0v3.125a.625.625 0 1 1-1.25 0zM10 14.692a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.875"
    />
  </svg>
);
export default SvgWarning;
