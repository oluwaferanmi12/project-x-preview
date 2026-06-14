import * as React from "react";

export interface IconProps {
  size?: number | string;
  className?: string;
  color?: string;
}

export const ArrowLeft = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="m2.684 10.442 5.625 5.625a.626.626 0 0 0 .884-.884l-4.558-4.558h12.241a.625.625 0 0 0 0-1.25H4.635l4.558-4.558a.625.625 0 0 0-.884-.884L2.684 9.558a.625.625 0 0 0 0 .884"
    />
  </svg>
);

export const ArrowRight = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 15 13"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="m14.817 6.693-5.625 5.625a.625.625 0 1 1-.884-.885l4.558-4.558H.625a.625.625 0 0 1 0-1.25h12.241L8.308 1.068a.625.625 0 1 1 .884-.885l5.625 5.625a.626.626 0 0 1 0 .885"
    />
  </svg>
);

export const BellBadge = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M13.125 17.5a.625.625 0 0 1-.625.625h-5a.625.625 0 1 1 0-1.25h5a.625.625 0 0 1 .625.625m4.207-2.5a1.23 1.23 0 0 1-1.082.625H3.75a1.25 1.25 0 0 1-1.078-1.88c.434-.747 1.078-2.86 1.078-5.62a6.25 6.25 0 0 1 12.5 0c0 2.76.646 4.873 1.08 5.62A1.24 1.24 0 0 1 17.331 15m-1.082-.625c-.604-1.037-1.25-3.434-1.25-6.25a5 5 0 0 0-10 0c0 2.817-.647 5.214-1.25 6.25z"
    />
    <rect width={6} height={6} x={11.5} y={2} fill="#EF1212" rx={3} />
  </svg>
);

export const Briefcase = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M16.875 4.375H13.75V3.75a1.875 1.875 0 0 0-1.875-1.875h-3.75A1.875 1.875 0 0 0 6.25 3.75v.625H3.125a1.25 1.25 0 0 0-1.25 1.25v10a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25v-10a1.25 1.25 0 0 0-1.25-1.25M7.5 3.75a.625.625 0 0 1 .625-.625h3.75a.625.625 0 0 1 .625.625v.625h-5zm9.375 1.875v3.25a14.381 14.381 0 0 1-13.75 0v-3.25zm0 10H3.125v-5.34a15.64 15.64 0 0 0 13.75-.001zM8.125 8.75a.625.625 0 0 1 .625-.625h2.5a.625.625 0 1 1 0 1.25h-2.5a.625.625 0 0 1-.625-.625"
    />
  </svg>
);

export const BuildingIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
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

export const ChatIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 17 17"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M16.25 8.122a8.125 8.125 0 0 1-11.944 7.173l-2.66.887A1.25 1.25 0 0 1 .065 14.6l.887-2.66A8.125 8.125 0 1 1 16.25 8.12"
    />
  </svg>
);

export const Check = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 12"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="m15.443 1.068-10 10a.626.626 0 0 1-.885 0L.183 6.693a.625.625 0 0 1 .885-.885L5 9.742 14.558.183a.625.625 0 1 1 .885.885"
    />
  </svg>
);

export const CheckIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="m17.443 5.068-10 10a.626.626 0 0 1-.885 0l-4.375-4.375a.625.625 0 1 1 .885-.885L7 13.742l9.558-9.559a.625.625 0 1 1 .884.885"
    />
  </svg>
);

export const ChevronArrowDown = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="m13.354 6.354-5 5a.5.5 0 0 1-.707 0l-5-5a.5.5 0 1 1 .707-.708L8 10.293l4.647-4.647a.5.5 0 0 1 .707.708"
    />
  </svg>
);

export const ChevronRight = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 8 14"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="m7.318 7.318-6.25 6.25a.625.625 0 1 1-.885-.885l5.809-5.808L.183 1.068a.625.625 0 1 1 .885-.885l6.25 6.25a.625.625 0 0 1 0 .885"
    />
  </svg>
);

export const Close = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 13 13"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M12.318 11.433a.624.624 0 1 1-.885.885L6.25 7.134l-5.182 5.184a.625.625 0 1 1-.885-.885L5.367 6.25.183 1.068a.625.625 0 1 1 .885-.885L6.25 5.367 11.433.183a.625.625 0 1 1 .885.885L7.134 6.25z"
    />
  </svg>
);

export const Crown = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M19.376 6.25a2.188 2.188 0 1 0-3.994 1.232l-2.093 2.578-1.882-4.326a2.187 2.187 0 1 0-2.817 0l-1.878 4.324L4.62 7.48a2.187 2.187 0 1 0-2.078.937l1.131 6.788a1.25 1.25 0 0 0 1.233 1.045h10.19a1.25 1.25 0 0 0 1.234-1.045l1.13-6.785a2.19 2.19 0 0 0 1.917-2.17M10 3.125A.937.937 0 1 1 10 5a.937.937 0 0 1 0-1.875M1.876 6.25a.938.938 0 1 1 1.875 0 .938.938 0 0 1-1.875 0M15.096 15H4.906L3.817 8.478l2.572 3.163a.625.625 0 0 0 .863.107.6.6 0 0 0 .196-.249l2.29-5.265q.261.031.524 0l2.29 5.265a.625.625 0 0 0 1.058.142l2.572-3.166zm2.092-7.813a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.875"
    />
  </svg>
);

