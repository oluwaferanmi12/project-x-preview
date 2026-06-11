import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 13"
    {...props}
  >
    <path
      fill="currentColor"
      d="m14.817 6.693-5.625 5.625a.625.625 0 1 1-.884-.885l4.558-4.558H.625a.625.625 0 0 1 0-1.25h12.241L8.308 1.068a.625.625 0 1 1 .884-.885l5.625 5.625a.626.626 0 0 1 0 .885"
    />
  </svg>
);
export default SvgArrowRight;
