import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="m2.684 10.442 5.625 5.625a.626.626 0 0 0 .884-.884l-4.558-4.558h12.241a.625.625 0 0 0 0-1.25H4.635l4.558-4.558a.625.625 0 0 0-.884-.884L2.684 9.558a.625.625 0 0 0 0 .884"
    />
  </svg>
);
export default SvgArrowLeft;
