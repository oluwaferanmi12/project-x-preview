import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitchControlActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 2 6"
    {...props}
  >
    <rect width={1} height={5} x={0.5} y={0.5} fill="currentColor" rx={0.5} />
    <rect width={1} height={5} x={0.5} y={0.5} stroke="currentColor" rx={0.5} />
  </svg>
);
export default SvgSwitchControlActive;
