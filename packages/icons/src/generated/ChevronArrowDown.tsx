import * as React from "react";
import type { SVGProps } from "react";
const SvgChevronArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="m13.354 6.354-5 5a.5.5 0 0 1-.707 0l-5-5a.5.5 0 1 1 .707-.708L8 10.293l4.647-4.647a.5.5 0 0 1 .707.708"
    />
  </svg>
);
export default SvgChevronArrowDown;