export const Danger = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M10.125 2a8.125 8.125 0 1 0 8.125 8.125A8.133 8.133 0 0 0 10.125 2m2.942 10.183a.624.624 0 1 1-.884.884l-2.058-2.058-2.058 2.058a.624.624 0 1 1-.884-.884l2.058-2.058-2.058-2.058a.625.625 0 0 1 .884-.884l2.058 2.058 2.058-2.058a.626.626 0 0 1 .884.884l-2.058 2.058z"
    />
  </svg>
);

export const DashIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M8 3H4.25A1.25 1.25 0 0 0 3 4.25V8a1.25 1.25 0 0 0 1.25 1.25H8A1.25 1.25 0 0 0 9.25 8V4.25A1.25 1.25 0 0 0 8 3m0 5H4.25V4.25H8zm7.5-5h-3.75a1.25 1.25 0 0 0-1.25 1.25V8a1.25 1.25 0 0 0 1.25 1.25h3.75A1.25 1.25 0 0 0 16.75 8V4.25A1.25 1.25 0 0 0 15.5 3m0 5h-3.75V4.25h3.75zM8 10.5H4.25A1.25 1.25 0 0 0 3 11.75v3.75a1.25 1.25 0 0 0 1.25 1.25H8a1.25 1.25 0 0 0 1.25-1.25v-3.75A1.25 1.25 0 0 0 8 10.5m0 5H4.25v-3.75H8zm7.5-5h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25m0 5h-3.75v-3.75h3.75z"
    />
  </svg>
);

export const EyeClosed = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M17.813 13.672a.626.626 0 0 1-.853-.235l-1.485-2.593a9.6 9.6 0 0 1-2.818 1.301l.458 2.752a.624.624 0 1 1-1.23.205l-.451-2.701c-.95.132-1.915.132-2.866 0l-.45 2.701a.625.625 0 1 1-1.235-.205l.461-2.752a9.6 9.6 0 0 1-2.817-1.304l-1.48 2.597a.628.628 0 0 1-1.089-.626l1.563-2.734a12 12 0 0 1-1.508-1.562.625.625 0 1 1 .973-.782C4.283 9.34 6.552 11.25 10 11.25s5.718-1.913 7.015-3.516a.624.624 0 1 1 .971.782 12 12 0 0 1-1.507 1.562l1.562 2.735a.625.625 0 0 1-.228.859"
    />
  </svg>
);

export const EyeOpened = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M19.696 9.997c-.027-.062-.689-1.53-2.16-3C15.576 5.035 13.1 4 10.375 4s-5.2 1.036-7.16 2.996c-1.472 1.471-2.137 2.941-2.161 3a.63.63 0 0 0 0 .509c.027.061.689 1.529 2.16 3 1.96 1.96 4.436 2.995 7.161 2.995s5.2-1.036 7.16-2.995c1.472-1.471 2.134-2.939 2.161-3a.63.63 0 0 0 0-.508m-9.321 5.253c-2.405 0-4.505-.874-6.245-2.598a10.4 10.4 0 0 1-1.802-2.402A10.4 10.4 0 0 1 4.13 7.848C5.87 6.124 7.97 5.25 10.375 5.25s4.506.874 6.244 2.598c.715.709 1.324 1.518 1.807 2.402-.563 1.052-3.017 5-8.051 5m0-8.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"
    />
  </svg>
);

export const FacebookIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    color={color}
  >
    <g clipPath="url(#facebook-icon_svg__a)">
      <path
        fill="#FAFAFA"
        d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12"
      />
    </g>
    <defs>
      <clipPath id="facebook-icon_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const GoogleIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
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

export const HandRentIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M10.007 4.483a2.813 2.813 0 0 1 4.31-2.173.312.312 0 0 1-.044.546 4.07 4.07 0 0 0-2.389 3.98.312.312 0 0 1-.468.293 2.81 2.81 0 0 1-1.409-2.646m8.743 8.065a1.91 1.91 0 0 1-1.062 1.719l-.035.015-3.033 1.292a.5.5 0 0 1-.093.032l-5 1.25a.6.6 0 0 1-.152.02H1.25A1.25 1.25 0 0 1 0 15.625V12.5a1.25 1.25 0 0 1 1.25-1.25h2.241L5.26 9.482a2.49 2.49 0 0 1 1.768-.732h3.91a2.188 2.188 0 0 1 2.13 2.692l3.268-.752a1.924 1.924 0 0 1 2.415 1.858m-1.25 0a.672.672 0 0 0-.85-.649l-.023.007-5.235 1.204a.7.7 0 0 1-.14.015H8.75a.625.625 0 1 1 0-1.25h2.188a.938.938 0 0 0 0-1.875H7.027a1.24 1.24 0 0 0-.884.367l-1.768 1.767v3.491h4.922l4.877-1.22 2.969-1.263a.67.67 0 0 0 .357-.594m-4.375-5.985a2.813 2.813 0 1 0 5.626 0 2.813 2.813 0 0 0-5.626 0"
    />
  </svg>
);

