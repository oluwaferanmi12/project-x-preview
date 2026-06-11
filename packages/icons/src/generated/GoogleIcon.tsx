import * as React from "react";
import type { SVGProps } from "react";
const SvgGoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#google-icon_svg__a)">
      <path
        fill="#4285F4"
        d="M19.804 10.23c0-.68-.055-1.363-.172-2.032h-9.433v3.851h5.402a4.63 4.63 0 0 1-2 3.04v2.498h3.223c1.893-1.742 2.98-4.314 2.98-7.357"
      />
      <path
        fill="#34A853"
        d="M10.2 20c2.697 0 4.971-.885 6.629-2.413l-3.223-2.499c-.896.61-2.054.955-3.402.955-2.61 0-4.821-1.76-5.615-4.126H1.264v2.576A10 10 0 0 0 10.2 20"
      />
      <path
        fill="#FBBC04"
        d="M4.585 11.917a6 6 0 0 1 0-3.829V5.512H1.263a10.01 10.01 0 0 0 0 8.98z"
      />
      <path
        fill="#EA4335"
        d="M10.2 3.958a5.43 5.43 0 0 1 3.836 1.5l2.855-2.856A9.6 9.6 0 0 0 10.2.001a10 10 0 0 0-8.936 5.511l3.321 2.576c.79-2.37 3.006-4.13 5.615-4.13"
      />
    </g>
    <defs>
      <clipPath id="google-icon_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoogleIcon;
