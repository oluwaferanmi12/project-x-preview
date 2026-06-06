import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 13"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.318 11.433a.624.624 0 1 1-.885.885L6.25 7.134l-5.182 5.184a.625.625 0 1 1-.885-.885L5.367 6.25.183 1.068a.625.625 0 1 1 .885-.885L6.25 5.367 11.433.183a.625.625 0 1 1 .885.885L7.134 6.25z"
    />
  </svg>
);
export default SvgClose;