export const HomeIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M18.75 16.25H17.5v-5.625l.183.183a.626.626 0 1 0 .884-.886l-7.683-7.681a1.25 1.25 0 0 0-1.768 0L1.433 9.922a.625.625 0 0 0 .884.884l.183-.18v5.624H1.25a.625.625 0 1 0 0 1.25h17.5a.624.624 0 1 0 0-1.25m-6.875 0h-3.75V12.5a.313.313 0 0 1 .313-.312h3.124a.313.313 0 0 1 .313.312z"
    />
  </svg>
);

export const Info = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M10.125 2a8.125 8.125 0 1 0 8.125 8.125A8.133 8.133 0 0 0 10.125 2m-.312 3.75a.938.938 0 1 1 0 1.875.938.938 0 0 1 0-1.875m.937 8.75a1.25 1.25 0 0 1-1.25-1.25v-3.125a.625.625 0 1 1 0-1.25 1.25 1.25 0 0 1 1.25 1.25v3.125a.624.624 0 1 1 0 1.25"
    />
  </svg>
);

export const InstagramIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    color={color}
  >
    <g fill="#FAFAFA" clipPath="url(#instagram-icon_svg__a)">
      <path d="M12 2.16c3.206 0 3.586.015 4.847.071 1.172.052 1.805.249 2.226.413a3.7 3.7 0 0 1 1.379.895c.421.422.68.82.895 1.378.164.422.36 1.06.412 2.227.057 1.265.07 1.645.07 4.847 0 3.206-.013 3.586-.07 4.846-.051 1.172-.248 1.805-.412 2.227-.216.558-.478.961-.895 1.378a3.7 3.7 0 0 1-1.379.895c-.421.165-1.059.361-2.226.413-1.266.056-1.645.07-4.847.07-3.206 0-3.586-.014-4.847-.07-1.172-.052-1.805-.248-2.226-.413a3.7 3.7 0 0 1-1.379-.895 3.7 3.7 0 0 1-.895-1.378c-.164-.422-.36-1.06-.412-2.227-.057-1.265-.07-1.645-.07-4.846 0-3.207.013-3.586.07-4.847.051-1.172.248-1.805.412-2.227.216-.558.478-.96.895-1.378.422-.422.82-.68 1.379-.895.421-.164 1.059-.361 2.226-.413 1.261-.056 1.64-.07 4.847-.07M12 0C8.742 0 8.334.014 7.055.07 5.78.127 4.903.333 4.144.628a5.86 5.86 0 0 0-2.128 1.388A5.9 5.9 0 0 0 .628 4.139C.333 4.903.127 5.775.07 7.05.014 8.334 0 8.742 0 12s.014 3.666.07 4.945c.057 1.275.263 2.152.558 2.911.31.792.717 1.463 1.388 2.128a5.9 5.9 0 0 0 2.123 1.383c.764.296 1.636.502 2.911.558 1.28.056 1.688.07 4.945.07s3.666-.014 4.946-.07c1.275-.056 2.151-.262 2.91-.558a5.9 5.9 0 0 0 2.124-1.383 5.9 5.9 0 0 0 1.383-2.123c.295-.764.501-1.636.558-2.911.056-1.28.07-1.687.07-4.945s-.014-3.666-.07-4.946c-.057-1.275-.263-2.151-.558-2.91a5.6 5.6 0 0 0-1.374-2.133A5.9 5.9 0 0 0 19.861.633C19.097.338 18.225.13 16.95.075 15.666.015 15.258 0 12 0" />
      <path d="M12 5.836A6.166 6.166 0 0 0 5.836 12 6.166 6.166 0 0 0 12 18.164 6.166 6.166 0 0 0 18.164 12 6.166 6.166 0 0 0 12 5.836m0 10.162A3.999 3.999 0 1 1 12.001 8 3.999 3.999 0 0 1 12 15.998M19.847 5.592a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0" />
    </g>
    <defs>
      <clipPath id="instagram-icon_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const LightClock = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M8 1.5A6.5 6.5 0 1 0 14.5 8 6.507 6.507 0 0 0 8 1.5m0 12A5.5 5.5 0 1 1 13.5 8 5.506 5.506 0 0 1 8 13.5M12 8a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V4.5a.5.5 0 1 1 1 0v3h3a.5.5 0 0 1 .5.5"
    />
  </svg>
);

export const LinkedinIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    color={color}
  >
    <g clipPath="url(#linkedin-icon_svg__a)">
      <path
        fill="#FAFAFA"
        d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0M7.12 20.452H3.558V8.995H7.12zM5.34 7.434a2.064 2.064 0 1 1 0-4.125 2.063 2.063 0 0 1 0 4.125m15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457z"
      />
    </g>
    <defs>
      <clipPath id="linkedin-icon_svg__a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Location = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
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

export const LogoutIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 15 15"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M6.25 14.375a.625.625 0 0 1-.625.625h-5A.625.625 0 0 1 0 14.375V.625A.625.625 0 0 1 .625 0h5a.625.625 0 0 1 0 1.25H1.25v12.5h4.375a.625.625 0 0 1 .625.625m8.567-7.317-3.125-3.125a.625.625 0 0 0-.884.884l2.058 2.058H5.625a.625.625 0 0 0 0 1.25h7.241l-2.058 2.058a.625.625 0 0 0 .884.884l3.125-3.125a.626.626 0 0 0 0-.884"
    />
  </svg>
);

