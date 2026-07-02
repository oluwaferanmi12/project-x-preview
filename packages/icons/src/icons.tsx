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


export const PlusIcon = ({
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
      d="M15 7.5C15 7.66576 14.9342 7.82473 14.8169 7.94194C14.6997 8.05915 14.5408 8.125 14.375 8.125H8.125V14.375C8.125 14.5408 8.05915 14.6997 7.94194 14.8169C7.82473 14.9342 7.66576 15 7.5 15C7.33424 15 7.17527 14.9342 7.05806 14.8169C6.94085 14.6997 6.875 14.5408 6.875 14.375V8.125H0.625C0.45924 8.125 0.300269 8.05915 0.183058 7.94194C0.0658481 7.82473 0 7.66576 0 7.5C0 7.33424 0.0658481 7.17527 0.183058 7.05806C0.300269 6.94085 0.45924 6.875 0.625 6.875H6.875V0.625C6.875 0.45924 6.94085 0.300269 7.05806 0.183058C7.17527 0.0658481 7.33424 0 7.5 0C7.66576 0 7.82473 0.0658481 7.94194 0.183058C8.05915 0.300269 8.125 0.45924 8.125 0.625V6.875H14.375C14.5408 6.875 14.6997 6.94085 14.8169 7.05806C14.9342 7.17527 15 7.33424 15 7.5Z"
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
        fill="currentColor"
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
    <g fill="currentColor" clipPath="url(#instagram-icon_svg__a)">
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
        fill="currentColor"
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
export const LogoPlaceholderIcon = ({ size = 120, className, color = "currentColor", }: IconProps) => (
  <svg
    width={size}
    height={typeof size === "number" ? (size * 24) / 147 : undefined}
    viewBox="0 0 147 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <g clipPath="url(#logo-placeholder-icon_svg__a)">
      <path d="M14.1189 22.1602C14.1189 22.1602 13.4696 23.3237 14.4707 23.5943C15.9318 23.9731 16.4459 21.5649 16.4459 21.5649L14.1189 22.1602Z" fill="#121212" />
      <path d="M14.3617 22.2143C14.3617 22.2143 13.3876 24.3789 12.0077 23.946C10.6278 23.5131 12.3865 22.052 12.3865 22.052L14.3617 22.2143Z" fill="#121212" />
      <path d="M12.5764 21.9164C12.5764 21.9164 10.6283 24.8386 9.38364 23.594C8.68015 22.8905 9.89774 21.24 9.89774 21.24L12.5764 21.9164Z" fill="#121212" />
      <path d="M13.5508 0C7.4088 0 2.43022 4.97858 2.43022 11.1477C2.43022 12.0135 2.53845 12.8794 2.72785 13.6911C1.91612 14.1511 0.887939 15.044 0.833824 16.5321H2.64668C2.64668 16.5321 0.455019 17.7768 0.373847 19.6708L2.02435 19.292C2.02435 19.292 0.184444 21.0778 0.103271 22.9448L5.78535 19.1026C7.7876 21.0778 10.5475 22.2954 13.5779 22.2954C19.72 22.2954 24.6985 17.2897 24.6985 11.1477C24.6985 4.97858 19.72 0 13.5508 0Z" fill="#0476D0" />
      <path d="M11.3589 19.5086L19.8279 4.89756C19.8279 4.89756 15.1469 1.02834 11.3589 4.22113C7.02967 7.87389 7.76022 16.7217 11.3589 19.5086Z" fill="white" />
      <path d="M16.3106 7.60318C16.3106 9.01017 15.1742 10.1736 13.7401 10.1736C12.3061 10.1736 11.1697 9.03722 11.1697 7.60318C11.1697 6.19619 12.3061 5.03271 13.7401 5.03271C15.1742 5.03271 16.3106 6.19619 16.3106 7.60318Z" fill="#121212" />
      <path d="M16.3103 15.2605L24.5087 22.0519C24.5087 22.0519 34.2765 8.90196 21.803 5.51978L16.3103 15.2605Z" fill="#000080" />
      <path d="M25.5906 10.1736C25.5906 10.1736 27.8905 11.9594 26.0776 14.3404C26.267 12.257 25.5906 10.1736 25.5906 10.1736Z" fill="white" />
      <path d="M38.7161 7.03509V20.0227H35.9021V5.68221H37.3632C38.0938 5.65516 38.7161 6.30454 38.7161 7.03509ZM50.3508 14.4759C50.3508 18.3181 48.6462 20.2662 45.264 20.2662C41.8818 20.2662 40.2042 18.3181 40.2042 14.4759C40.2042 10.5796 41.8818 8.68559 45.264 8.68559C48.6462 8.68559 50.3508 10.6067 50.3508 14.4759ZM43.0453 14.4759C43.0723 16.6405 43.8029 17.7499 45.2369 17.7499C46.671 17.7499 47.4015 16.6134 47.4015 14.3947C47.4015 12.2301 46.671 11.1478 45.2369 11.1478C43.8029 11.1478 43.0453 12.2572 43.0453 14.4759ZM52.0284 14.2594C52.1095 10.6608 54.0306 8.84794 57.7646 8.84794H58.1704V11.7702H57.2234C55.6541 11.7702 54.8694 12.5819 54.8694 14.2053V20.0227H52.0284V14.2594ZM64.7725 20.2662C61.3903 20.158 59.7127 18.2098 59.7127 14.3947C59.7127 10.6067 61.4173 8.68559 64.8266 8.68559C68.3711 8.68559 70.0487 10.8502 69.8322 15.2335H62.6079C62.7161 16.9381 63.4466 17.804 64.8266 17.804C65.476 17.804 66.0983 17.5334 66.6394 16.9922C66.8829 16.7217 67.2076 16.5864 67.5864 16.5864H69.6428C69.0205 18.9674 67.5053 20.2662 64.7725 20.2662ZM62.6349 13.2313H66.8288C66.6665 11.7431 65.963 10.9855 64.7725 10.9855C63.5819 10.9855 62.8514 11.7431 62.6349 13.2313ZM74.2967 12.8795V20.0227H71.4557V13.4477C71.4557 10.2549 73.0521 8.68559 76.2448 8.68559C77.6789 8.68559 78.7882 9.01028 79.5729 9.63261C80.3846 9.01028 81.4669 8.71265 82.901 8.71265C86.0938 8.71265 87.6631 10.282 87.636 13.4748V20.0497H86.1749C85.255 19.9956 84.795 19.5357 84.795 18.6698V12.9336C84.7409 11.7701 84.0915 11.2019 82.8469 11.2019C81.6022 11.2019 80.9799 11.7701 80.9528 12.9336V20.0227H78.1118V12.8795C78.0577 11.716 77.4083 11.1478 76.1637 11.1478C74.9461 11.1478 74.2967 11.716 74.2967 12.8795ZM97.3497 7.03509V20.0227H94.5357V5.68221H95.9968C96.7274 5.65516 97.3497 6.30454 97.3497 7.03509ZM108.984 14.4759C108.984 18.3181 107.28 20.2662 103.898 20.2662C100.515 20.2662 98.8378 18.3181 98.8378 14.4759C98.8378 10.5796 100.515 8.68559 103.898 8.68559C107.28 8.68559 108.984 10.6067 108.984 14.4759ZM101.706 14.4759C101.733 16.6405 102.464 17.7499 103.898 17.7499C105.332 17.7499 106.062 16.6134 106.062 14.3947C106.062 12.2301 105.332 11.1478 103.898 11.1478C102.437 11.1478 101.706 12.2572 101.706 14.4759ZM110.662 14.2594C110.743 10.6608 112.664 8.84794 116.398 8.84794H116.804V11.7702H115.857C114.288 11.7702 113.503 12.5819 113.503 14.2053V20.0227H110.662V14.2594ZM123.406 20.2662C120.024 20.158 118.346 18.2098 118.346 14.3947C118.346 10.6067 120.051 8.68559 123.46 8.68559C127.005 8.68559 128.682 10.8502 128.466 15.2335H121.241C121.35 16.9381 122.08 17.804 123.46 17.804C124.11 17.804 124.732 17.5334 125.273 16.9922C125.517 16.7217 125.841 16.5864 126.22 16.5864H128.276C127.681 18.9674 126.139 20.2662 123.406 20.2662ZM121.269 13.2313H125.462C125.3 11.7431 124.597 10.9855 123.406 10.9855C122.216 10.9855 121.485 11.7431 121.269 13.2313ZM132.93 12.8795V20.0227H130.089V13.4477C130.089 10.2549 131.686 8.68559 134.878 8.68559C136.312 8.68559 137.422 9.01028 138.207 9.63261C139.018 9.01028 140.101 8.71265 141.535 8.71265C144.727 8.71265 146.297 10.282 146.27 13.4748V20.0497H144.836C143.916 19.9956 143.456 19.5357 143.456 18.6698V12.9336C143.402 11.7701 142.752 11.2019 141.508 11.2019C140.263 11.2019 139.641 11.7701 139.614 12.9336V20.0227H136.772V12.8795C136.718 11.716 136.069 11.1478 134.824 11.1478C133.58 11.1478 132.93 11.716 132.93 12.8795Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="logo-placeholder-icon_svg__a">
        <rect width="146.341" height="24" fill={color} />
      </clipPath>
    </defs>
  </svg>
);

export const PropertyPendingIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M10.3867 1.72656C8.77975 1.72656 7.20886 2.20309 5.87271 3.09587C4.53656 3.98866 3.49516 5.25761 2.8802 6.74226C2.26524 8.22691 2.10434 9.86058 2.41784 11.4367C2.73135 13.0128 3.50518 14.4605 4.64148 15.5968C5.77778 16.7331 7.22552 17.5069 8.80161 17.8204C10.3777 18.1339 12.0114 17.973 13.496 17.3581C14.9807 16.7431 16.2496 15.7017 17.1424 14.3656C18.0352 13.0294 18.5117 11.4585 18.5117 9.85156C18.5094 7.69738 17.6527 5.63207 16.1295 4.10883C14.6062 2.58559 12.5409 1.72884 10.3867 1.72656ZM13.5117 10.4766H7.26172C7.09596 10.4766 6.93699 10.4107 6.81978 10.2935C6.70257 10.1763 6.63672 10.0173 6.63672 9.85156C6.63672 9.6858 6.70257 9.52683 6.81978 9.40962C6.93699 9.29241 7.09596 9.22656 7.26172 9.22656H13.5117C13.6775 9.22656 13.8365 9.29241 13.9537 9.40962C14.0709 9.52683 14.1367 9.6858 14.1367 9.85156C14.1367 10.0173 14.0709 10.1763 13.9537 10.2935C13.8365 10.4107 13.6775 10.4766 13.5117 10.4766Z" fill="currentColor" />

  </svg>
);


export const PropertyInProgressIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M10.125 2C8.51803 2 6.94714 2.47652 5.611 3.36931C4.27485 4.2621 3.23344 5.53105 2.61848 7.0157C2.00352 8.50035 1.84262 10.134 2.15612 11.7101C2.46963 13.2862 3.24346 14.7339 4.37976 15.8702C5.51606 17.0065 6.9638 17.7804 8.5399 18.0939C10.116 18.4074 11.7497 18.2465 13.2343 17.6315C14.719 17.0166 15.9879 15.9752 16.8807 14.639C17.7735 13.3029 18.25 11.732 18.25 10.125C18.2477 7.97081 17.391 5.90551 15.8677 4.38227C14.3445 2.85903 12.2792 2.00227 10.125 2ZM3.25 10.125C3.25079 8.76583 3.65442 7.43739 4.40991 6.30753C5.1654 5.17767 6.23884 4.2971 7.49459 3.77707C8.75034 3.25705 10.1321 3.12091 11.4652 3.38585C12.7983 3.6508 14.0229 4.30494 14.9844 5.26563L5.26563 14.9844C4.62627 14.347 4.11909 13.5896 3.7732 12.7557C3.4273 11.9218 3.2495 11.0278 3.25 10.125Z" fill="currentColor" />
  </svg>
);
export const PropertyFinalisingIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 15.625C8.76159 15.6252 7.55774 15.2167 6.57519 14.4628C5.59264 13.709 4.88633 12.652 4.56582 11.4558C4.24531 10.2596 4.32852 8.99103 4.80254 7.84693C5.27657 6.70283 6.1149 5.74715 7.1875 5.12812C7.33067 5.05038 7.49853 5.03162 7.65533 5.07582C7.81213 5.12002 7.94547 5.2237 8.02696 5.36476C8.10844 5.50583 8.13162 5.67314 8.09156 5.83105C8.05151 5.98896 7.95138 6.12499 7.8125 6.21016C6.97845 6.6917 6.32659 7.435 5.95803 8.32478C5.58947 9.21455 5.52481 10.2011 5.77408 11.1314C6.02334 12.0616 6.5726 12.8836 7.33667 13.4699C8.10074 14.0562 9.03692 14.374 10 14.374C10.9631 14.374 11.8993 14.0562 12.6633 13.4699C13.4274 12.8836 13.9767 12.0616 14.2259 11.1314C14.4752 10.2011 14.4105 9.21455 14.042 8.32478C13.6734 7.435 13.0216 6.6917 12.1875 6.21016C12.0486 6.12499 11.9485 5.98896 11.9084 5.83105C11.8684 5.67314 11.8916 5.50583 11.9731 5.36476C12.0545 5.2237 12.1879 5.12002 12.3447 5.07582C12.5015 5.03162 12.6693 5.05038 12.8125 5.12812C13.8851 5.74715 14.7234 6.70283 15.1975 7.84693C15.6715 8.99103 15.7547 10.2596 15.4342 11.4558C15.1137 12.652 14.4074 13.709 13.4248 14.4628C12.4423 15.2167 11.2384 15.6252 10 15.625Z" fill="currentColor" />
  </svg>
);
export const PropertyRejectedIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M10.125 2C8.51803 2 6.94714 2.47652 5.611 3.36931C4.27485 4.2621 3.23344 5.53105 2.61848 7.0157C2.00352 8.50035 1.84262 10.134 2.15612 11.7101C2.46963 13.2862 3.24346 14.7339 4.37976 15.8702C5.51606 17.0065 6.9638 17.7804 8.5399 18.0939C10.116 18.4074 11.7497 18.2465 13.2343 17.6315C14.719 17.0166 15.9879 15.9752 16.8807 14.639C17.7735 13.3029 18.25 11.732 18.25 10.125C18.2477 7.97081 17.391 5.90551 15.8677 4.38227C14.3445 2.85903 12.2792 2.00227 10.125 2ZM13.0672 12.1828C13.1253 12.2409 13.1713 12.3098 13.2027 12.3857C13.2342 12.4616 13.2504 12.5429 13.2504 12.625C13.2504 12.7071 13.2342 12.7884 13.2027 12.8643C13.1713 12.9402 13.1253 13.0091 13.0672 13.0672C13.0091 13.1253 12.9402 13.1713 12.8643 13.2027C12.7884 13.2342 12.7071 13.2503 12.625 13.2503C12.5429 13.2503 12.4616 13.2342 12.3857 13.2027C12.3098 13.1713 12.2409 13.1253 12.1828 13.0672L10.125 11.0086L8.06719 13.0672C8.00912 13.1253 7.94018 13.1713 7.86431 13.2027C7.78844 13.2342 7.70713 13.2503 7.625 13.2503C7.54288 13.2503 7.46156 13.2342 7.38569 13.2027C7.30982 13.1713 7.24088 13.1253 7.18282 13.0672C7.12475 13.0091 7.07868 12.9402 7.04726 12.8643C7.01583 12.7884 6.99966 12.7071 6.99966 12.625C6.99966 12.5429 7.01583 12.4616 7.04726 12.3857C7.07868 12.3098 7.12475 12.2409 7.18282 12.1828L9.24141 10.125L7.18282 8.06719C7.06554 7.94991 6.99966 7.79085 6.99966 7.625C6.99966 7.45915 7.06554 7.30009 7.18282 7.18281C7.30009 7.06554 7.45915 6.99965 7.625 6.99965C7.79086 6.99965 7.94992 7.06554 8.06719 7.18281L10.125 9.24141L12.1828 7.18281C12.2409 7.12474 12.3098 7.07868 12.3857 7.04725C12.4616 7.01583 12.5429 6.99965 12.625 6.99965C12.7071 6.99965 12.7884 7.01583 12.8643 7.04725C12.9402 7.07868 13.0091 7.12474 13.0672 7.18281C13.1253 7.24088 13.1713 7.30982 13.2027 7.38569C13.2342 7.46156 13.2504 7.54288 13.2504 7.625C13.2504 7.70712 13.2342 7.78844 13.2027 7.86431C13.1713 7.94018 13.1253 8.00912 13.0672 8.06719L11.0086 10.125L13.0672 12.1828Z" fill="currentColor" />
  </svg>
);
export const DetailsReviewCheckIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M10.6719 2.0647V4.5647C10.6719 4.73046 10.606 4.88943 10.4888 5.00664C10.3716 5.12385 10.2126 5.1897 10.0469 5.1897C9.88111 5.1897 9.72214 5.12385 9.60493 5.00664C9.48772 4.88943 9.42188 4.73046 9.42188 4.5647V2.0647C9.42188 1.89894 9.48772 1.73997 9.60493 1.62276C9.72214 1.50555 9.88111 1.4397 10.0469 1.4397C10.2126 1.4397 10.3716 1.50555 10.4888 1.62276C10.606 1.73997 10.6719 1.89894 10.6719 2.0647ZM13.582 6.65454C13.6642 6.6545 13.7455 6.63827 13.8214 6.60677C13.8973 6.57526 13.9662 6.52911 14.0242 6.47095L15.7922 4.70376C15.9095 4.58648 15.9753 4.42742 15.9753 4.26157C15.9753 4.09572 15.9095 3.93666 15.7922 3.81938C15.6749 3.70211 15.5159 3.63622 15.35 3.63622C15.1841 3.63622 15.0251 3.70211 14.9078 3.81938L13.1406 5.58735C13.0532 5.67472 12.9936 5.78605 12.9694 5.90728C12.9452 6.02851 12.9575 6.15419 13.0048 6.26842C13.052 6.38266 13.1321 6.48031 13.2348 6.54904C13.3376 6.61777 13.4584 6.65448 13.582 6.65454ZM17.5469 8.9397H15.0469C14.8811 8.9397 14.7221 9.00555 14.6049 9.12276C14.4877 9.23997 14.4219 9.39894 14.4219 9.5647C14.4219 9.73046 14.4877 9.88943 14.6049 10.0066C14.7221 10.1238 14.8811 10.1897 15.0469 10.1897H17.5469C17.7126 10.1897 17.8716 10.1238 17.9888 10.0066C18.106 9.88943 18.1719 9.73046 18.1719 9.5647C18.1719 9.39894 18.106 9.23997 17.9888 9.12276C17.8716 9.00555 17.7126 8.9397 17.5469 8.9397ZM14.0242 12.6584C13.9061 12.5462 13.7487 12.4845 13.5857 12.4866C13.4228 12.4887 13.267 12.5544 13.1518 12.6696C13.0365 12.7849 12.9709 12.9406 12.9688 13.1036C12.9667 13.2665 13.0284 13.4239 13.1406 13.542L14.9078 15.31C15.0251 15.4273 15.1841 15.4932 15.35 15.4932C15.5159 15.4932 15.6749 15.4273 15.7922 15.31C15.9095 15.1927 15.9753 15.0337 15.9753 14.8678C15.9753 14.702 15.9095 14.5429 15.7922 14.4256L14.0242 12.6584ZM10.0469 13.9397C9.88111 13.9397 9.72214 14.0055 9.60493 14.1228C9.48772 14.24 9.42188 14.3989 9.42188 14.5647V17.0647C9.42188 17.2305 9.48772 17.3894 9.60493 17.5066C9.72214 17.6238 9.88111 17.6897 10.0469 17.6897C10.2126 17.6897 10.3716 17.6238 10.4888 17.5066C10.606 17.3894 10.6719 17.2305 10.6719 17.0647V14.5647C10.6719 14.3989 10.606 14.24 10.4888 14.1228C10.3716 14.0055 10.2126 13.9397 10.0469 13.9397ZM6.06953 12.6584L4.30156 14.4256C4.18429 14.5429 4.1184 14.702 4.1184 14.8678C4.1184 15.0337 4.18429 15.1927 4.30156 15.31C4.41884 15.4273 4.5779 15.4932 4.74375 15.4932C4.9096 15.4932 5.06866 15.4273 5.18594 15.31L6.95312 13.542C7.06539 13.4239 7.12705 13.2665 7.12496 13.1036C7.12288 12.9406 7.05721 12.7849 6.94196 12.6696C6.8267 12.5544 6.67099 12.4887 6.50801 12.4866C6.34504 12.4845 6.18769 12.5462 6.06953 12.6584ZM5.67188 9.5647C5.67188 9.39894 5.60603 9.23997 5.48882 9.12276C5.37161 9.00555 5.21264 8.9397 5.04688 8.9397H2.54688C2.38111 8.9397 2.22214 9.00555 2.10493 9.12276C1.98772 9.23997 1.92188 9.39894 1.92188 9.5647C1.92188 9.73046 1.98772 9.88943 2.10493 10.0066C2.22214 10.1238 2.38111 10.1897 2.54688 10.1897H5.04688C5.21264 10.1897 5.37161 10.1238 5.48882 10.0066C5.60603 9.88943 5.67188 9.73046 5.67188 9.5647ZM5.18594 3.81938C5.06866 3.70211 4.9096 3.63622 4.74375 3.63622C4.5779 3.63622 4.41884 3.70211 4.30156 3.81938C4.18429 3.93666 4.1184 4.09572 4.1184 4.26157C4.1184 4.42742 4.18429 4.58648 4.30156 4.70376L6.06953 6.47095C6.18769 6.58321 6.34504 6.64487 6.50801 6.64278C6.67099 6.6407 6.8267 6.57503 6.94196 6.45978C7.05721 6.34453 7.12288 6.18881 7.12496 6.02584C7.12705 5.86286 7.06539 5.70552 6.95312 5.58735L5.18594 3.81938Z" fill="currentColor" />
  </svg>
);
export const ReviewCheckIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M17.811 13.6719C17.7396 13.7126 17.6609 13.7388 17.5794 13.7491C17.4978 13.7593 17.4151 13.7534 17.3358 13.7316C17.2566 13.7098 17.1824 13.6727 17.1176 13.6222C17.0527 13.5717 16.9984 13.509 16.9579 13.4375L15.4735 10.8437C14.6105 11.4272 13.6586 11.8668 12.6547 12.1453L13.1133 14.8969C13.1269 14.9779 13.1243 15.0607 13.1058 15.1408C13.0873 15.2208 13.0532 15.2963 13.0054 15.3632C12.9577 15.43 12.8972 15.4868 12.8276 15.5302C12.7579 15.5737 12.6803 15.6029 12.5993 15.6164C12.566 15.6219 12.5323 15.6247 12.4985 15.625C12.3506 15.6248 12.2076 15.5721 12.0949 15.4764C11.9822 15.3808 11.9071 15.2482 11.8829 15.1023L11.4321 12.4008C10.4815 12.5331 9.51709 12.5331 8.56646 12.4008L8.11568 15.1023C8.09143 15.2485 8.01606 15.3812 7.90302 15.477C7.78998 15.5727 7.64662 15.6251 7.4985 15.625C7.46395 15.6248 7.42947 15.622 7.39537 15.6164C7.31435 15.6029 7.23678 15.5737 7.16709 15.5302C7.0974 15.4868 7.03696 15.43 6.98922 15.3632C6.94148 15.2963 6.90738 15.2208 6.88886 15.1408C6.87034 15.0607 6.86778 14.9779 6.88131 14.8969L7.34225 12.1453C6.33883 11.8659 5.3874 11.4256 4.52506 10.8414L3.04537 13.4375C2.96249 13.5819 2.82563 13.6875 2.66491 13.731C2.50419 13.7745 2.33276 13.7524 2.18834 13.6695C2.04392 13.5866 1.93834 13.4498 1.89483 13.2891C1.85131 13.1283 1.87343 12.9569 1.95631 12.8125L3.51881 10.0781C2.96998 9.60396 2.46531 9.08098 2.011 8.51562C1.95434 8.45236 1.91117 8.37822 1.88412 8.29772C1.85707 8.21722 1.84671 8.13205 1.85366 8.04742C1.86062 7.96278 1.88476 7.88045 1.9246 7.80545C1.96443 7.73045 2.01914 7.66436 2.08537 7.61121C2.1516 7.55805 2.22796 7.51895 2.30981 7.4963C2.39165 7.47364 2.47725 7.4679 2.56139 7.47942C2.64552 7.49095 2.72643 7.5195 2.79916 7.56333C2.8719 7.60717 2.93494 7.66536 2.98443 7.73437C4.28131 9.33906 6.55006 11.25 9.9985 11.25C13.4469 11.25 15.7157 9.33671 17.0126 7.73437C17.0615 7.66395 17.1244 7.60435 17.1973 7.55928C17.2703 7.51422 17.3517 7.48464 17.4366 7.4724C17.5215 7.46016 17.608 7.46552 17.6907 7.48814C17.7734 7.51076 17.8506 7.55015 17.9174 7.60388C17.9842 7.6576 18.0393 7.72451 18.0792 7.80043C18.119 7.87634 18.1428 7.95966 18.1491 8.04517C18.1554 8.13069 18.144 8.21659 18.1157 8.29753C18.0874 8.37846 18.0427 8.4527 17.9844 8.51562C17.5301 9.08098 17.0254 9.60396 16.4766 10.0781L18.0391 12.8125C18.0811 12.8838 18.1084 12.9627 18.1197 13.0446C18.1309 13.1265 18.1258 13.2099 18.1045 13.2898C18.0833 13.3698 18.0465 13.4447 17.9961 13.5103C17.9457 13.5759 17.8828 13.6308 17.811 13.6719Z" fill="currentColor" />
  </svg>
);
export const SmallGreenCheckIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M10.3828 1.875C8.77584 1.875 7.20496 2.35152 5.86881 3.24431C4.53266 4.1371 3.49126 5.40605 2.87629 6.8907C2.26133 8.37535 2.10043 10.009 2.41394 11.5851C2.72744 13.1612 3.50127 14.6089 4.63757 15.7452C5.77388 16.8815 7.22161 17.6554 8.79771 17.9689C10.3738 18.2824 12.0075 18.1215 13.4921 17.5065C14.9768 16.8916 16.2457 15.8502 17.1385 14.514C18.0313 13.1779 18.5078 11.607 18.5078 10C18.5055 7.84581 17.6488 5.78051 16.1255 4.25727C14.6023 2.73403 12.537 1.87727 10.3828 1.875ZM13.95 8.56719L9.575 12.9422C9.51696 13.0003 9.44803 13.0464 9.37215 13.0779C9.29628 13.1093 9.21495 13.1255 9.13282 13.1255C9.05068 13.1255 8.96935 13.1093 8.89348 13.0779C8.8176 13.0464 8.74867 13.0003 8.69063 12.9422L6.81563 11.0672C6.69835 10.9499 6.63247 10.7909 6.63247 10.625C6.63247 10.4591 6.69835 10.3001 6.81563 10.1828C6.9329 10.0655 7.09196 9.99965 7.25782 9.99965C7.42367 9.99965 7.58273 10.0655 7.7 10.1828L9.13282 11.6164L13.0656 7.68281C13.1237 7.62474 13.1926 7.57868 13.2685 7.54725C13.3444 7.51583 13.4257 7.49965 13.5078 7.49965C13.5899 7.49965 13.6713 7.51583 13.7471 7.54725C13.823 7.57868 13.8919 7.62474 13.95 7.68281C14.0081 7.74088 14.0541 7.80982 14.0856 7.88569C14.117 7.96156 14.1332 8.04288 14.1332 8.125C14.1332 8.20712 14.117 8.28844 14.0856 8.36431C14.0541 8.44018 14.0081 8.50912 13.95 8.56719Z" fill="#007D3E" />
  </svg>
);
export const SmallRoundRejectedIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M10.125 2C8.51803 2 6.94714 2.47652 5.611 3.36931C4.27485 4.2621 3.23344 5.53105 2.61848 7.0157C2.00352 8.50035 1.84262 10.134 2.15612 11.7101C2.46963 13.2862 3.24346 14.7339 4.37976 15.8702C5.51606 17.0065 6.9638 17.7804 8.5399 18.0939C10.116 18.4074 11.7497 18.2465 13.2343 17.6315C14.719 17.0166 15.9879 15.9752 16.8807 14.639C17.7735 13.3029 18.25 11.732 18.25 10.125C18.2477 7.97081 17.391 5.90551 15.8677 4.38227C14.3445 2.85903 12.2792 2.00227 10.125 2ZM13.0672 12.1828C13.1253 12.2409 13.1713 12.3098 13.2027 12.3857C13.2342 12.4616 13.2504 12.5429 13.2504 12.625C13.2504 12.7071 13.2342 12.7884 13.2027 12.8643C13.1713 12.9402 13.1253 13.0091 13.0672 13.0672C13.0091 13.1253 12.9402 13.1713 12.8643 13.2027C12.7884 13.2342 12.7071 13.2503 12.625 13.2503C12.5429 13.2503 12.4616 13.2342 12.3857 13.2027C12.3098 13.1713 12.2409 13.1253 12.1828 13.0672L10.125 11.0086L8.06719 13.0672C8.00912 13.1253 7.94018 13.1713 7.86431 13.2027C7.78844 13.2342 7.70713 13.2503 7.625 13.2503C7.54288 13.2503 7.46156 13.2342 7.38569 13.2027C7.30982 13.1713 7.24088 13.1253 7.18282 13.0672C7.12475 13.0091 7.07868 12.9402 7.04726 12.8643C7.01583 12.7884 6.99966 12.7071 6.99966 12.625C6.99966 12.5429 7.01583 12.4616 7.04726 12.3857C7.07868 12.3098 7.12475 12.2409 7.18282 12.1828L9.24141 10.125L7.18282 8.06719C7.06554 7.94991 6.99966 7.79085 6.99966 7.625C6.99966 7.45915 7.06554 7.30009 7.18282 7.18281C7.30009 7.06554 7.45915 6.99965 7.625 6.99965C7.79086 6.99965 7.94992 7.06554 8.06719 7.18281L10.125 9.24141L12.1828 7.18281C12.2409 7.12474 12.3098 7.07868 12.3857 7.04725C12.4616 7.01583 12.5429 6.99965 12.625 6.99965C12.7071 6.99965 12.7884 7.01583 12.8643 7.04725C12.9402 7.07868 13.0091 7.12474 13.0672 7.18281C13.1253 7.24088 13.1713 7.30982 13.2027 7.38569C13.2342 7.46156 13.2504 7.54288 13.2504 7.625C13.2504 7.70712 13.2342 7.78844 13.2027 7.86431C13.1713 7.94018 13.1253 8.00912 13.0672 8.06719L11.0086 10.125L13.0672 12.1828Z" fill="#EF1212" />
  </svg>
);
export const RedStarIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M18.3068 8.97262L14.7912 12.0062L15.8623 16.5429C15.9214 16.7892 15.9061 17.0475 15.8185 17.2851C15.7309 17.5227 15.5748 17.7291 15.37 17.8781C15.1652 18.027 14.9208 18.112 14.6678 18.1221C14.4147 18.1323 14.1643 18.0672 13.9482 17.9351L10.0029 15.507L6.05522 17.9351C5.83915 18.0664 5.58906 18.1309 5.33643 18.1204C5.0838 18.1098 4.83993 18.0248 4.63554 17.8759C4.43115 17.7271 4.27536 17.5211 4.18781 17.2839C4.10025 17.0467 4.08484 16.7889 4.14351 16.5429L5.21851 12.0062L1.70288 8.97262C1.51171 8.80739 1.37345 8.58951 1.30537 8.34617C1.23729 8.10284 1.2424 7.84484 1.32008 7.60439C1.39776 7.36395 1.54455 7.15172 1.74212 6.9942C1.9397 6.83669 2.1793 6.74087 2.43101 6.71871L7.04038 6.34684L8.81851 2.04371C8.91475 1.8092 9.07856 1.6086 9.28911 1.46742C9.49965 1.32624 9.74743 1.25085 10.0009 1.25085C10.2544 1.25085 10.5022 1.32624 10.7127 1.46742C10.9233 1.6086 11.0871 1.8092 11.1833 2.04371L12.9607 6.34684L17.5701 6.71871C17.8223 6.74004 18.0626 6.83533 18.2609 6.99263C18.4592 7.14992 18.6066 7.36224 18.6848 7.60298C18.7629 7.84371 18.7683 8.10216 18.7003 8.34594C18.6322 8.58972 18.4937 8.80799 18.3021 8.9734L18.3068 8.97262Z" fill="#FF2D55" />
  </svg>
);
export const MessagesIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
  <path d="M18.1299 14.5906C18.5617 13.6949 18.7736 12.7091 18.748 11.715C18.7223 10.721 18.4598 9.74737 17.9823 8.87513C17.5049 8.00288 16.8261 7.25716 16.0026 6.6999C15.179 6.14265 14.2343 5.78995 13.2471 5.67109C12.9186 4.90732 12.441 4.21676 11.8423 3.63986C11.2436 3.06296 10.5358 2.61132 9.76032 2.31138C8.98488 2.01144 8.15739 1.86923 7.32631 1.89307C6.49523 1.91692 5.67725 2.10635 4.92029 2.45027C4.16333 2.79419 3.4826 3.28568 2.91796 3.89596C2.35332 4.50625 1.91611 5.22306 1.63195 6.00441C1.34779 6.78577 1.22239 7.61597 1.26308 8.4464C1.30378 9.27683 1.50975 10.0908 1.86894 10.8406L1.30097 12.7711C1.23747 12.9866 1.23322 13.2152 1.28868 13.433C1.34414 13.6507 1.45725 13.8494 1.61612 14.0083C1.77498 14.1672 1.97373 14.2803 2.19145 14.3357C2.40917 14.3912 2.63781 14.3869 2.85332 14.3234L4.78378 13.7555C5.40365 14.0533 6.06823 14.2473 6.75097 14.3297C7.08267 15.1069 7.56853 15.8087 8.17918 16.3928C8.78982 16.9769 9.51257 17.4311 10.3037 17.728C11.0949 18.0248 11.938 18.1582 12.7822 18.1199C13.6263 18.0817 14.454 17.8726 15.215 17.5055L17.1455 18.0734C17.3609 18.1369 17.5895 18.1411 17.8071 18.0857C18.0247 18.0302 18.2234 17.9172 18.3822 17.7584C18.5411 17.5997 18.6542 17.4011 18.7097 17.1835C18.7653 16.9659 18.7612 16.7373 18.6978 16.5219L18.1299 14.5906ZM16.8603 14.7055L17.4994 16.875L15.3307 16.2367C15.174 16.1913 15.0057 16.209 14.8619 16.2859C13.711 16.9005 12.3656 17.0412 11.1124 16.6781C9.85922 16.315 8.79742 15.4768 8.15332 14.3422C9.00908 14.2529 9.83715 13.9877 10.5856 13.5632C11.334 13.1388 11.9867 12.5642 12.5026 11.8756C13.0185 11.1871 13.3865 10.3993 13.5836 9.56175C13.7807 8.72421 13.8026 7.85498 13.6478 7.0086C14.3935 7.18435 15.0887 7.52908 15.68 8.01618C16.2712 8.50327 16.7426 9.11971 17.0578 9.81791C17.373 10.5161 17.5236 11.2774 17.4979 12.043C17.4722 12.8086 17.2709 13.5581 16.9096 14.2336C16.8318 14.3783 16.8141 14.5478 16.8603 14.7055Z" fill="#606C23"/>
  </svg>
);
export const BookeepIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path d="M14.375 2.5H5.625C5.29348 2.5 4.97554 2.6317 4.74112 2.86612C4.5067 3.10054 4.375 3.41848 4.375 3.75V17.5C4.37506 17.6115 4.40496 17.721 4.46161 17.8171C4.51826 17.9132 4.59959 17.9924 4.69716 18.0464C4.79473 18.1005 4.90498 18.1274 5.01648 18.1245C5.12798 18.1215 5.23666 18.0888 5.33125 18.0297L10 15.1117L14.6695 18.0297C14.7641 18.0886 14.8727 18.1212 14.9841 18.124C15.0955 18.1268 15.2056 18.0998 15.303 18.0458C15.4005 17.9918 15.4817 17.9127 15.5383 17.8167C15.5949 17.7208 15.6249 17.6114 15.625 17.5V3.75C15.625 3.41848 15.4933 3.10054 15.2589 2.86612C15.0245 2.6317 14.7065 2.5 14.375 2.5Z" fill="#007AFF"/>
  </svg>
);


