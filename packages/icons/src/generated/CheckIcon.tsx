import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m17.443 5.068-10 10a.626.626 0 0 1-.885 0l-4.375-4.375a.625.625 0 1 1 .885-.885L7 13.742l9.558-9.559a.625.625 0 1 1 .884.885"
    />
  </svg>
);
export default SvgCheckIcon;