export const MediumIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M24 11.828c0 3.179-.533 5.758-1.19 5.758-.658 0-1.19-2.578-1.19-5.758s.532-5.759 1.19-5.759S24 8.647 24 11.828M20.963 11.828c0 3.549-1.515 6.427-3.384 6.427-1.87 0-3.385-2.878-3.385-6.427 0-3.55 1.515-6.428 3.384-6.428 1.87 0 3.385 2.877 3.385 6.428M13.537 11.828c0 3.77-3.03 6.827-6.768 6.827S0 15.598 0 11.828 3.03 5 6.769 5c3.738 0 6.768 3.057 6.768 6.828"
    />
  </svg>
);

export const Menu = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M17.5 10a.624.624 0 0 1-.625.625H3.125a.625.625 0 1 1 0-1.25h13.75A.625.625 0 0 1 17.5 10M3.125 5.625h13.75a.625.625 0 1 0 0-1.25H3.125a.625.625 0 0 0 0 1.25m13.75 8.75H3.125a.625.625 0 1 0 0 1.25h13.75a.624.624 0 1 0 0-1.25"
    />
  </svg>
);

export const OutlineMessages = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M18.13 14.59a6.25 6.25 0 0 0-4.883-8.919 6.25 6.25 0 1 0-11.378 5.17L1.3 12.77a1.25 1.25 0 0 0 1.552 1.552l1.93-.568a6.3 6.3 0 0 0 1.968.575 6.25 6.25 0 0 0 8.464 3.176l1.93.567a1.25 1.25 0 0 0 1.553-1.551zM4.843 12.46a.7.7 0 0 0-.176.026l-2.168.639.639-2.169a.63.63 0 0 0-.05-.468 5 5 0 1 1 2.052 2.051.6.6 0 0 0-.297-.078m12.015 2.246.641 2.169-2.168-.638a.63.63 0 0 0-.47.049 5.004 5.004 0 0 1-6.708-1.944 6.244 6.244 0 0 0 5.495-7.333 5 5 0 0 1 3.262 7.225.63.63 0 0 0-.05.472z"
    />
  </svg>
);

export const OutlineStar = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M18.685 7.598a1.28 1.28 0 0 0-1.114-.88l-4.61-.371-1.779-4.304a1.279 1.279 0 0 0-2.365 0L7.04 6.346l-4.611.373a1.286 1.286 0 0 0-.732 2.254l3.515 3.034-1.07 4.536a1.28 1.28 0 0 0 1.913 1.392L10 15.507l3.948 2.428a1.282 1.282 0 0 0 1.912-1.392l-1.075-4.537 3.515-3.033a1.28 1.28 0 0 0 .386-1.375m-1.198.428-3.805 3.281a.62.62 0 0 0-.2.618l1.163 4.906a.03.03 0 0 1-.013.038c-.015.01-.018.008-.03 0l-4.275-2.63a.63.63 0 0 0-.655 0L5.397 16.87c-.012.007-.015.01-.03 0a.03.03 0 0 1-.013-.037l1.163-4.906a.63.63 0 0 0-.2-.618L2.512 8.027c-.01-.007-.018-.014-.01-.039.008-.024.014-.02.026-.022l4.993-.403a.63.63 0 0 0 .525-.386L9.97 2.52c.006-.014.008-.02.027-.02s.021.006.027.02l1.929 4.657a.62.62 0 0 0 .527.384l4.994.403c.011 0 .018 0 .025.023.008.022 0 .031-.012.039"
    />
  </svg>
);

export const Phone = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M15.616 11.803a4.395 4.395 0 0 1-4.366 3.822C5.047 15.625 0 10.578 0 4.375A4.395 4.395 0 0 1 3.822.009 1.25 1.25 0 0 1 5.12.753l1.65 3.684v.009a1.25 1.25 0 0 1-.143 1.239L5 7.613c.585 1.19 1.829 2.422 3.034 3.009l1.901-1.618a1.25 1.25 0 0 1 1.244-.153l.01.004 3.68 1.65a1.25 1.25 0 0 1 .747 1.298"
    />
  </svg>
);

export const ProfileIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 17 16"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M16.174 14.69c-1.19-2.057-3.024-3.532-5.164-4.232a5.626 5.626 0 1 0-5.754 0c-2.14.699-3.974 2.174-5.164 4.232a.625.625 0 1 0 1.082.625c1.472-2.544 4.074-4.063 6.959-4.063s5.487 1.519 6.958 4.063a.626.626 0 1 0 1.083-.625M3.758 5.627a4.375 4.375 0 1 1 8.75 0 4.375 4.375 0 0 1-8.75 0"
    />
  </svg>
);

export const ProfileSync = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M6.875 8.125h-3.75A.625.625 0 0 1 2.5 7.5V3.75a.625.625 0 0 1 1.25 0v2.241L4.893 4.85a7.46 7.46 0 0 1 5.263-2.197h.042a7.45 7.45 0 0 1 5.24 2.135.626.626 0 0 1-.874.894 6.21 6.21 0 0 0-4.366-1.78h-.036a6.22 6.22 0 0 0-4.385 1.831L4.634 6.875h2.241a.625.625 0 0 1 0 1.25m10 3.75h-3.75a.625.625 0 1 0 0 1.25h2.241l-1.143 1.143a6.22 6.22 0 0 1-4.385 1.83h-.035a6.21 6.21 0 0 1-4.366-1.778.624.624 0 1 0-.874.893 7.45 7.45 0 0 0 5.24 2.136h.04a7.46 7.46 0 0 0 5.263-2.197l1.144-1.143v2.241a.625.625 0 1 0 1.25 0V12.5a.625.625 0 0 0-.625-.625"
    />
  </svg>
);

