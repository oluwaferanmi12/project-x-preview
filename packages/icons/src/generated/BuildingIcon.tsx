import * as React from "react";
import type { SVGProps } from "react";
const SvgBuildingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#building-icon_svg__a)">
      <path
        fill="currentColor"
        d="M18.75 16.25H17.5V7.5a1.25 1.25 0 0 0-1.25-1.25h-5V2.5a1.25 1.25 0 0 0-1.944-1.04l-6.25 4.165A1.25 1.25 0 0 0 2.5 6.667v9.583H1.25a.625.625 0 1 0 0 1.25h17.5a.625.625 0 0 0 0-1.25m-2.5-8.75v8.75h-5V7.5zm-12.5-.833L10 2.5v13.75H3.75zm5 2.083V10a.625.625 0 0 1-1.25 0V8.75a.625.625 0 0 1 1.25 0m-2.5 0V10A.625.625 0 0 1 5 10V8.75a.625.625 0 0 1 1.25 0m0 4.375v1.25a.625.625 0 0 1-1.25 0v-1.25a.625.625 0 1 1 1.25 0m2.5 0v1.25a.625.625 0 0 1-1.25 0v-1.25a.625.625 0 1 1 1.25 0"
      />
    </g>
    <defs>
      <clipPath id="building-icon_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBuildingIcon;
