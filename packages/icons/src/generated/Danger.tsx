import * as React from "react";
import type { SVGProps } from "react";
const SvgDanger = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.125 2a8.125 8.125 0 1 0 8.125 8.125A8.133 8.133 0 0 0 10.125 2m2.942 10.183a.624.624 0 1 1-.884.884l-2.058-2.058-2.058 2.058a.624.624 0 1 1-.884-.884l2.058-2.058-2.058-2.058a.625.625 0 0 1 .884-.884l2.058 2.058 2.058-2.058a.626.626 0 0 1 .884.884l-2.058 2.058z"
    />
  </svg>
);
export default SvgDanger;