export const QuestionNavIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M15.453 7.375c0 2.227-1.912 4.071-4.375 4.34v.66a.625.625 0 1 1-1.25 0v-1.25a.625.625 0 0 1 .625-.625c2.068 0 3.75-1.402 3.75-3.125s-1.682-3.125-3.75-3.125-3.75 1.402-3.75 3.125a.625.625 0 1 1-1.25 0c0-2.412 2.243-4.375 5-4.375s5 1.963 5 4.375m-5 7.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
    />
  </svg>
);

export const RadioIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      stroke="currentColor"
      strokeWidth={4}
      d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"
    />
  </svg>
);

export const SettingsIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 18 17"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M8.751 4.377a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m8.59-4.125a.62.62 0 0 0-.305-.421l-2.33-1.329-.01-2.626a.63.63 0 0 0-.22-.475 8.7 8.7 0 0 0-2.87-1.615.63.63 0 0 0-.504.046l-2.35 1.314L6.397.08a.63.63 0 0 0-.505-.047 8.8 8.8 0 0 0-2.866 1.621.63.63 0 0 0-.22.474l-.013 2.63-2.33 1.327a.63.63 0 0 0-.304.422 8.3 8.3 0 0 0 0 3.247.63.63 0 0 0 .304.422l2.33 1.328.01 2.627a.63.63 0 0 0 .22.474 8.7 8.7 0 0 0 2.87 1.615.63.63 0 0 0 .504-.046l2.353-1.317 2.354 1.317a.62.62 0 0 0 .505.045 8.8 8.8 0 0 0 2.866-1.62.62.62 0 0 0 .22-.474l.012-2.629 2.33-1.328a.63.63 0 0 0 .305-.422 8.3 8.3 0 0 0-.003-3.244M16.168 9.23l-2.232 1.27a.6.6 0 0 0-.235.234q-.068.119-.141.239a.6.6 0 0 0-.096.329l-.011 2.52c-.6.47-1.269.847-1.982 1.116L9.22 13.684a.6.6 0 0 0-.305-.079h-.3a.63.63 0 0 0-.32.079l-2.253 1.258a7.5 7.5 0 0 1-1.988-1.112l-.008-2.516a.63.63 0 0 0-.095-.33 5 5 0 0 1-.141-.239.63.63 0 0 0-.234-.239L1.34 9.234a7 7 0 0 1 0-2.208L3.57 5.754a.6.6 0 0 0 .235-.234q.068-.12.141-.24a.6.6 0 0 0 .095-.328l.012-2.52a7.5 7.5 0 0 1 1.982-1.117L8.283 2.57a.6.6 0 0 0 .32.078h.284a.63.63 0 0 0 .32-.078l2.254-1.258a7.5 7.5 0 0 1 1.987 1.111l.009 2.516c0 .117.033.23.095.33q.074.116.14.239c.056.1.137.182.235.239l2.235 1.273c.117.732.118 1.477.003 2.21z"
    />
  </svg>
);

export const SpinIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M10.674 2.065v2.5a.625.625 0 1 1-1.25 0v-2.5a.625.625 0 0 1 1.25 0m2.91 4.59a.63.63 0 0 0 .442-.184l1.768-1.767a.625.625 0 1 0-.884-.885l-1.767 1.768a.625.625 0 0 0 .441 1.068m3.965 2.285h-2.5a.625.625 0 0 0 0 1.25h2.5a.625.625 0 1 0 0-1.25m-3.523 3.719a.625.625 0 0 0-.883.883l1.767 1.768a.625.625 0 1 0 .884-.884zm-3.977 1.28a.625.625 0 0 0-.625.626v2.5a.625.625 0 1 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625M6.07 12.66l-1.767 1.767a.625.625 0 1 0 .884.884l1.767-1.768a.625.625 0 0 0-.884-.883m-.397-3.094a.625.625 0 0 0-.625-.625h-2.5a.625.625 0 0 0 0 1.25h2.5a.625.625 0 0 0 .625-.625m-.486-5.746a.625.625 0 1 0-.884.885L6.07 6.47a.625.625 0 0 0 .884-.884z"
    />
  </svg>
);

export const SubscriptionIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 19 13"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M18.456.94a.63.63 0 0 0-.605-.03c-3.354 1.64-5.75.871-8.281.06C6.913.12 4.16-.76.355 1.098A.63.63 0 0 0 0 1.663v9.37a.625.625 0 0 0 .9.56c3.353-1.64 5.748-.871 8.284-.06 1.504.48 3.035.97 4.766.97 1.335 0 2.791-.29 4.446-1.098a.63.63 0 0 0 .35-.561v-9.37a.63.63 0 0 0-.29-.533m-.956 9.506c-3.172 1.42-5.488.679-7.934-.103-1.504-.48-3.035-.97-4.766-.97a9.5 9.5 0 0 0-3.547.703V2.06c3.172-1.42 5.488-.679 7.935.103s4.964 1.59 8.312.269zM9.375 3.753a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M3.75 3.753v3.75a.625.625 0 0 1-1.25 0v-3.75a.625.625 0 0 1 1.25 0m11.25 5v-3.75a.625.625 0 1 1 1.25 0v3.75a.625.625 0 1 1-1.25 0"
    />
  </svg>
);

