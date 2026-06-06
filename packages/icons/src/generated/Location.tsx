import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#location_svg__a)">
      <path
        fill="currentColor"
        d="M18.75 9.375h-1.904a6.885 6.885 0 0 0-6.221-6.221V1.25a.625.625 0 1 0-1.25 0v1.904a6.885 6.885 0 0 0-6.221 6.221H1.25a.625.625 0 0 0 0 1.25h1.904a6.885 6.885 0 0 0 6.221 6.221v1.904a.625.625 0 1 0 1.25 0v-1.904a6.885 6.885 0 0 0 6.221-6.221h1.904a.624.624 0 1 0 0-1.25M10 15.625A5.625 5.625 0 1 1 15.625 10 5.63 5.63 0 0 1 10 15.625m0-8.75a3.125 3.125 0 1 0 0 6.25 3.125 3.125 0 0 0 0-6.25m0 5a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75"
      />
    </g>
    <defs>
      <clipPath id="location_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLocation;
