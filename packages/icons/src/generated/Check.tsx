import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="m15.443 1.068-10 10a.626.626 0 0 1-.885 0L.183 6.693a.625.625 0 0 1 .885-.885L5 9.742 14.558.183a.625.625 0 1 1 .885.885"
    />
  </svg>
);
export default SvgCheck;