export const Success = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M10.383 1.875A8.125 8.125 0 1 0 18.508 10a8.133 8.133 0 0 0-8.125-8.125m3.567 6.692-4.375 4.375a.626.626 0 0 1-.884 0l-1.875-1.875a.625.625 0 1 1 .884-.884l1.433 1.433 3.933-3.933a.626.626 0 0 1 .884.884"
    />
  </svg>
);

export const SwitchControlActive = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 2 6"
    className={className}
    color={color}
  >
    <rect width={1} height={5} x={0.5} y={0.5} fill="currentColor" rx={0.5} />
    <rect width={1} height={5} x={0.5} y={0.5} stroke="currentColor" rx={0.5} />
  </svg>
);

export const SwitchControlInactive = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 6 6"
    className={className}
    color={color}
  >
    <rect width={5} height={5} x={0.5} y={0.5} stroke="currentColor" rx={2.5} />
  </svg>
);

export const ThemeToggleIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M13.438 5.625q-.486 0-.965.078A5.62 5.62 0 0 0 8.139.768a.625.625 0 0 0-.75.748 4.38 4.38 0 0 1-5.247 5.248.625.625 0 0 0-.75.75 5.64 5.64 0 0 0 2.524 3.52A4.062 4.062 0 0 0 7.188 17.5h6.25a5.937 5.937 0 0 0 0-11.875M2.92 8.125h.206A5.63 5.63 0 0 0 8.75 2.5v-.209a4.35 4.35 0 0 1 2.5 3.75 5.96 5.96 0 0 0-3.36 3.391 4.06 4.06 0 0 0-3.047.692A4.4 4.4 0 0 1 2.92 8.125m10.518 8.125h-6.25a2.812 2.812 0 1 1 .374-5.6q-.045.277-.06.564a.626.626 0 1 0 1.25.072q.026-.469.146-.923c0-.012.007-.025.01-.037a4.692 4.692 0 1 1 4.53 5.924"
    />
  </svg>
);

export const TiktokIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M17.073 0h-4.045v16.348c0 1.948-1.556 3.548-3.492 3.548s-3.491-1.6-3.491-3.548c0-1.913 1.52-3.478 3.388-3.548V8.696C5.319 8.766 2 12.139 2 16.348 2 20.59 5.388 24 9.57 24c4.184 0 7.572-3.443 7.572-7.652V7.965A9.37 9.37 0 0 0 22.5 9.774V5.67c-3.042-.105-5.427-2.61-5.427-5.67"
    />
  </svg>
);

export const Tooltip = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M10 1.875A8.125 8.125 0 1 0 18.125 10 8.133 8.133 0 0 0 10 1.875m-.312 3.75a.938.938 0 1 1 0 1.875.938.938 0 0 1 0-1.875m.937 8.75a1.25 1.25 0 0 1-1.25-1.25V10a.625.625 0 0 1 0-1.25 1.25 1.25 0 0 1 1.25 1.25v3.125a.624.624 0 1 1 0 1.25"
    />
  </svg>
);

export const UploadImage = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 26 22"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M24 0H6a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6 2h18v7.844l-1.259-1.258a2 2 0 0 0-2.828 0l-2.5 2.5-5.5-5.5a2 2 0 0 0-2.828 0L6 8.671zm14 18H2V6h2v10a2 2 0 0 0 2 2h14zm4-4H6v-4.5L10.5 7l6.208 6.208a1 1 0 0 0 1.413 0L21.33 10 24 12.672zM17 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
    />
  </svg>
);

export const VerifiedCheck = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 13 13"
    className={className}
    color={color}
  >
    <path
      fill="#0EA5E9"
      d="M11.477 4.748c-.207-.216-.42-.438-.5-.633-.075-.179-.079-.475-.083-.762-.008-.534-.017-1.139-.438-1.56-.42-.42-1.025-.429-1.559-.437-.287-.004-.583-.009-.762-.083-.195-.08-.417-.294-.633-.5C7.125.411 6.696 0 6.125 0c-.57 0-1 .41-1.377.773-.216.206-.438.42-.633.5-.178.075-.475.079-.762.083-.534.008-1.139.017-1.56.438-.42.42-.426 1.025-.437 1.559-.004.287-.009.583-.083.762-.08.195-.294.417-.5.633C.411 5.125 0 5.554 0 6.125c0 .57.41 1 .773 1.377.206.216.42.438.5.633.075.179.079.475.083.762.008.534.017 1.139.438 1.56.42.42 1.025.428 1.559.437.287.004.583.008.762.083.195.08.417.293.633.5.377.362.806.773 1.377.773.57 0 1-.41 1.377-.773.216-.207.438-.42.633-.5.179-.075.475-.079.762-.083.534-.008 1.139-.017 1.56-.438.42-.42.428-1.025.437-1.559.004-.287.008-.583.083-.762.08-.195.293-.417.5-.633.362-.377.773-.806.773-1.377 0-.57-.41-1-.773-1.377m-2.855.374L5.56 8.185a.437.437 0 0 1-.62 0L3.628 6.872a.438.438 0 0 1 .619-.619L5.25 7.256l2.753-2.753a.438.438 0 1 1 .619.619"
    />
  </svg>
);

