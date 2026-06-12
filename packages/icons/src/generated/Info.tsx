import * as React from "react";
import type { SVGProps } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.125 2a8.125 8.125 0 1 0 8.125 8.125A8.133 8.133 0 0 0 10.125 2m-.312 3.75a.938.938 0 1 1 0 1.875.938.938 0 0 1 0-1.875m.937 8.75a1.25 1.25 0 0 1-1.25-1.25v-3.125a.625.625 0 1 1 0-1.25 1.25 1.25 0 0 1 1.25 1.25v3.125a.624.624 0 1 1 0 1.25"
    />
  </svg>
);
export default SvgInfo;