export const Wallet = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M17.022 5.456h-12.5a.625.625 0 1 1 0-1.25h10.625a.625.625 0 0 0 0-1.25H4.52a1.875 1.875 0 0 0-1.875 1.875v10a1.875 1.875 0 0 0 1.875 1.875h12.5a1.25 1.25 0 0 0 1.25-1.25v-8.75a1.25 1.25 0 0 0-1.25-1.25m0 10h-12.5a.625.625 0 0 1-.626-.625V6.6c.201.071.413.107.625.107h12.5zm-3.75-4.687a.938.938 0 1 1 1.875 0 .938.938 0 0 1-1.876 0"
    />
  </svg>
);

export const Warning = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M18.5 14.387 11.67 2.522a1.934 1.934 0 0 0-3.336 0L1.5 14.387a1.84 1.84 0 0 0 0 1.853 1.9 1.9 0 0 0 1.668.952h13.664a1.9 1.9 0 0 0 1.666-.952 1.84 1.84 0 0 0 .002-1.853m-9.124-6.57a.625.625 0 0 1 1.25 0v3.125a.625.625 0 1 1-1.25 0zM10 14.692a.938.938 0 1 1 0-1.875.938.938 0 0 1 0 1.875"
    />
  </svg>
);

export const WhiteInfo = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 17 17"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M8.125 0a8.125 8.125 0 1 0 8.125 8.125A8.133 8.133 0 0 0 8.125 0m-.312 3.75a.937.937 0 1 1 0 1.875.937.937 0 0 1 0-1.875m.937 8.75a1.25 1.25 0 0 1-1.25-1.25V8.125a.625.625 0 0 1 0-1.25 1.25 1.25 0 0 1 1.25 1.25v3.125a.625.625 0 1 1 0 1.25"
    />
  </svg>
);

export const XIcon = ({
  size = 20,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M18.962 1h3.678l-8.077 9.124L24 22.5h-7.405l-5.799-7.521L4.16 22.5H.479l8.558-9.758L0 1h7.59l5.238 6.87zm-1.288 19.358h2.04L6.517 3.063H4.327z"
    />
  </svg>
);

export const DarkModeIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    color={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4382 5.62497C13.1147 5.62483 12.7918 5.65095 12.4726 5.7031C12.359 4.52994 11.8795 3.42218 11.1018 2.53653C10.3241 1.65088 9.2876 1.03217 8.13896 0.767944C8.0358 0.744244 7.92832 0.747131 7.82658 0.776334C7.72484 0.805537 7.63219 0.860099 7.55731 0.934903C7.48242 1.00971 7.42777 1.1023 7.39846 1.20401C7.36915 1.30572 7.36615 1.4132 7.38974 1.51638C7.53695 2.15768 7.53774 2.82391 7.39207 3.46556C7.24639 4.10721 6.95799 4.70778 6.54829 5.22265C6.13859 5.73751 5.61813 6.15343 5.02559 6.43949C4.43305 6.72555 3.78366 6.8744 3.12568 6.87497C2.79469 6.87502 2.46475 6.83781 2.14208 6.76404C2.03885 6.74029 1.93127 6.74316 1.82945 6.7724C1.72763 6.80164 1.63492 6.85628 1.56001 6.93118C1.48511 7.00609 1.43047 7.0988 1.40123 7.20062C1.37199 7.30244 1.36911 7.41002 1.39286 7.51326C1.56077 8.23727 1.87006 8.92097 2.30298 9.52509C2.73589 10.1292 3.2839 10.6419 3.91552 11.0336C3.4713 11.6387 3.20346 12.3552 3.14171 13.1033C3.07997 13.8515 3.22673 14.6021 3.56573 15.2719C3.90472 15.9418 4.42268 16.5045 5.06212 16.8978C5.70156 17.2911 6.43747 17.4996 7.18818 17.5H13.4382C15.0129 17.5 16.5231 16.8744 17.6366 15.7609C18.7501 14.6474 19.3757 13.1372 19.3757 11.5625C19.3757 9.98775 18.7501 8.47753 17.6366 7.36403C16.5231 6.25053 15.0129 5.62497 13.4382 5.62497ZM2.92021 8.12497C2.98818 8.12497 3.05693 8.12497 3.12568 8.12497C4.61701 8.12332 6.04679 7.53016 7.10133 6.47562C8.15586 5.42109 8.74902 3.99131 8.75068 2.49997C8.75068 2.43044 8.75068 2.36091 8.75068 2.29138C9.47038 2.62818 10.084 3.15584 10.5248 3.817C10.9655 4.47816 11.2166 5.2475 11.2507 6.04138C10.4873 6.34452 9.79481 6.8022 9.21671 7.38568C8.63861 7.96916 8.18736 8.66585 7.8913 9.43201C7.36289 9.34057 6.8216 9.35466 6.29866 9.47346C5.77572 9.59226 5.28147 9.81343 4.84443 10.1242C4.00384 9.68322 3.32873 8.9818 2.92021 8.12497ZM13.4382 16.25H7.18818C6.80351 16.2493 6.42307 16.1697 6.0704 16.0161C5.71772 15.8625 5.4003 15.6382 5.13776 15.357C4.87522 15.0759 4.67314 14.7439 4.54402 14.3815C4.41491 14.0192 4.36149 13.6342 4.38708 13.2504C4.41267 12.8666 4.51673 12.4921 4.69281 12.1501C4.86889 11.8081 5.11326 11.5058 5.4108 11.262C5.70834 11.0182 6.05273 10.838 6.42268 10.7326C6.79262 10.6272 7.18026 10.5988 7.56161 10.6492C7.53271 10.8343 7.5124 11.0234 7.50146 11.214C7.49674 11.2961 7.50823 11.3783 7.53528 11.4559C7.56233 11.5336 7.60441 11.6051 7.65911 11.6665C7.71381 11.7279 7.78006 11.7779 7.85408 11.8136C7.9281 11.8494 8.00845 11.8703 8.09052 11.875C8.1726 11.8797 8.2548 11.8682 8.33243 11.8412C8.41007 11.8141 8.48162 11.772 8.54299 11.7173C8.60436 11.6626 8.65436 11.5964 8.69013 11.5224C8.7259 11.4483 8.74674 11.368 8.75146 11.2859C8.76899 10.9742 8.8182 10.665 8.89833 10.3633C8.89833 10.3508 8.90537 10.3383 8.90771 10.3258C9.13743 9.48157 9.59859 8.71843 10.2391 8.12249C10.8796 7.52655 11.674 7.12156 12.5326 6.95325C13.3911 6.78494 14.2796 6.86001 15.0977 7.16998C15.9158 7.47996 16.631 8.01249 17.1625 8.70745C17.6939 9.4024 18.0205 10.2321 18.1053 11.1029C18.1902 11.9736 18.0299 12.8508 17.6425 13.6352C17.2552 14.4197 16.6562 15.0802 15.9133 15.5423C15.1704 16.0043 14.3131 16.2494 13.4382 16.25Z"
      fill="currentColor"
    />
  </svg>
);
export const SwitchIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path
      d="M6.875 8.12501H3.125C2.95924 8.12501 2.80027 8.05916 2.68306 7.94195C2.56585 7.82474 2.5 7.66577 2.5 7.50001V3.75001C2.5 3.58425 2.56585 3.42528 2.68306 3.30807C2.80027 3.19086 2.95924 3.12501 3.125 3.12501C3.29076 3.12501 3.44973 3.19086 3.56694 3.30807C3.68415 3.42528 3.75 3.58425 3.75 3.75001V5.99142L4.89297 4.84845C6.28688 3.44752 8.18 2.65734 10.1562 2.65158H10.1977C12.1571 2.64653 14.0396 3.41363 15.4375 4.78673C15.5516 4.9035 15.6155 5.06029 15.6156 5.22358C15.6156 5.38686 15.5517 5.54367 15.4375 5.66045C15.3234 5.77722 15.1681 5.8447 15.0049 5.84845C14.8416 5.85219 14.6834 5.7919 14.5641 5.68048C13.3989 4.53679 11.8303 3.89775 10.1977 3.90158H10.1625C8.51577 3.90664 6.93834 4.56498 5.77656 5.73204L4.63359 6.87501H6.875C7.04076 6.87501 7.19973 6.94086 7.31694 7.05807C7.43415 7.17528 7.5 7.33425 7.5 7.50001C7.5 7.66577 7.43415 7.82474 7.31694 7.94195C7.19973 8.05916 7.04076 8.12501 6.875 8.12501ZM16.875 11.875H13.125C12.9592 11.875 12.8003 11.9409 12.6831 12.0581C12.5658 12.1753 12.5 12.3343 12.5 12.5C12.5 12.6658 12.5658 12.8247 12.6831 12.942C12.8003 13.0592 12.9592 13.125 13.125 13.125H15.3664L14.2234 14.268C13.0619 15.4349 11.4847 16.0932 9.83828 16.0984H9.80313C8.17045 16.1023 6.60189 15.4632 5.43672 14.3195C5.37851 14.26 5.30898 14.2127 5.23222 14.1804C5.15546 14.1481 5.07302 14.1314 4.98974 14.1314C4.90646 14.1314 4.82402 14.1481 4.74727 14.1804C4.67051 14.2127 4.60099 14.26 4.54278 14.3196C4.48457 14.3792 4.43886 14.4497 4.40832 14.5272C4.37778 14.6047 4.36303 14.6875 4.36494 14.7708C4.36685 14.854 4.38538 14.9361 4.41944 15.012C4.4535 15.088 4.5024 15.1565 4.56328 15.2133C5.96115 16.5864 7.84369 17.3535 9.80313 17.3484H9.84375C11.8197 17.3425 13.7125 16.5523 15.1062 15.1516L16.25 14.0086V16.25C16.25 16.4158 16.3158 16.5747 16.4331 16.692C16.5503 16.8092 16.7092 16.875 16.875 16.875C17.0408 16.875 17.1997 16.8092 17.3169 16.692C17.4342 16.5747 17.5 16.4158 17.5 16.25V12.5C17.5 12.3343 17.4342 12.1753 17.3169 12.0581C17.1997 11.9409 17.0408 11.875 16.875 11.875Z"
      fill="currentColor"
    />
  </svg>
);
