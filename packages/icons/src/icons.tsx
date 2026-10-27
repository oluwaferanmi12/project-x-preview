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

export const AddIcon = ({
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

export const OwnerIcon = ({
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

export const DateIcon = ({
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

export const ImageIcon = ({
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
export const LogoPlaceholderIcon = ({
  size = 120,
  className,
  color = "currentColor",
}: IconProps) => (
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
      <path
        d="M14.1189 22.1602C14.1189 22.1602 13.4696 23.3237 14.4707 23.5943C15.9318 23.9731 16.4459 21.5649 16.4459 21.5649L14.1189 22.1602Z"
        fill="#121212"
      />
      <path
        d="M14.3617 22.2143C14.3617 22.2143 13.3876 24.3789 12.0077 23.946C10.6278 23.5131 12.3865 22.052 12.3865 22.052L14.3617 22.2143Z"
        fill="#121212"
      />
      <path
        d="M12.5764 21.9164C12.5764 21.9164 10.6283 24.8386 9.38364 23.594C8.68015 22.8905 9.89774 21.24 9.89774 21.24L12.5764 21.9164Z"
        fill="#121212"
      />
      <path
        d="M13.5508 0C7.4088 0 2.43022 4.97858 2.43022 11.1477C2.43022 12.0135 2.53845 12.8794 2.72785 13.6911C1.91612 14.1511 0.887939 15.044 0.833824 16.5321H2.64668C2.64668 16.5321 0.455019 17.7768 0.373847 19.6708L2.02435 19.292C2.02435 19.292 0.184444 21.0778 0.103271 22.9448L5.78535 19.1026C7.7876 21.0778 10.5475 22.2954 13.5779 22.2954C19.72 22.2954 24.6985 17.2897 24.6985 11.1477C24.6985 4.97858 19.72 0 13.5508 0Z"
        fill="#0476D0"
      />
      <path
        d="M11.3589 19.5086L19.8279 4.89756C19.8279 4.89756 15.1469 1.02834 11.3589 4.22113C7.02967 7.87389 7.76022 16.7217 11.3589 19.5086Z"
        fill="white"
      />
      <path
        d="M16.3106 7.60318C16.3106 9.01017 15.1742 10.1736 13.7401 10.1736C12.3061 10.1736 11.1697 9.03722 11.1697 7.60318C11.1697 6.19619 12.3061 5.03271 13.7401 5.03271C15.1742 5.03271 16.3106 6.19619 16.3106 7.60318Z"
        fill="#121212"
      />
      <path
        d="M16.3103 15.2605L24.5087 22.0519C24.5087 22.0519 34.2765 8.90196 21.803 5.51978L16.3103 15.2605Z"
        fill="#000080"
      />
      <path
        d="M25.5906 10.1736C25.5906 10.1736 27.8905 11.9594 26.0776 14.3404C26.267 12.257 25.5906 10.1736 25.5906 10.1736Z"
        fill="white"
      />
      <path
        d="M38.7161 7.03509V20.0227H35.9021V5.68221H37.3632C38.0938 5.65516 38.7161 6.30454 38.7161 7.03509ZM50.3508 14.4759C50.3508 18.3181 48.6462 20.2662 45.264 20.2662C41.8818 20.2662 40.2042 18.3181 40.2042 14.4759C40.2042 10.5796 41.8818 8.68559 45.264 8.68559C48.6462 8.68559 50.3508 10.6067 50.3508 14.4759ZM43.0453 14.4759C43.0723 16.6405 43.8029 17.7499 45.2369 17.7499C46.671 17.7499 47.4015 16.6134 47.4015 14.3947C47.4015 12.2301 46.671 11.1478 45.2369 11.1478C43.8029 11.1478 43.0453 12.2572 43.0453 14.4759ZM52.0284 14.2594C52.1095 10.6608 54.0306 8.84794 57.7646 8.84794H58.1704V11.7702H57.2234C55.6541 11.7702 54.8694 12.5819 54.8694 14.2053V20.0227H52.0284V14.2594ZM64.7725 20.2662C61.3903 20.158 59.7127 18.2098 59.7127 14.3947C59.7127 10.6067 61.4173 8.68559 64.8266 8.68559C68.3711 8.68559 70.0487 10.8502 69.8322 15.2335H62.6079C62.7161 16.9381 63.4466 17.804 64.8266 17.804C65.476 17.804 66.0983 17.5334 66.6394 16.9922C66.8829 16.7217 67.2076 16.5864 67.5864 16.5864H69.6428C69.0205 18.9674 67.5053 20.2662 64.7725 20.2662ZM62.6349 13.2313H66.8288C66.6665 11.7431 65.963 10.9855 64.7725 10.9855C63.5819 10.9855 62.8514 11.7431 62.6349 13.2313ZM74.2967 12.8795V20.0227H71.4557V13.4477C71.4557 10.2549 73.0521 8.68559 76.2448 8.68559C77.6789 8.68559 78.7882 9.01028 79.5729 9.63261C80.3846 9.01028 81.4669 8.71265 82.901 8.71265C86.0938 8.71265 87.6631 10.282 87.636 13.4748V20.0497H86.1749C85.255 19.9956 84.795 19.5357 84.795 18.6698V12.9336C84.7409 11.7701 84.0915 11.2019 82.8469 11.2019C81.6022 11.2019 80.9799 11.7701 80.9528 12.9336V20.0227H78.1118V12.8795C78.0577 11.716 77.4083 11.1478 76.1637 11.1478C74.9461 11.1478 74.2967 11.716 74.2967 12.8795ZM97.3497 7.03509V20.0227H94.5357V5.68221H95.9968C96.7274 5.65516 97.3497 6.30454 97.3497 7.03509ZM108.984 14.4759C108.984 18.3181 107.28 20.2662 103.898 20.2662C100.515 20.2662 98.8378 18.3181 98.8378 14.4759C98.8378 10.5796 100.515 8.68559 103.898 8.68559C107.28 8.68559 108.984 10.6067 108.984 14.4759ZM101.706 14.4759C101.733 16.6405 102.464 17.7499 103.898 17.7499C105.332 17.7499 106.062 16.6134 106.062 14.3947C106.062 12.2301 105.332 11.1478 103.898 11.1478C102.437 11.1478 101.706 12.2572 101.706 14.4759ZM110.662 14.2594C110.743 10.6608 112.664 8.84794 116.398 8.84794H116.804V11.7702H115.857C114.288 11.7702 113.503 12.5819 113.503 14.2053V20.0227H110.662V14.2594ZM123.406 20.2662C120.024 20.158 118.346 18.2098 118.346 14.3947C118.346 10.6067 120.051 8.68559 123.46 8.68559C127.005 8.68559 128.682 10.8502 128.466 15.2335H121.241C121.35 16.9381 122.08 17.804 123.46 17.804C124.11 17.804 124.732 17.5334 125.273 16.9922C125.517 16.7217 125.841 16.5864 126.22 16.5864H128.276C127.681 18.9674 126.139 20.2662 123.406 20.2662ZM121.269 13.2313H125.462C125.3 11.7431 124.597 10.9855 123.406 10.9855C122.216 10.9855 121.485 11.7431 121.269 13.2313ZM132.93 12.8795V20.0227H130.089V13.4477C130.089 10.2549 131.686 8.68559 134.878 8.68559C136.312 8.68559 137.422 9.01028 138.207 9.63261C139.018 9.01028 140.101 8.71265 141.535 8.71265C144.727 8.71265 146.297 10.282 146.27 13.4748V20.0497H144.836C143.916 19.9956 143.456 19.5357 143.456 18.6698V12.9336C143.402 11.7701 142.752 11.2019 141.508 11.2019C140.263 11.2019 139.641 11.7701 139.614 12.9336V20.0227H136.772V12.8795C136.718 11.716 136.069 11.1478 134.824 11.1478C133.58 11.1478 132.93 11.716 132.93 12.8795Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="logo-placeholder-icon_svg__a">
        <rect width="146.341" height="24" fill={color} />
      </clipPath>
    </defs>
  </svg>
);

export const LogoPlaceholderBirdIcon = ({
  size = 32,
  className,
}: IconProps) => (
  <svg
    width={size}
    height={typeof size === "number" ? (size * 24) / 28 : undefined}
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14.1189 22.1602C14.1189 22.1602 13.4696 23.3237 14.4707 23.5943C15.9318 23.9731 16.4459 21.5649 16.4459 21.5649L14.1189 22.1602Z"
      fill="#121212"
    />
    <path
      d="M14.3617 22.2143C14.3617 22.2143 13.3876 24.3789 12.0077 23.946C10.6278 23.5131 12.3865 22.052 12.3865 22.052L14.3617 22.2143Z"
      fill="#121212"
    />
    <path
      d="M12.5764 21.9164C12.5764 21.9164 10.6283 24.8386 9.38364 23.594C8.68015 22.8905 9.89774 21.24 9.89774 21.24L12.5764 21.9164Z"
      fill="#121212"
    />
    <path
      d="M13.5508 0C7.4088 0 2.43022 4.97858 2.43022 11.1477C2.43022 12.0135 2.53845 12.8794 2.72785 13.6911C1.91612 14.1511 0.887939 15.044 0.833824 16.5321H2.64668C2.64668 16.5321 0.455019 17.7768 0.373847 19.6708L2.02435 19.292C2.02435 19.292 0.184444 21.0778 0.103271 22.9448L5.78535 19.1026C7.7876 21.0778 10.5475 22.2954 13.5779 22.2954C19.72 22.2954 24.6985 17.2897 24.6985 11.1477C24.6985 4.97858 19.72 0 13.5508 0Z"
      fill="#0476D0"
    />
    <path
      d="M11.3589 19.5086L19.8279 4.89756C19.8279 4.89756 15.1469 1.02834 11.3589 4.22113C7.02967 7.87389 7.76022 16.7217 11.3589 19.5086Z"
      fill="white"
    />
    <path
      d="M16.3106 7.60318C16.3106 9.01017 15.1742 10.1736 13.7401 10.1736C12.3061 10.1736 11.1697 9.03722 11.1697 7.60318C11.1697 6.19619 12.3061 5.03271 13.7401 5.03271C15.1742 5.03271 16.3106 6.19619 16.3106 7.60318Z"
      fill="#121212"
    />
    <path
      d="M16.3103 15.2605L24.5087 22.0519C24.5087 22.0519 34.2765 8.90196 21.803 5.51978L16.3103 15.2605Z"
      fill="#000080"
    />
    <path
      d="M25.5906 10.1736C25.5906 10.1736 27.8905 11.9594 26.0776 14.3404C26.267 12.257 25.5906 10.1736 25.5906 10.1736Z"
      fill="white"
    />
  </svg>
);

export const PropertyPendingIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M10.3867 1.72656C8.77975 1.72656 7.20886 2.20309 5.87271 3.09587C4.53656 3.98866 3.49516 5.25761 2.8802 6.74226C2.26524 8.22691 2.10434 9.86058 2.41784 11.4367C2.73135 13.0128 3.50518 14.4605 4.64148 15.5968C5.77778 16.7331 7.22552 17.5069 8.80161 17.8204C10.3777 18.1339 12.0114 17.973 13.496 17.3581C14.9807 16.7431 16.2496 15.7017 17.1424 14.3656C18.0352 13.0294 18.5117 11.4585 18.5117 9.85156C18.5094 7.69738 17.6527 5.63207 16.1295 4.10883C14.6062 2.58559 12.5409 1.72884 10.3867 1.72656ZM13.5117 10.4766H7.26172C7.09596 10.4766 6.93699 10.4107 6.81978 10.2935C6.70257 10.1763 6.63672 10.0173 6.63672 9.85156C6.63672 9.6858 6.70257 9.52683 6.81978 9.40962C6.93699 9.29241 7.09596 9.22656 7.26172 9.22656H13.5117C13.6775 9.22656 13.8365 9.29241 13.9537 9.40962C14.0709 9.52683 14.1367 9.6858 14.1367 9.85156C14.1367 10.0173 14.0709 10.1763 13.9537 10.2935C13.8365 10.4107 13.6775 10.4766 13.5117 10.4766Z"
      fill="currentColor"
    />
  </svg>
);

export const PropertyInProgressIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M10.125 2C8.51803 2 6.94714 2.47652 5.611 3.36931C4.27485 4.2621 3.23344 5.53105 2.61848 7.0157C2.00352 8.50035 1.84262 10.134 2.15612 11.7101C2.46963 13.2862 3.24346 14.7339 4.37976 15.8702C5.51606 17.0065 6.9638 17.7804 8.5399 18.0939C10.116 18.4074 11.7497 18.2465 13.2343 17.6315C14.719 17.0166 15.9879 15.9752 16.8807 14.639C17.7735 13.3029 18.25 11.732 18.25 10.125C18.2477 7.97081 17.391 5.90551 15.8677 4.38227C14.3445 2.85903 12.2792 2.00227 10.125 2ZM3.25 10.125C3.25079 8.76583 3.65442 7.43739 4.40991 6.30753C5.1654 5.17767 6.23884 4.2971 7.49459 3.77707C8.75034 3.25705 10.1321 3.12091 11.4652 3.38585C12.7983 3.6508 14.0229 4.30494 14.9844 5.26563L5.26563 14.9844C4.62627 14.347 4.11909 13.5896 3.7732 12.7557C3.4273 11.9218 3.2495 11.0278 3.25 10.125Z"
      fill="currentColor"
    />
  </svg>
);
export const PropertyFinalisingIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 15.625C8.76159 15.6252 7.55774 15.2167 6.57519 14.4628C5.59264 13.709 4.88633 12.652 4.56582 11.4558C4.24531 10.2596 4.32852 8.99103 4.80254 7.84693C5.27657 6.70283 6.1149 5.74715 7.1875 5.12812C7.33067 5.05038 7.49853 5.03162 7.65533 5.07582C7.81213 5.12002 7.94547 5.2237 8.02696 5.36476C8.10844 5.50583 8.13162 5.67314 8.09156 5.83105C8.05151 5.98896 7.95138 6.12499 7.8125 6.21016C6.97845 6.6917 6.32659 7.435 5.95803 8.32478C5.58947 9.21455 5.52481 10.2011 5.77408 11.1314C6.02334 12.0616 6.5726 12.8836 7.33667 13.4699C8.10074 14.0562 9.03692 14.374 10 14.374C10.9631 14.374 11.8993 14.0562 12.6633 13.4699C13.4274 12.8836 13.9767 12.0616 14.2259 11.1314C14.4752 10.2011 14.4105 9.21455 14.042 8.32478C13.6734 7.435 13.0216 6.6917 12.1875 6.21016C12.0486 6.12499 11.9485 5.98896 11.9084 5.83105C11.8684 5.67314 11.8916 5.50583 11.9731 5.36476C12.0545 5.2237 12.1879 5.12002 12.3447 5.07582C12.5015 5.03162 12.6693 5.05038 12.8125 5.12812C13.8851 5.74715 14.7234 6.70283 15.1975 7.84693C15.6715 8.99103 15.7547 10.2596 15.4342 11.4558C15.1137 12.652 14.4074 13.709 13.4248 14.4628C12.4423 15.2167 11.2384 15.6252 10 15.625Z"
      fill="currentColor"
    />
  </svg>
);
export const PropertyRejectedIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M10.125 2C8.51803 2 6.94714 2.47652 5.611 3.36931C4.27485 4.2621 3.23344 5.53105 2.61848 7.0157C2.00352 8.50035 1.84262 10.134 2.15612 11.7101C2.46963 13.2862 3.24346 14.7339 4.37976 15.8702C5.51606 17.0065 6.9638 17.7804 8.5399 18.0939C10.116 18.4074 11.7497 18.2465 13.2343 17.6315C14.719 17.0166 15.9879 15.9752 16.8807 14.639C17.7735 13.3029 18.25 11.732 18.25 10.125C18.2477 7.97081 17.391 5.90551 15.8677 4.38227C14.3445 2.85903 12.2792 2.00227 10.125 2ZM13.0672 12.1828C13.1253 12.2409 13.1713 12.3098 13.2027 12.3857C13.2342 12.4616 13.2504 12.5429 13.2504 12.625C13.2504 12.7071 13.2342 12.7884 13.2027 12.8643C13.1713 12.9402 13.1253 13.0091 13.0672 13.0672C13.0091 13.1253 12.9402 13.1713 12.8643 13.2027C12.7884 13.2342 12.7071 13.2503 12.625 13.2503C12.5429 13.2503 12.4616 13.2342 12.3857 13.2027C12.3098 13.1713 12.2409 13.1253 12.1828 13.0672L10.125 11.0086L8.06719 13.0672C8.00912 13.1253 7.94018 13.1713 7.86431 13.2027C7.78844 13.2342 7.70713 13.2503 7.625 13.2503C7.54288 13.2503 7.46156 13.2342 7.38569 13.2027C7.30982 13.1713 7.24088 13.1253 7.18282 13.0672C7.12475 13.0091 7.07868 12.9402 7.04726 12.8643C7.01583 12.7884 6.99966 12.7071 6.99966 12.625C6.99966 12.5429 7.01583 12.4616 7.04726 12.3857C7.07868 12.3098 7.12475 12.2409 7.18282 12.1828L9.24141 10.125L7.18282 8.06719C7.06554 7.94991 6.99966 7.79085 6.99966 7.625C6.99966 7.45915 7.06554 7.30009 7.18282 7.18281C7.30009 7.06554 7.45915 6.99965 7.625 6.99965C7.79086 6.99965 7.94992 7.06554 8.06719 7.18281L10.125 9.24141L12.1828 7.18281C12.2409 7.12474 12.3098 7.07868 12.3857 7.04725C12.4616 7.01583 12.5429 6.99965 12.625 6.99965C12.7071 6.99965 12.7884 7.01583 12.8643 7.04725C12.9402 7.07868 13.0091 7.12474 13.0672 7.18281C13.1253 7.24088 13.1713 7.30982 13.2027 7.38569C13.2342 7.46156 13.2504 7.54288 13.2504 7.625C13.2504 7.70712 13.2342 7.78844 13.2027 7.86431C13.1713 7.94018 13.1253 8.00912 13.0672 8.06719L11.0086 10.125L13.0672 12.1828Z"
      fill="currentColor"
    />
  </svg>
);
export const DetailsReviewCheckIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M10.6719 2.0647V4.5647C10.6719 4.73046 10.606 4.88943 10.4888 5.00664C10.3716 5.12385 10.2126 5.1897 10.0469 5.1897C9.88111 5.1897 9.72214 5.12385 9.60493 5.00664C9.48772 4.88943 9.42188 4.73046 9.42188 4.5647V2.0647C9.42188 1.89894 9.48772 1.73997 9.60493 1.62276C9.72214 1.50555 9.88111 1.4397 10.0469 1.4397C10.2126 1.4397 10.3716 1.50555 10.4888 1.62276C10.606 1.73997 10.6719 1.89894 10.6719 2.0647ZM13.582 6.65454C13.6642 6.6545 13.7455 6.63827 13.8214 6.60677C13.8973 6.57526 13.9662 6.52911 14.0242 6.47095L15.7922 4.70376C15.9095 4.58648 15.9753 4.42742 15.9753 4.26157C15.9753 4.09572 15.9095 3.93666 15.7922 3.81938C15.6749 3.70211 15.5159 3.63622 15.35 3.63622C15.1841 3.63622 15.0251 3.70211 14.9078 3.81938L13.1406 5.58735C13.0532 5.67472 12.9936 5.78605 12.9694 5.90728C12.9452 6.02851 12.9575 6.15419 13.0048 6.26842C13.052 6.38266 13.1321 6.48031 13.2348 6.54904C13.3376 6.61777 13.4584 6.65448 13.582 6.65454ZM17.5469 8.9397H15.0469C14.8811 8.9397 14.7221 9.00555 14.6049 9.12276C14.4877 9.23997 14.4219 9.39894 14.4219 9.5647C14.4219 9.73046 14.4877 9.88943 14.6049 10.0066C14.7221 10.1238 14.8811 10.1897 15.0469 10.1897H17.5469C17.7126 10.1897 17.8716 10.1238 17.9888 10.0066C18.106 9.88943 18.1719 9.73046 18.1719 9.5647C18.1719 9.39894 18.106 9.23997 17.9888 9.12276C17.8716 9.00555 17.7126 8.9397 17.5469 8.9397ZM14.0242 12.6584C13.9061 12.5462 13.7487 12.4845 13.5857 12.4866C13.4228 12.4887 13.267 12.5544 13.1518 12.6696C13.0365 12.7849 12.9709 12.9406 12.9688 13.1036C12.9667 13.2665 13.0284 13.4239 13.1406 13.542L14.9078 15.31C15.0251 15.4273 15.1841 15.4932 15.35 15.4932C15.5159 15.4932 15.6749 15.4273 15.7922 15.31C15.9095 15.1927 15.9753 15.0337 15.9753 14.8678C15.9753 14.702 15.9095 14.5429 15.7922 14.4256L14.0242 12.6584ZM10.0469 13.9397C9.88111 13.9397 9.72214 14.0055 9.60493 14.1228C9.48772 14.24 9.42188 14.3989 9.42188 14.5647V17.0647C9.42188 17.2305 9.48772 17.3894 9.60493 17.5066C9.72214 17.6238 9.88111 17.6897 10.0469 17.6897C10.2126 17.6897 10.3716 17.6238 10.4888 17.5066C10.606 17.3894 10.6719 17.2305 10.6719 17.0647V14.5647C10.6719 14.3989 10.606 14.24 10.4888 14.1228C10.3716 14.0055 10.2126 13.9397 10.0469 13.9397ZM6.06953 12.6584L4.30156 14.4256C4.18429 14.5429 4.1184 14.702 4.1184 14.8678C4.1184 15.0337 4.18429 15.1927 4.30156 15.31C4.41884 15.4273 4.5779 15.4932 4.74375 15.4932C4.9096 15.4932 5.06866 15.4273 5.18594 15.31L6.95312 13.542C7.06539 13.4239 7.12705 13.2665 7.12496 13.1036C7.12288 12.9406 7.05721 12.7849 6.94196 12.6696C6.8267 12.5544 6.67099 12.4887 6.50801 12.4866C6.34504 12.4845 6.18769 12.5462 6.06953 12.6584ZM5.67188 9.5647C5.67188 9.39894 5.60603 9.23997 5.48882 9.12276C5.37161 9.00555 5.21264 8.9397 5.04688 8.9397H2.54688C2.38111 8.9397 2.22214 9.00555 2.10493 9.12276C1.98772 9.23997 1.92188 9.39894 1.92188 9.5647C1.92188 9.73046 1.98772 9.88943 2.10493 10.0066C2.22214 10.1238 2.38111 10.1897 2.54688 10.1897H5.04688C5.21264 10.1897 5.37161 10.1238 5.48882 10.0066C5.60603 9.88943 5.67188 9.73046 5.67188 9.5647ZM5.18594 3.81938C5.06866 3.70211 4.9096 3.63622 4.74375 3.63622C4.5779 3.63622 4.41884 3.70211 4.30156 3.81938C4.18429 3.93666 4.1184 4.09572 4.1184 4.26157C4.1184 4.42742 4.18429 4.58648 4.30156 4.70376L6.06953 6.47095C6.18769 6.58321 6.34504 6.64487 6.50801 6.64278C6.67099 6.6407 6.8267 6.57503 6.94196 6.45978C7.05721 6.34453 7.12288 6.18881 7.12496 6.02584C7.12705 5.86286 7.06539 5.70552 6.95312 5.58735L5.18594 3.81938Z"
      fill="currentColor"
    />
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
    <path
      d="M17.811 13.6719C17.7396 13.7126 17.6609 13.7388 17.5794 13.7491C17.4978 13.7593 17.4151 13.7534 17.3358 13.7316C17.2566 13.7098 17.1824 13.6727 17.1176 13.6222C17.0527 13.5717 16.9984 13.509 16.9579 13.4375L15.4735 10.8437C14.6105 11.4272 13.6586 11.8668 12.6547 12.1453L13.1133 14.8969C13.1269 14.9779 13.1243 15.0607 13.1058 15.1408C13.0873 15.2208 13.0532 15.2963 13.0054 15.3632C12.9577 15.43 12.8972 15.4868 12.8276 15.5302C12.7579 15.5737 12.6803 15.6029 12.5993 15.6164C12.566 15.6219 12.5323 15.6247 12.4985 15.625C12.3506 15.6248 12.2076 15.5721 12.0949 15.4764C11.9822 15.3808 11.9071 15.2482 11.8829 15.1023L11.4321 12.4008C10.4815 12.5331 9.51709 12.5331 8.56646 12.4008L8.11568 15.1023C8.09143 15.2485 8.01606 15.3812 7.90302 15.477C7.78998 15.5727 7.64662 15.6251 7.4985 15.625C7.46395 15.6248 7.42947 15.622 7.39537 15.6164C7.31435 15.6029 7.23678 15.5737 7.16709 15.5302C7.0974 15.4868 7.03696 15.43 6.98922 15.3632C6.94148 15.2963 6.90738 15.2208 6.88886 15.1408C6.87034 15.0607 6.86778 14.9779 6.88131 14.8969L7.34225 12.1453C6.33883 11.8659 5.3874 11.4256 4.52506 10.8414L3.04537 13.4375C2.96249 13.5819 2.82563 13.6875 2.66491 13.731C2.50419 13.7745 2.33276 13.7524 2.18834 13.6695C2.04392 13.5866 1.93834 13.4498 1.89483 13.2891C1.85131 13.1283 1.87343 12.9569 1.95631 12.8125L3.51881 10.0781C2.96998 9.60396 2.46531 9.08098 2.011 8.51562C1.95434 8.45236 1.91117 8.37822 1.88412 8.29772C1.85707 8.21722 1.84671 8.13205 1.85366 8.04742C1.86062 7.96278 1.88476 7.88045 1.9246 7.80545C1.96443 7.73045 2.01914 7.66436 2.08537 7.61121C2.1516 7.55805 2.22796 7.51895 2.30981 7.4963C2.39165 7.47364 2.47725 7.4679 2.56139 7.47942C2.64552 7.49095 2.72643 7.5195 2.79916 7.56333C2.8719 7.60717 2.93494 7.66536 2.98443 7.73437C4.28131 9.33906 6.55006 11.25 9.9985 11.25C13.4469 11.25 15.7157 9.33671 17.0126 7.73437C17.0615 7.66395 17.1244 7.60435 17.1973 7.55928C17.2703 7.51422 17.3517 7.48464 17.4366 7.4724C17.5215 7.46016 17.608 7.46552 17.6907 7.48814C17.7734 7.51076 17.8506 7.55015 17.9174 7.60388C17.9842 7.6576 18.0393 7.72451 18.0792 7.80043C18.119 7.87634 18.1428 7.95966 18.1491 8.04517C18.1554 8.13069 18.144 8.21659 18.1157 8.29753C18.0874 8.37846 18.0427 8.4527 17.9844 8.51562C17.5301 9.08098 17.0254 9.60396 16.4766 10.0781L18.0391 12.8125C18.0811 12.8838 18.1084 12.9627 18.1197 13.0446C18.1309 13.1265 18.1258 13.2099 18.1045 13.2898C18.0833 13.3698 18.0465 13.4447 17.9961 13.5103C17.9457 13.5759 17.8828 13.6308 17.811 13.6719Z"
      fill="currentColor"
    />
  </svg>
);
export const SmallGreenCheckIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M10.3828 1.875C8.77584 1.875 7.20496 2.35152 5.86881 3.24431C4.53266 4.1371 3.49126 5.40605 2.87629 6.8907C2.26133 8.37535 2.10043 10.009 2.41394 11.5851C2.72744 13.1612 3.50127 14.6089 4.63757 15.7452C5.77388 16.8815 7.22161 17.6554 8.79771 17.9689C10.3738 18.2824 12.0075 18.1215 13.4921 17.5065C14.9768 16.8916 16.2457 15.8502 17.1385 14.514C18.0313 13.1779 18.5078 11.607 18.5078 10C18.5055 7.84581 17.6488 5.78051 16.1255 4.25727C14.6023 2.73403 12.537 1.87727 10.3828 1.875ZM13.95 8.56719L9.575 12.9422C9.51696 13.0003 9.44803 13.0464 9.37215 13.0779C9.29628 13.1093 9.21495 13.1255 9.13282 13.1255C9.05068 13.1255 8.96935 13.1093 8.89348 13.0779C8.8176 13.0464 8.74867 13.0003 8.69063 12.9422L6.81563 11.0672C6.69835 10.9499 6.63247 10.7909 6.63247 10.625C6.63247 10.4591 6.69835 10.3001 6.81563 10.1828C6.9329 10.0655 7.09196 9.99965 7.25782 9.99965C7.42367 9.99965 7.58273 10.0655 7.7 10.1828L9.13282 11.6164L13.0656 7.68281C13.1237 7.62474 13.1926 7.57868 13.2685 7.54725C13.3444 7.51583 13.4257 7.49965 13.5078 7.49965C13.5899 7.49965 13.6713 7.51583 13.7471 7.54725C13.823 7.57868 13.8919 7.62474 13.95 7.68281C14.0081 7.74088 14.0541 7.80982 14.0856 7.88569C14.117 7.96156 14.1332 8.04288 14.1332 8.125C14.1332 8.20712 14.117 8.28844 14.0856 8.36431C14.0541 8.44018 14.0081 8.50912 13.95 8.56719Z"
      fill="#007D3E"
    />
  </svg>
);
export const SmallRoundRejectedIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M10.125 2C8.51803 2 6.94714 2.47652 5.611 3.36931C4.27485 4.2621 3.23344 5.53105 2.61848 7.0157C2.00352 8.50035 1.84262 10.134 2.15612 11.7101C2.46963 13.2862 3.24346 14.7339 4.37976 15.8702C5.51606 17.0065 6.9638 17.7804 8.5399 18.0939C10.116 18.4074 11.7497 18.2465 13.2343 17.6315C14.719 17.0166 15.9879 15.9752 16.8807 14.639C17.7735 13.3029 18.25 11.732 18.25 10.125C18.2477 7.97081 17.391 5.90551 15.8677 4.38227C14.3445 2.85903 12.2792 2.00227 10.125 2ZM13.0672 12.1828C13.1253 12.2409 13.1713 12.3098 13.2027 12.3857C13.2342 12.4616 13.2504 12.5429 13.2504 12.625C13.2504 12.7071 13.2342 12.7884 13.2027 12.8643C13.1713 12.9402 13.1253 13.0091 13.0672 13.0672C13.0091 13.1253 12.9402 13.1713 12.8643 13.2027C12.7884 13.2342 12.7071 13.2503 12.625 13.2503C12.5429 13.2503 12.4616 13.2342 12.3857 13.2027C12.3098 13.1713 12.2409 13.1253 12.1828 13.0672L10.125 11.0086L8.06719 13.0672C8.00912 13.1253 7.94018 13.1713 7.86431 13.2027C7.78844 13.2342 7.70713 13.2503 7.625 13.2503C7.54288 13.2503 7.46156 13.2342 7.38569 13.2027C7.30982 13.1713 7.24088 13.1253 7.18282 13.0672C7.12475 13.0091 7.07868 12.9402 7.04726 12.8643C7.01583 12.7884 6.99966 12.7071 6.99966 12.625C6.99966 12.5429 7.01583 12.4616 7.04726 12.3857C7.07868 12.3098 7.12475 12.2409 7.18282 12.1828L9.24141 10.125L7.18282 8.06719C7.06554 7.94991 6.99966 7.79085 6.99966 7.625C6.99966 7.45915 7.06554 7.30009 7.18282 7.18281C7.30009 7.06554 7.45915 6.99965 7.625 6.99965C7.79086 6.99965 7.94992 7.06554 8.06719 7.18281L10.125 9.24141L12.1828 7.18281C12.2409 7.12474 12.3098 7.07868 12.3857 7.04725C12.4616 7.01583 12.5429 6.99965 12.625 6.99965C12.7071 6.99965 12.7884 7.01583 12.8643 7.04725C12.9402 7.07868 13.0091 7.12474 13.0672 7.18281C13.1253 7.24088 13.1713 7.30982 13.2027 7.38569C13.2342 7.46156 13.2504 7.54288 13.2504 7.625C13.2504 7.70712 13.2342 7.78844 13.2027 7.86431C13.1713 7.94018 13.1253 8.00912 13.0672 8.06719L11.0086 10.125L13.0672 12.1828Z"
      fill="#EF1212"
    />
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
    <path
      d="M18.3068 8.97262L14.7912 12.0062L15.8623 16.5429C15.9214 16.7892 15.9061 17.0475 15.8185 17.2851C15.7309 17.5227 15.5748 17.7291 15.37 17.8781C15.1652 18.027 14.9208 18.112 14.6678 18.1221C14.4147 18.1323 14.1643 18.0672 13.9482 17.9351L10.0029 15.507L6.05522 17.9351C5.83915 18.0664 5.58906 18.1309 5.33643 18.1204C5.0838 18.1098 4.83993 18.0248 4.63554 17.8759C4.43115 17.7271 4.27536 17.5211 4.18781 17.2839C4.10025 17.0467 4.08484 16.7889 4.14351 16.5429L5.21851 12.0062L1.70288 8.97262C1.51171 8.80739 1.37345 8.58951 1.30537 8.34617C1.23729 8.10284 1.2424 7.84484 1.32008 7.60439C1.39776 7.36395 1.54455 7.15172 1.74212 6.9942C1.9397 6.83669 2.1793 6.74087 2.43101 6.71871L7.04038 6.34684L8.81851 2.04371C8.91475 1.8092 9.07856 1.6086 9.28911 1.46742C9.49965 1.32624 9.74743 1.25085 10.0009 1.25085C10.2544 1.25085 10.5022 1.32624 10.7127 1.46742C10.9233 1.6086 11.0871 1.8092 11.1833 2.04371L12.9607 6.34684L17.5701 6.71871C17.8223 6.74004 18.0626 6.83533 18.2609 6.99263C18.4592 7.14992 18.6066 7.36224 18.6848 7.60298C18.7629 7.84371 18.7683 8.10216 18.7003 8.34594C18.6322 8.58972 18.4937 8.80799 18.3021 8.9734L18.3068 8.97262Z"
      fill="#FF2D55"
    />
  </svg>
);
export const MessagesFillIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M18.1299 14.5906C18.5617 13.6949 18.7736 12.7091 18.748 11.715C18.7223 10.721 18.4598 9.74737 17.9823 8.87513C17.5049 8.00288 16.8261 7.25716 16.0026 6.6999C15.179 6.14265 14.2343 5.78995 13.2471 5.67109C12.9186 4.90732 12.441 4.21676 11.8423 3.63986C11.2436 3.06296 10.5358 2.61132 9.76032 2.31138C8.98488 2.01144 8.15739 1.86923 7.32631 1.89307C6.49523 1.91692 5.67725 2.10635 4.92029 2.45027C4.16333 2.79419 3.4826 3.28568 2.91796 3.89596C2.35332 4.50625 1.91611 5.22306 1.63195 6.00441C1.34779 6.78577 1.22239 7.61597 1.26308 8.4464C1.30378 9.27683 1.50975 10.0908 1.86894 10.8406L1.30097 12.7711C1.23747 12.9866 1.23322 13.2152 1.28868 13.433C1.34414 13.6507 1.45725 13.8494 1.61612 14.0083C1.77498 14.1672 1.97373 14.2803 2.19145 14.3357C2.40917 14.3912 2.63781 14.3869 2.85332 14.3234L4.78378 13.7555C5.40365 14.0533 6.06823 14.2473 6.75097 14.3297C7.08267 15.1069 7.56853 15.8087 8.17918 16.3928C8.78982 16.9769 9.51257 17.4311 10.3037 17.728C11.0949 18.0248 11.938 18.1582 12.7822 18.1199C13.6263 18.0817 14.454 17.8726 15.215 17.5055L17.1455 18.0734C17.3609 18.1369 17.5895 18.1411 17.8071 18.0857C18.0247 18.0302 18.2234 17.9172 18.3822 17.7584C18.5411 17.5997 18.6542 17.4011 18.7097 17.1835C18.7653 16.9659 18.7612 16.7373 18.6978 16.5219L18.1299 14.5906ZM16.8603 14.7055L17.4994 16.875L15.3307 16.2367C15.174 16.1913 15.0057 16.209 14.8619 16.2859C13.711 16.9005 12.3656 17.0412 11.1124 16.6781C9.85922 16.315 8.79742 15.4768 8.15332 14.3422C9.00908 14.2529 9.83715 13.9877 10.5856 13.5632C11.334 13.1388 11.9867 12.5642 12.5026 11.8756C13.0185 11.1871 13.3865 10.3993 13.5836 9.56175C13.7807 8.72421 13.8026 7.85498 13.6478 7.0086C14.3935 7.18435 15.0887 7.52908 15.68 8.01618C16.2712 8.50327 16.7426 9.11971 17.0578 9.81791C17.373 10.5161 17.5236 11.2774 17.4979 12.043C17.4722 12.8086 17.2709 13.5581 16.9096 14.2336C16.8318 14.3783 16.8141 14.5478 16.8603 14.7055Z"
      fill="currentColor"
    />
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
    <path
      d="M14.375 2.5H5.625C5.29348 2.5 4.97554 2.6317 4.74112 2.86612C4.5067 3.10054 4.375 3.41848 4.375 3.75V17.5C4.37506 17.6115 4.40496 17.721 4.46161 17.8171C4.51826 17.9132 4.59959 17.9924 4.69716 18.0464C4.79473 18.1005 4.90498 18.1274 5.01648 18.1245C5.12798 18.1215 5.23666 18.0888 5.33125 18.0297L10 15.1117L14.6695 18.0297C14.7641 18.0886 14.8727 18.1212 14.9841 18.124C15.0955 18.1268 15.2056 18.0998 15.303 18.0458C15.4005 17.9918 15.4817 17.9127 15.5383 17.8167C15.5949 17.7208 15.6249 17.6114 15.625 17.5V3.75C15.625 3.41848 15.4933 3.10054 15.2589 2.86612C15.0245 2.6317 14.7065 2.5 14.375 2.5Z"
      fill="#007AFF"
    />
  </svg>
);
export const VideoPlayIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M8.125 0C6.51803 0 4.94714 0.476523 3.611 1.36931C2.27485 2.2621 1.23344 3.53105 0.618482 5.0157C0.00352044 6.50035 -0.157382 8.13401 0.156123 9.71011C0.469628 11.2862 1.24346 12.7339 2.37976 13.8702C3.51606 15.0065 4.9638 15.7804 6.5399 16.0939C8.11599 16.4074 9.74966 16.2465 11.2343 15.6315C12.719 15.0166 13.9879 13.9752 14.8807 12.639C15.7735 11.3029 16.25 9.73197 16.25 8.125C16.2477 5.97081 15.391 3.90551 13.8677 2.38227C12.3445 0.85903 10.2792 0.00227486 8.125 0ZM11.293 8.63906L7.23047 11.4516C7.13669 11.5164 7.02694 11.5544 6.91313 11.5613C6.79932 11.5683 6.68577 11.544 6.58478 11.491C6.4838 11.4381 6.39922 11.3585 6.34021 11.2609C6.2812 11.1634 6.25 11.0515 6.25 10.9375V5.3125C6.25 5.19847 6.2812 5.08662 6.34021 4.98905C6.39922 4.89149 6.4838 4.81192 6.58478 4.75897C6.68577 4.70603 6.79932 4.68171 6.91313 4.68867C7.02694 4.69563 7.13669 4.73359 7.23047 4.79844L11.293 7.61094C11.3761 7.66844 11.4441 7.74525 11.491 7.83478C11.538 7.92432 11.5625 8.0239 11.5625 8.125C11.5625 8.2261 11.538 8.32568 11.491 8.41522C11.4441 8.50475 11.3761 8.58156 11.293 8.63906Z"
      fill="#FAFAFA"
    />
  </svg>
);
export const SearchIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M17.9438 17.0578L14.0321 13.1469C15.1659 11.7857 15.7312 10.0398 15.6106 8.27244C15.4899 6.50506 14.6925 4.85223 13.3843 3.65779C12.076 2.46334 10.3576 1.81926 8.58657 1.85951C6.81553 1.89976 5.12818 2.62125 3.87554 3.87389C2.62289 5.12653 1.9014 6.81388 1.86115 8.58492C1.8209 10.356 2.46499 12.0744 3.65943 13.3826C4.85387 14.6909 6.5067 15.4883 8.27409 15.6089C10.0415 15.7296 11.7874 15.1642 13.1485 14.0305L17.0595 17.9422C17.1175 18.0003 17.1865 18.0463 17.2623 18.0777C17.3382 18.1092 17.4195 18.1253 17.5016 18.1253C17.5838 18.1253 17.6651 18.1092 17.741 18.0777C17.8168 18.0463 17.8858 18.0003 17.9438 17.9422C18.0019 17.8841 18.048 17.8152 18.0794 17.7393C18.1108 17.6634 18.127 17.5821 18.127 17.5C18.127 17.4179 18.1108 17.3366 18.0794 17.2607C18.048 17.1848 18.0019 17.1159 17.9438 17.0578ZM3.12664 8.75C3.12664 7.63748 3.45654 6.54994 4.07463 5.62491C4.69271 4.69989 5.57121 3.97892 6.59905 3.55317C7.62688 3.12743 8.75788 3.01604 9.84903 3.23308C10.9402 3.45012 11.9424 3.98585 12.7291 4.77252C13.5158 5.55919 14.0515 6.56147 14.2686 7.65261C14.4856 8.74376 14.3742 9.87476 13.9485 10.9026C13.5227 11.9304 12.8018 12.8089 11.8767 13.427C10.9517 14.0451 9.86416 14.375 8.75164 14.375C7.26031 14.3733 5.83053 13.7802 4.77599 12.7256C3.72146 11.6711 3.1283 10.2413 3.12664 8.75Z"
      fill="currentColor"
    />
  </svg>
);

export const StarIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
<path opacity="0.2" d="M17.8944 8.49926L14.0897 11.7805L15.2522 16.686C15.2829 16.812 15.2756 16.9444 15.2311 17.0663C15.1867 17.1882 15.1071 17.2942 15.0024 17.3708C14.8977 17.4475 14.7726 17.4914 14.643 17.497C14.5134 17.5027 14.385 17.4697 14.2741 17.4024L9.99907 14.7727L5.72407 17.4016C5.61315 17.4689 5.48476 17.5019 5.35512 17.4963C5.22549 17.4907 5.10043 17.4467 4.99575 17.3701C4.89107 17.2934 4.81146 17.1874 4.767 17.0655C4.72254 16.9436 4.71521 16.8113 4.74594 16.6852L5.90844 11.7797L2.10375 8.49848C2.00675 8.41331 1.93681 8.30158 1.90257 8.17711C1.86834 8.05264 1.8713 7.92087 1.9111 7.79806C1.9509 7.67526 2.02579 7.56679 2.12653 7.48607C2.22727 7.40534 2.34944 7.35588 2.47797 7.34379L7.47094 6.93754L9.39438 2.28129C9.44341 2.16117 9.52712 2.05837 9.63481 1.98601C9.74251 1.91365 9.86932 1.875 9.99907 1.875C10.1288 1.875 10.2556 1.91365 10.3633 1.98601C10.471 2.05837 10.5547 2.16117 10.6038 2.28129L12.5272 6.93754L17.5202 7.34379C17.6489 7.35574 17.7712 7.40515 17.8721 7.48593C17.973 7.56671 18.0481 7.6753 18.0879 7.79826C18.1277 7.92123 18.1306 8.05317 18.0962 8.17777C18.0618 8.30236 17.9916 8.41414 17.8944 8.49926Z" fill="currentColor"/>
<path d="M18.6854 7.59845C18.6072 7.35824 18.4598 7.14652 18.2615 6.98998C18.0633 6.83344 17.8231 6.73907 17.5713 6.71876L12.9619 6.34689L11.1823 2.04298C11.086 1.80846 10.9222 1.60786 10.7117 1.46668C10.5011 1.3255 10.2533 1.25012 9.99983 1.25012C9.74633 1.25012 9.49856 1.3255 9.28801 1.46668C9.07747 1.60786 8.91366 1.80846 8.81741 2.04298L7.03929 6.34611L2.42757 6.71876C2.17536 6.74009 1.93506 6.83538 1.73677 6.99267C1.53847 7.14997 1.39101 7.36229 1.31285 7.60303C1.23469 7.84376 1.22931 8.10221 1.29738 8.34599C1.36546 8.58977 1.50396 8.80804 1.69554 8.97345L5.21116 12.007L4.14007 16.543C4.08016 16.7894 4.09483 17.0481 4.18221 17.2862C4.26958 17.5242 4.42573 17.731 4.63082 17.8801C4.83591 18.0293 5.0807 18.1142 5.33411 18.124C5.58752 18.1338 5.83814 18.0681 6.05413 17.9352L9.99944 15.507L13.9471 17.9352C14.1632 18.0665 14.4133 18.1309 14.6659 18.1204C14.9185 18.1099 15.1624 18.0248 15.3668 17.876C15.5712 17.7271 15.727 17.5212 15.8145 17.2839C15.9021 17.0467 15.9175 16.7889 15.8588 16.543L14.7838 12.0063L18.2994 8.97267C18.4926 8.80753 18.6323 8.58879 18.701 8.34415C18.7697 8.09951 18.7643 7.83999 18.6854 7.59845ZM17.4869 8.0258L13.6823 11.307C13.5955 11.3818 13.5309 11.479 13.4957 11.588C13.4604 11.697 13.4558 11.8136 13.4823 11.925L14.6448 16.8313C14.6478 16.838 14.6481 16.8457 14.6456 16.8527C14.6431 16.8596 14.6381 16.8654 14.6315 16.8688C14.6174 16.8797 14.6135 16.8774 14.6018 16.8688L10.3268 14.2399C10.2283 14.1793 10.115 14.1473 9.99944 14.1473C9.88387 14.1473 9.77055 14.1793 9.6721 14.2399L5.3971 16.8703C5.38538 16.8774 5.38225 16.8797 5.36741 16.8703C5.36082 16.867 5.35576 16.8612 5.35329 16.8542C5.35082 16.8472 5.35112 16.8396 5.35413 16.8328L6.51663 11.9266C6.54312 11.8151 6.53848 11.6986 6.50321 11.5896C6.46794 11.4806 6.4034 11.3834 6.31663 11.3086L2.51194 8.02736C2.50257 8.01955 2.49397 8.01251 2.50179 7.9883C2.5096 7.96408 2.51585 7.9672 2.52757 7.96564L7.52132 7.56251C7.63586 7.55269 7.74547 7.51147 7.83809 7.44337C7.93072 7.37528 8.00277 7.28297 8.04632 7.17658L9.96976 2.51954C9.976 2.50626 9.97835 2.50001 9.9971 2.50001C10.0158 2.50001 10.0182 2.50626 10.0244 2.51954L11.9526 7.17658C11.9965 7.28301 12.069 7.37523 12.1621 7.44305C12.2551 7.51088 12.3651 7.55168 12.4799 7.56095L17.4737 7.96408C17.4854 7.96408 17.4924 7.96408 17.4994 7.98673C17.5065 8.00939 17.4994 8.01798 17.4869 8.0258Z" fill="currentColor"/>
</svg>
)
export const MessagesTwo = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
<path opacity="0.2" d="M18.0977 16.6977C18.1293 16.8054 18.1313 16.9196 18.1036 17.0283C18.0758 17.1371 18.0193 17.2364 17.9399 17.3157C17.8606 17.3951 17.7613 17.4516 17.6525 17.4794C17.5438 17.5071 17.4296 17.5051 17.3219 17.4735L15.1555 16.836C14.4398 17.2187 13.6499 17.4421 12.8398 17.491C12.0297 17.5399 11.2187 17.413 10.4622 17.119C9.70578 16.8251 9.02183 16.3711 8.45727 15.7881C7.89271 15.2051 7.46089 14.5069 7.19141 13.7414C7.29375 13.7469 7.39609 13.75 7.49922 13.75C8.39831 13.7501 9.28431 13.5346 10.083 13.1217C10.8816 12.7088 11.5697 12.1105 12.0894 11.3768C12.6092 10.6432 12.9455 9.7957 13.0703 8.90531C13.195 8.01491 13.1044 7.10759 12.8062 6.2594C13.7511 6.31071 14.6678 6.59957 15.4714 7.09924C16.275 7.59891 16.9396 8.29325 17.4036 9.11796C17.8676 9.94268 18.1161 10.8711 18.1259 11.8174C18.1358 12.7636 17.9068 13.697 17.4602 14.5313L18.0977 16.6977Z" fill="currentColor"/>
<path d="M18.1299 14.5906C18.5617 13.6949 18.7736 12.7091 18.748 11.715C18.7223 10.721 18.4598 9.74737 17.9823 8.87513C17.5049 8.00288 16.8261 7.25716 16.0026 6.6999C15.179 6.14265 14.2343 5.78995 13.2471 5.67109C12.9186 4.90732 12.441 4.21676 11.8423 3.63986C11.2436 3.06296 10.5358 2.61132 9.76032 2.31138C8.98488 2.01144 8.15739 1.86923 7.32631 1.89307C6.49523 1.91692 5.67725 2.10635 4.92029 2.45027C4.16333 2.79419 3.4826 3.28568 2.91796 3.89596C2.35332 4.50625 1.91611 5.22306 1.63195 6.00441C1.34779 6.78577 1.22239 7.61597 1.26308 8.4464C1.30378 9.27683 1.50975 10.0908 1.86894 10.8406L1.30097 12.7711C1.23747 12.9866 1.23322 13.2152 1.28868 13.433C1.34414 13.6507 1.45725 13.8494 1.61612 14.0083C1.77498 14.1672 1.97373 14.2803 2.19145 14.3357C2.40917 14.3912 2.63781 14.3869 2.85332 14.3234L4.78378 13.7555C5.40365 14.0533 6.06823 14.2473 6.75097 14.3297C7.08267 15.1069 7.56853 15.8087 8.17918 16.3928C8.78982 16.9769 9.51257 17.4311 10.3037 17.728C11.0949 18.0248 11.938 18.1582 12.7822 18.1199C13.6263 18.0817 14.454 17.8726 15.215 17.5055L17.1455 18.0734C17.3609 18.1369 17.5895 18.1411 17.8071 18.0857C18.0247 18.0302 18.2234 17.9172 18.3822 17.7584C18.5411 17.5997 18.6542 17.4011 18.7097 17.1835C18.7653 16.9659 18.7612 16.7373 18.6978 16.5219L18.1299 14.5906ZM4.84316 12.4609C4.78343 12.4611 4.72401 12.4695 4.6666 12.4859L2.49941 13.125L3.13769 10.9563C3.18309 10.7996 3.16542 10.6313 3.08847 10.4875C2.52309 9.43014 2.3565 8.20482 2.61907 7.03489C2.88164 5.86497 3.55589 4.82836 4.5189 4.11402C5.48191 3.39969 6.66956 3.0552 7.86534 3.14336C9.06112 3.23152 10.1854 3.74645 11.0332 4.59429C11.8811 5.44213 12.396 6.56642 12.4842 7.7622C12.5723 8.95798 12.2278 10.1456 11.5135 11.1086C10.7992 12.0716 9.76257 12.7459 8.59264 13.0085C7.42272 13.271 6.19739 13.1044 5.14003 12.5391C5.04911 12.4887 4.94707 12.4619 4.84316 12.4609ZM16.858 14.7055L17.4994 16.875L15.3307 16.2367C15.174 16.1913 15.0057 16.209 14.8619 16.2859C13.711 16.9005 12.3656 17.0412 11.1124 16.6781C9.85922 16.315 8.79742 15.4768 8.15332 14.3422C9.00908 14.2529 9.83715 13.9877 10.5856 13.5632C11.334 13.1388 11.9867 12.5642 12.5026 11.8756C13.0185 11.1871 13.3865 10.3993 13.5836 9.56175C13.7807 8.72421 13.8026 7.85498 13.6478 7.0086C14.3935 7.18435 15.0887 7.52908 15.68 8.01618C16.2712 8.50327 16.7426 9.11971 17.0578 9.81791C17.373 10.5161 17.5236 11.2774 17.4979 12.043C17.4722 12.8086 17.2709 13.5581 16.9096 14.2336C16.8318 14.3783 16.8141 14.5478 16.8603 14.7055H16.858Z" fill="currentColor"/>

  </svg>
)

export const SingleStarIcon = ({ size = 72, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path
      d="M10.9833 5.38355L8.87392 7.2037L9.51657 9.92574C9.55203 10.0735 9.5429 10.2285 9.49033 10.371C9.43777 10.5136 9.34412 10.6374 9.22123 10.7268C9.09834 10.8162 8.95171 10.8672 8.79987 10.8732C8.64803 10.8793 8.4978 10.8403 8.36813 10.761L6.00095 9.30417L3.63235 10.761C3.50271 10.8398 3.35265 10.8785 3.20107 10.8722C3.0495 10.8659 2.90318 10.8148 2.78054 10.7255C2.65791 10.6362 2.56444 10.5126 2.5119 10.3703C2.45937 10.228 2.45012 10.0733 2.48532 9.92574L3.13032 7.2037L1.02095 5.38355C0.906243 5.28441 0.823287 5.15368 0.782439 5.00768C0.741591 4.86168 0.744662 4.70688 0.791267 4.56261C0.837872 4.41834 0.925947 4.29101 1.04449 4.1965C1.16304 4.10199 1.3068 4.0445 1.45782 4.0312L4.22345 3.80808L5.29032 1.2262C5.34807 1.08549 5.44636 0.965133 5.57268 0.880425C5.69901 0.795717 5.84768 0.750488 5.99978 0.750488C6.15187 0.750488 6.30054 0.795717 6.42687 0.880425C6.55319 0.965133 6.65148 1.08549 6.70923 1.2262L7.77563 3.80808L10.5413 4.0312C10.6926 4.044 10.8368 4.10117 10.9557 4.19555C11.0747 4.28993 11.1632 4.41732 11.2101 4.56176C11.257 4.7062 11.2602 4.86127 11.2194 5.00754C11.1785 5.15381 11.0954 5.28477 10.9805 5.38402L10.9833 5.38355Z"
      fill="currentColor"
    />
  </svg>
);
export const SingleOutlineStarIcon = ({
  size = 20,
  className,
  color,
}: IconProps) => (
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
      d="M18.6854 7.59845C18.6072 7.35824 18.4598 7.14652 18.2615 6.98998C18.0633 6.83344 17.8231 6.73907 17.5713 6.71876L12.9619 6.34689L11.1823 2.04298C11.086 1.80846 10.9222 1.60786 10.7117 1.46668C10.5011 1.3255 10.2533 1.25012 9.99983 1.25012C9.74633 1.25012 9.49856 1.3255 9.28801 1.46668C9.07747 1.60786 8.91366 1.80846 8.81741 2.04298L7.03929 6.34611L2.42757 6.71876C2.17536 6.74009 1.93506 6.83538 1.73677 6.99267C1.53847 7.14997 1.39101 7.36229 1.31285 7.60303C1.23469 7.84376 1.22931 8.10221 1.29738 8.34599C1.36546 8.58977 1.50396 8.80804 1.69554 8.97345L5.21116 12.007L4.14007 16.543C4.08016 16.7894 4.09483 17.0481 4.18221 17.2862C4.26958 17.5242 4.42573 17.731 4.63082 17.8801C4.83591 18.0293 5.0807 18.1142 5.33411 18.124C5.58752 18.1338 5.83814 18.0681 6.05413 17.9352L9.99944 15.507L13.9471 17.9352C14.1632 18.0665 14.4133 18.1309 14.6659 18.1204C14.9185 18.1099 15.1624 18.0248 15.3668 17.876C15.5712 17.7271 15.727 17.5212 15.8145 17.2839C15.9021 17.0467 15.9175 16.7889 15.8588 16.543L14.7838 12.0063L18.2994 8.97267C18.4926 8.80753 18.6323 8.58879 18.701 8.34415C18.7697 8.09951 18.7643 7.83999 18.6854 7.59845ZM17.4869 8.0258L13.6823 11.307C13.5955 11.3818 13.5309 11.479 13.4957 11.588C13.4604 11.697 13.4558 11.8136 13.4823 11.925L14.6448 16.8313C14.6478 16.838 14.6481 16.8457 14.6456 16.8527C14.6431 16.8596 14.6381 16.8654 14.6315 16.8688C14.6174 16.8797 14.6135 16.8774 14.6018 16.8688L10.3268 14.2399C10.2283 14.1793 10.115 14.1473 9.99944 14.1473C9.88387 14.1473 9.77055 14.1793 9.6721 14.2399L5.3971 16.8703C5.38538 16.8774 5.38225 16.8797 5.36741 16.8703C5.36082 16.867 5.35576 16.8612 5.35329 16.8542C5.35082 16.8472 5.35112 16.8396 5.35413 16.8328L6.51663 11.9266C6.54312 11.8151 6.53848 11.6986 6.50321 11.5896C6.46794 11.4806 6.4034 11.3834 6.31663 11.3086L2.51194 8.02736C2.50257 8.01955 2.49397 8.01251 2.50179 7.9883C2.5096 7.96408 2.51585 7.9672 2.52757 7.96564L7.52132 7.56251C7.63586 7.55269 7.74547 7.51147 7.83809 7.44337C7.93072 7.37528 8.00277 7.28297 8.04632 7.17658L9.96976 2.51954C9.976 2.50626 9.97835 2.50001 9.9971 2.50001C10.0158 2.50001 10.0182 2.50626 10.0244 2.51954L11.9526 7.17658C11.9965 7.28301 12.069 7.37523 12.1621 7.44305C12.2551 7.51088 12.3651 7.55168 12.4799 7.56095L17.4737 7.96408C17.4854 7.96408 17.4924 7.96408 17.4994 7.98673C17.5065 8.00939 17.4994 8.01798 17.4869 8.0258Z"
      fill="currentColor"
    />
  </svg>
);
export const OutlineMessageIcon = ({
  size = 16,
  className,
  color,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path
      d="M8.00142 1.5C6.87921 1.49976 5.77605 1.79006 4.79933 2.34264C3.8226 2.89523 3.00557 3.69128 2.42778 4.65331C1.84998 5.61534 1.53109 6.71058 1.50216 7.83241C1.47323 8.95425 1.73523 10.0645 2.26267 11.055L1.55329 13.1831C1.49453 13.3593 1.48601 13.5484 1.52867 13.7292C1.57133 13.9099 1.66349 14.0753 1.79483 14.2066C1.92616 14.3379 2.09148 14.4301 2.27225 14.4728C2.45302 14.5154 2.6421 14.5069 2.81829 14.4481L4.94642 13.7388C5.81815 14.2024 6.78405 14.4614 7.77081 14.496C8.75757 14.5306 9.73925 14.34 10.6413 13.9386C11.5434 13.5372 12.3422 12.9355 12.977 12.1793C13.6119 11.4231 14.0661 10.5322 14.3052 9.57421C14.5444 8.61624 14.5621 7.61638 14.3571 6.65052C14.1521 5.68467 13.7298 4.77821 13.1222 3.99995C12.5146 3.22169 11.7376 2.59208 10.8504 2.15891C9.96308 1.72574 8.98878 1.50041 8.00142 1.5ZM8.00142 13.5C7.03453 13.5007 6.0846 13.246 5.24767 12.7619C5.18639 12.7263 5.11826 12.7042 5.04779 12.697C4.97733 12.6898 4.90613 12.6976 4.83892 12.72L2.50142 13.5L3.28079 11.1625C3.30326 11.0953 3.3112 11.0242 3.30409 10.9537C3.29698 10.8832 3.27498 10.8151 3.23954 10.7537C2.63328 9.70557 2.38986 8.48661 2.54706 7.28598C2.70426 6.08534 3.25329 4.97014 4.10897 4.11337C4.96466 3.2566 6.07916 2.70617 7.2796 2.54745C8.48004 2.38873 9.6993 2.63061 10.7482 3.23555C11.7972 3.8405 12.6172 4.77469 13.081 5.89322C13.5448 7.01175 13.6266 8.25208 13.3136 9.42181C13.0005 10.5915 12.3102 11.6253 11.3498 12.3626C10.3893 13.1 9.2123 13.4998 8.00142 13.5Z"
      fill="currentColor"
    />
  </svg>
);
export const OutlineThumbUpIcon = ({
  size = 16,
  className,
  color,
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path
      d="M14.625 5.0075C14.4842 4.84795 14.3111 4.72019 14.1171 4.63269C13.9232 4.54519 13.7128 4.49996 13.5 4.5H10V3.5C10 2.83696 9.73661 2.20107 9.26777 1.73223C8.79893 1.26339 8.16304 1 7.5 1C7.40711 0.999934 7.31604 1.02574 7.237 1.07454C7.15796 1.12333 7.09407 1.19318 7.0525 1.27625L4.69125 6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7V12.5C1 12.7652 1.10536 13.0196 1.29289 13.2071C1.48043 13.3946 1.73478 13.5 2 13.5H12.75C13.1154 13.5001 13.4684 13.3668 13.7425 13.1252C14.0166 12.8835 14.1931 12.5501 14.2388 12.1875L14.9888 6.1875C15.0153 5.97626 14.9966 5.76179 14.9339 5.55833C14.8712 5.35488 14.7659 5.16711 14.625 5.0075ZM2 7H4.5V12.5H2V7ZM13.9963 6.0625L13.2463 12.0625C13.231 12.1834 13.1722 12.2945 13.0808 12.3751C12.9895 12.4556 12.8718 12.5 12.75 12.5H5.5V6.61812L7.79438 2.02875C8.13443 2.09681 8.4404 2.2806 8.66021 2.54884C8.88002 2.81708 9.0001 3.1532 9 3.5V5C9 5.13261 9.05268 5.25979 9.14645 5.35355C9.24022 5.44732 9.36739 5.5 9.5 5.5H13.5C13.571 5.49998 13.6411 5.51505 13.7058 5.54423C13.7705 5.5734 13.8282 5.61601 13.8751 5.66922C13.9221 5.72242 13.9571 5.78501 13.978 5.85282C13.9989 5.92063 14.0051 5.9921 13.9963 6.0625Z"
      fill="currentColor"
    />
  </svg>
);

export const IconImage = ({ size = 20, className, color }: IconProps) => (
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
      d="M16.875 3.125H5.625C5.29348 3.125 4.97554 3.2567 4.74112 3.49112C4.5067 3.72554 4.375 4.04348 4.375 4.375V5.625H3.125C2.79348 5.625 2.47554 5.7567 2.24112 5.99112C2.0067 6.22554 1.875 6.54348 1.875 6.875V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H14.375C14.7065 16.875 15.0245 16.7433 15.2589 16.5089C15.4933 16.2745 15.625 15.9565 15.625 15.625V14.375H16.875C17.2065 14.375 17.5245 14.2433 17.7589 14.0089C17.9933 13.7745 18.125 13.4565 18.125 13.125V4.375C18.125 4.04348 17.9933 3.72554 17.7589 3.49112C17.5245 3.2567 17.2065 3.125 16.875 3.125ZM5.625 4.375H16.875V9.27734L16.0883 8.49141C15.9722 8.3753 15.8344 8.2832 15.6827 8.22037C15.531 8.15753 15.3685 8.12519 15.2043 8.12519C15.0401 8.12519 14.8776 8.15753 14.7259 8.22037C14.5742 8.2832 14.4364 8.3753 14.3203 8.49141L12.7578 10.0539L9.32031 6.61641C9.08592 6.38216 8.7681 6.25058 8.43672 6.25058C8.10534 6.25058 7.78752 6.38216 7.55312 6.61641L5.625 8.54453V4.375ZM14.375 15.625H3.125V6.875H4.375V13.125C4.375 13.4565 4.5067 13.7745 4.74112 14.0089C4.97554 14.2433 5.29348 14.375 5.625 14.375H14.375V15.625ZM16.875 13.125H5.625V10.3125L8.4375 7.5L12.3172 11.3797C12.4344 11.4968 12.5933 11.5626 12.759 11.5626C12.9247 11.5626 13.0836 11.4968 13.2008 11.3797L15.2055 9.375L16.875 11.0453V13.125ZM12.5 6.5625C12.5 6.37708 12.555 6.19582 12.658 6.04165C12.761 5.88748 12.9074 5.76732 13.0787 5.69636C13.25 5.62541 13.4385 5.60684 13.6204 5.64301C13.8023 5.67919 13.9693 5.76848 14.1004 5.89959C14.2315 6.0307 14.3208 6.19775 14.357 6.3796C14.3932 6.56146 14.3746 6.74996 14.3036 6.92127C14.2327 7.09257 14.1125 7.23899 13.9583 7.342C13.8042 7.44502 13.6229 7.5 13.4375 7.5C13.1889 7.5 12.9504 7.40123 12.7746 7.22541C12.5988 7.0496 12.5 6.81114 12.5 6.5625Z"
      fill="currentColor"
    />
  </svg>
);

export const AiIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M19.3756 9.68756C19.3748 8.85969 19.1395 8.04898 18.6971 7.34925C18.2547 6.64952 17.6231 6.08938 16.8756 5.73365V5.62506C16.8749 4.81976 16.6149 4.03609 16.1342 3.38999C15.6535 2.7439 14.9776 2.26971 14.2065 2.03758C13.4354 1.80546 12.61 1.82773 11.8526 2.10111C11.0951 2.37449 10.4457 2.88445 10.0006 3.55553C9.55544 2.88445 8.90609 2.37449 8.14861 2.10111C7.39114 1.82773 6.56578 1.80546 5.79466 2.03758C5.02354 2.26971 4.34763 2.7439 3.86694 3.38999C3.38625 4.03609 3.12631 4.81976 3.12559 5.62506V5.73365C2.37741 6.08841 1.74527 6.6482 1.30262 7.34797C0.859977 8.04774 0.625 8.85876 0.625 9.68678C0.625 10.5148 0.859977 11.3258 1.30262 12.0256C1.74527 12.7254 2.37741 13.2851 3.12559 13.6399V13.7501C3.12631 14.5554 3.38625 15.339 3.86694 15.9851C4.34763 16.6312 5.02354 17.1054 5.79466 17.3375C6.56578 17.5697 7.39114 17.5474 8.14861 17.274C8.90609 17.0006 9.55544 16.4907 10.0006 15.8196C10.4457 16.4907 11.0951 17.0006 11.8526 17.274C12.61 17.5474 13.4354 17.5697 14.2065 17.3375C14.9776 17.1054 15.6535 16.6312 16.1342 15.9851C16.6149 15.339 16.8749 14.5554 16.8756 13.7501V13.6399C17.623 13.2844 18.2545 12.7246 18.6969 12.0251C19.1394 11.3257 19.3747 10.5152 19.3756 9.68756ZM6.87559 16.2501C6.25914 16.25 5.66446 16.0221 5.20576 15.6103C4.74707 15.1985 4.4567 14.6317 4.39043 14.0188C4.59254 14.0476 4.79643 14.0623 5.00059 14.0626H5.62559C5.79135 14.0626 5.95032 13.9967 6.06753 13.8795C6.18474 13.7623 6.25059 13.6033 6.25059 13.4376C6.25059 13.2718 6.18474 13.1128 6.06753 12.9956C5.95032 12.8784 5.79135 12.8126 5.62559 12.8126H5.00059C4.26274 12.8134 3.54839 12.5532 2.98401 12.0779C2.41962 11.6026 2.04161 10.943 1.9169 10.2158C1.79218 9.48853 1.92881 8.74063 2.3026 8.10447C2.67638 7.46831 3.26321 6.98493 3.95918 6.7399C4.08096 6.69679 4.18638 6.617 4.26095 6.51151C4.33552 6.40603 4.37557 6.28003 4.37559 6.15084V5.62506C4.37559 4.96202 4.63898 4.32614 5.10782 3.85729C5.57666 3.38845 6.21255 3.12506 6.87559 3.12506C7.53863 3.12506 8.17451 3.38845 8.64335 3.85729C9.1122 4.32614 9.37559 4.96202 9.37559 5.62506V10.9579C8.68927 10.3406 7.79866 9.99938 6.87559 10.0001C6.70983 10.0001 6.55086 10.0659 6.43364 10.1831C6.31643 10.3003 6.25059 10.4593 6.25059 10.6251C6.25059 10.7908 6.31643 10.9498 6.43364 11.067C6.55086 11.1842 6.70983 11.2501 6.87559 11.2501C7.53863 11.2501 8.17451 11.5135 8.64335 11.9823C9.1122 12.4511 9.37559 13.087 9.37559 13.7501C9.37559 14.4131 9.1122 15.049 8.64335 15.5178C8.17451 15.9867 7.53863 16.2501 6.87559 16.2501ZM15.0006 12.8126H14.3756C14.2098 12.8126 14.0509 12.8784 13.9336 12.9956C13.8164 13.1128 13.7506 13.2718 13.7506 13.4376C13.7506 13.6033 13.8164 13.7623 13.9336 13.8795C14.0509 13.9967 14.2098 14.0626 14.3756 14.0626H15.0006C15.2047 14.0623 15.4086 14.0476 15.6107 14.0188C15.5588 14.499 15.3689 14.9539 15.0639 15.3285C14.759 15.703 14.3521 15.9812 13.8924 16.1295C13.4327 16.2777 12.9399 16.2895 12.4735 16.1636C12.0072 16.0377 11.5874 15.7794 11.2648 15.42C10.9421 15.0605 10.7305 14.6153 10.6555 14.1382C10.5806 13.661 10.6454 13.1724 10.8422 12.7313C11.0391 12.2902 11.3595 11.9156 11.7647 11.6527C12.1699 11.3898 12.6426 11.25 13.1256 11.2501C13.2913 11.2501 13.4503 11.1842 13.5675 11.067C13.6847 10.9498 13.7506 10.7908 13.7506 10.6251C13.7506 10.4593 13.6847 10.3003 13.5675 10.1831C13.4503 10.0659 13.2913 10.0001 13.1256 10.0001C12.2025 9.99938 11.3119 10.3406 10.6256 10.9579V5.62506C10.6256 4.96202 10.889 4.32614 11.3578 3.85729C11.8267 3.38845 12.4625 3.12506 13.1256 3.12506C13.7886 3.12506 14.4245 3.38845 14.8934 3.85729C15.3622 4.32614 15.6256 4.96202 15.6256 5.62506V6.15084C15.6256 6.28003 15.6657 6.40603 15.7402 6.51151C15.8148 6.617 15.9202 6.69679 16.042 6.7399C16.738 6.98493 17.3248 7.46831 17.6986 8.10447C18.0724 8.74063 18.209 9.48853 18.0843 10.2158C17.9596 10.943 17.5816 11.6026 17.0172 12.0779C16.4528 12.5532 15.7384 12.8134 15.0006 12.8126ZM16.2506 8.75006C16.2506 8.91582 16.1847 9.07479 16.0675 9.192C15.9503 9.30921 15.7913 9.37506 15.6256 9.37506H15.3131C14.5672 9.37506 13.8518 9.07874 13.3244 8.5513C12.7969 8.02385 12.5006 7.30848 12.5006 6.56256V6.25006C12.5006 6.0843 12.5664 5.92533 12.6836 5.80812C12.8009 5.69091 12.9598 5.62506 13.1256 5.62506C13.2913 5.62506 13.4503 5.69091 13.5675 5.80812C13.6847 5.92533 13.7506 6.0843 13.7506 6.25006V6.56256C13.7506 6.97696 13.9152 7.37439 14.2082 7.66742C14.5013 7.96044 14.8987 8.12506 15.3131 8.12506H15.6256C15.7913 8.12506 15.9503 8.19091 16.0675 8.30812C16.1847 8.42533 16.2506 8.5843 16.2506 8.75006ZM4.68809 9.37506H4.37559C4.20983 9.37506 4.05085 9.30921 3.93364 9.192C3.81643 9.07479 3.75059 8.91582 3.75059 8.75006C3.75059 8.5843 3.81643 8.42533 3.93364 8.30812C4.05085 8.19091 4.20983 8.12506 4.37559 8.12506H4.68809C5.10249 8.12506 5.49992 7.96044 5.79294 7.66742C6.08597 7.37439 6.25059 6.97696 6.25059 6.56256V6.25006C6.25059 6.0843 6.31643 5.92533 6.43364 5.80812C6.55086 5.69091 6.70983 5.62506 6.87559 5.62506C7.04135 5.62506 7.20032 5.69091 7.31753 5.80812C7.43474 5.92533 7.50059 6.0843 7.50059 6.25006V6.56256C7.50059 7.30848 7.20427 8.02385 6.67682 8.5513C6.14938 9.07874 5.43401 9.37506 4.68809 9.37506Z"
      fill="currentColor"
    />
  </svg>
);

export const PropertyIcon = ({ size = 20, className, color }: IconProps) => (
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
      opacity="0.2"
      d="M10.625 2.5V16.875H3.125V6.66797C3.12493 6.56505 3.15029 6.4637 3.1988 6.37293C3.24732 6.28216 3.31751 6.20478 3.40313 6.14766L9.65312 1.98125C9.74716 1.91851 9.85645 1.88245 9.96937 1.87691C10.0823 1.87137 10.1946 1.89656 10.2943 1.94979C10.394 2.00302 10.4775 2.0823 10.5357 2.17919C10.5939 2.27609 10.6248 2.38696 10.625 2.5Z"
      fill="currentColor"
    />
    <path
      d="M18.75 16.25H17.5V7.50002C17.5 7.1685 17.3683 6.85056 17.1339 6.61614C16.8995 6.38172 16.5815 6.25002 16.25 6.25002H11.25V2.50002C11.2501 2.27366 11.1888 2.05151 11.0726 1.85728C10.9563 1.66306 10.7895 1.50404 10.59 1.3972C10.3904 1.29036 10.1656 1.23972 9.93951 1.25067C9.71342 1.26163 9.49454 1.33377 9.30625 1.45939L3.05625 5.62502C2.8848 5.73941 2.74429 5.89442 2.64724 6.07626C2.55019 6.25809 2.49961 6.4611 2.5 6.66721V16.25H1.25C1.08424 16.25 0.925268 16.3159 0.808058 16.4331C0.690848 16.5503 0.625 16.7093 0.625 16.875C0.625 17.0408 0.690848 17.1998 0.808058 17.317C0.925268 17.4342 1.08424 17.5 1.25 17.5H18.75C18.9158 17.5 19.0747 17.4342 19.1919 17.317C19.3092 17.1998 19.375 17.0408 19.375 16.875C19.375 16.7093 19.3092 16.5503 19.1919 16.4331C19.0747 16.3159 18.9158 16.25 18.75 16.25ZM16.25 7.50002V16.25H11.25V7.50002H16.25ZM3.75 6.66721L10 2.50002V16.25H3.75V6.66721ZM8.75 8.75002V10C8.75 10.1658 8.68415 10.3248 8.56694 10.442C8.44973 10.5592 8.29076 10.625 8.125 10.625C7.95924 10.625 7.80027 10.5592 7.68306 10.442C7.56585 10.3248 7.5 10.1658 7.5 10V8.75002C7.5 8.58426 7.56585 8.42529 7.68306 8.30808C7.80027 8.19087 7.95924 8.12502 8.125 8.12502C8.29076 8.12502 8.44973 8.19087 8.56694 8.30808C8.68415 8.42529 8.75 8.58426 8.75 8.75002ZM6.25 8.75002V10C6.25 10.1658 6.18415 10.3248 6.06694 10.442C5.94973 10.5592 5.79076 10.625 5.625 10.625C5.45924 10.625 5.30027 10.5592 5.18306 10.442C5.06585 10.3248 5 10.1658 5 10V8.75002C5 8.58426 5.06585 8.42529 5.18306 8.30808C5.30027 8.19087 5.45924 8.12502 5.625 8.12502C5.79076 8.12502 5.94973 8.19087 6.06694 8.30808C6.18415 8.42529 6.25 8.58426 6.25 8.75002ZM6.25 13.125V14.375C6.25 14.5408 6.18415 14.6998 6.06694 14.817C5.94973 14.9342 5.79076 15 5.625 15C5.45924 15 5.30027 14.9342 5.18306 14.817C5.06585 14.6998 5 14.5408 5 14.375V13.125C5 12.9593 5.06585 12.8003 5.18306 12.6831C5.30027 12.5659 5.45924 12.5 5.625 12.5C5.79076 12.5 5.94973 12.5659 6.06694 12.6831C6.18415 12.8003 6.25 12.9593 6.25 13.125ZM8.75 13.125V14.375C8.75 14.5408 8.68415 14.6998 8.56694 14.817C8.44973 14.9342 8.29076 15 8.125 15C7.95924 15 7.80027 14.9342 7.68306 14.817C7.56585 14.6998 7.5 14.5408 7.5 14.375V13.125C7.5 12.9593 7.56585 12.8003 7.68306 12.6831C7.80027 12.5659 7.95924 12.5 8.125 12.5C8.29076 12.5 8.44973 12.5659 8.56694 12.6831C8.68415 12.8003 8.75 12.9593 8.75 13.125Z"
      fill="currentColor"
    />
  </svg>
);


export const EditIcon = ({ size = 16, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path
      d="M15.2586 3.85762L11.768 0.366217C11.6519 0.250114 11.5141 0.158014 11.3624 0.0951779C11.2107 0.0323417 11.0482 0 10.884 0C10.7198 0 10.5572 0.0323417 10.4056 0.0951779C10.2539 0.158014 10.1161 0.250114 10 0.366217L0.366412 10.0006C0.249834 10.1162 0.157407 10.2539 0.0945056 10.4056C0.0316038 10.5573 -0.000518312 10.72 6.32418e-06 10.8842V14.3756C6.32418e-06 14.7071 0.131702 15.0251 0.366123 15.2595C0.600543 15.4939 0.918486 15.6256 1.25001 15.6256H4.74141C4.90563 15.6261 5.0683 15.594 5.21999 15.5311C5.37168 15.4682 5.50935 15.3758 5.62501 15.2592L15.2586 5.62559C15.3747 5.50952 15.4668 5.3717 15.5296 5.22003C15.5925 5.06835 15.6248 4.90578 15.6248 4.74161C15.6248 4.57743 15.5925 4.41486 15.5296 4.26319C15.4668 4.11151 15.3747 3.9737 15.2586 3.85762ZM1.5086 10.6256L8.12501 4.00919L9.42891 5.31309L2.81251 11.9287L1.5086 10.6256ZM1.25001 12.1342L3.49141 14.3756H1.25001V12.1342ZM5.00001 14.117L3.6961 12.8131L10.3125 6.19669L11.6164 7.50059L5.00001 14.117ZM12.5 6.617L9.0086 3.12559L10.8836 1.25059L14.375 4.74122L12.5 6.617Z"
      fill="currentColor"
    />
  </svg>
);

export interface DialogDecorationIconProps extends IconProps {
  backgroundColor?: string;
}

export const DialogDecorationIcon = ({
  size = 272,
  className,
  color = "var(--w75)",
  backgroundColor = "var(--w50)",
}: DialogDecorationIconProps) => (
  <svg
    width={size}
    height="96"
    viewBox="0 0 272 96"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <rect width="272" height="96" fill={backgroundColor} />
    <path
      d="M-3.71522 163.978C-5.19236 164.562 -5.98357 165.862 -5.48244 166.881C-4.98131 167.9 -3.37761 168.253 -1.90048 167.669L-2.80785 165.824L-3.71522 163.978ZM160.46 -42.9155C159.596 -43.7498 157.842 -43.7557 156.544 -42.9289C155.246 -42.102 154.895 -40.7555 155.759 -39.9212L158.11 -41.4183L160.46 -42.9155ZM59.4108 125.404L56.877 124.848V124.848L59.4108 125.404ZM45.1134 55.5729L42.7402 54.7846L45.1134 55.5729ZM188.047 34.7431L190.462 35.4767L188.047 34.7431ZM-2.80785 165.824C-1.90048 167.669 -1.89978 167.669 -1.89889 167.668C-1.89835 167.668 -1.89727 167.668 -1.89618 167.667C-1.89399 167.666 -1.89106 167.665 -1.88737 167.664C-1.87999 167.661 -1.86963 167.657 -1.85631 167.651C-1.82967 167.641 -1.79124 167.626 -1.74132 167.606C-1.6415 167.566 -1.49576 167.507 -1.30676 167.43C-0.928783 167.277 -0.37763 167.051 0.325517 166.757C1.73158 166.17 3.74681 165.31 6.20158 164.214C11.1072 162.025 17.7879 158.882 24.8793 155.075C31.9623 151.272 39.5115 146.776 46.1242 141.872C52.7147 136.984 58.5282 131.58 61.9445 125.959L59.4108 125.404L56.877 124.848C53.965 129.639 48.8369 134.494 42.5748 139.138C36.3349 143.765 29.1205 148.072 22.231 151.771C15.3498 155.466 8.84911 158.524 4.06632 160.659C1.6769 161.725 -0.27876 162.559 -1.63255 163.125C-2.30933 163.408 -2.83534 163.623 -3.18955 163.767C-3.36664 163.839 -3.50075 163.893 -3.58925 163.928C-3.6335 163.946 -3.66634 163.959 -3.68744 163.967C-3.698 163.972 -3.70562 163.975 -3.71026 163.976C-3.71258 163.977 -3.71416 163.978 -3.71499 163.978C-3.7154 163.978 -3.71546 163.978 -3.71567 163.979C-3.71554 163.979 -3.71522 163.978 -2.80785 165.824ZM59.4108 125.404L61.9445 125.959C66.2209 118.923 65.9951 112.362 63.795 106.25C61.6154 100.195 57.4193 94.3855 53.5095 88.8404C49.5357 83.2044 45.857 77.8414 44.2743 72.4163C42.7158 67.0737 43.2417 61.8369 47.4866 56.3613L45.1134 55.5729L42.7402 54.7846C37.4756 61.5757 36.976 68.0057 38.7428 74.062C40.4855 80.0359 44.483 85.8039 48.403 91.3634C52.387 97.0138 56.3023 102.464 58.3187 108.066C60.3145 113.61 60.3691 119.102 56.877 124.848L59.4108 125.404ZM45.1134 55.5729L47.4866 56.3613C53.1219 49.092 62.3921 45.9429 74.5984 45.0946C86.8852 44.2407 101.283 45.7961 116.082 47.4C130.682 48.9821 145.693 50.614 158.633 49.6583C171.671 48.6953 183.456 45.0208 190.462 35.4767L188.047 34.7431L185.633 34.0095C180.25 41.3425 171.211 44.5359 159.171 45.4251C147.033 46.3216 132.713 44.7899 117.912 43.186C103.311 41.6037 88.2389 39.9507 75.1699 40.859C62.0203 41.7729 50.0488 45.3568 42.7402 54.7846L45.1134 55.5729ZM188.047 34.7431L190.462 35.4767C196.046 27.8684 196.629 19.0718 194.731 10.4372C192.824 1.7615 188.347 -7.06139 183.288 -14.9249C178.22 -22.802 172.518 -29.7927 168.089 -34.8094C165.873 -37.3197 163.972 -39.3405 162.622 -40.736C161.947 -41.4339 161.41 -41.9757 161.04 -42.3446C160.855 -42.529 160.712 -42.6702 160.614 -42.766C160.565 -42.814 160.527 -42.8506 160.502 -42.8756C160.489 -42.8881 160.479 -42.8977 160.472 -42.9043C160.468 -42.9077 160.466 -42.9103 160.464 -42.9121C160.463 -42.9131 160.462 -42.9139 160.462 -42.9144C160.461 -42.915 160.46 -42.9155 158.11 -41.4183C155.759 -39.9212 155.759 -39.9213 155.759 -39.9212C155.76 -39.9209 155.76 -39.9207 155.76 -39.9201C155.762 -39.919 155.763 -39.9172 155.766 -39.9147C155.771 -39.9096 155.78 -39.9016 155.791 -39.8906C155.813 -39.8688 155.847 -39.8355 155.893 -39.7908C155.984 -39.7015 156.121 -39.5671 156.299 -39.3897C156.655 -39.0348 157.177 -38.508 157.837 -37.8262C159.156 -36.4623 161.022 -34.4792 163.2 -32.0119C167.559 -27.0734 173.152 -20.2138 178.108 -12.5106C183.073 -4.79373 187.349 3.69374 189.151 11.8934C190.962 20.134 190.207 27.7777 185.633 34.0095L188.047 34.7431Z"
      fill="currentColor"
    />
    <path
      d="M-55 18.9979C-55 18.9979 -5.86543 39.0471 28.2151 36.9962C70.0504 34.4787 74.7626 -2.9821 116.774 -2.99999C173.958 -3.02436 152.744 71.8296 209.914 70.993C256.797 70.307 300 18.9979 300 18.9979"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
    />
  </svg>
);

export const DraftIcon = ({
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
      d="M14.9344 2.84531L13.6844 0.345313C13.6324 0.241475 13.5526 0.154166 13.4538 0.0931732C13.355 0.0321807 13.2411 -8.2969e-05 13.125 1.60235e-07H1.875C1.75889 -8.2969e-05 1.64505 0.0321807 1.54625 0.0931732C1.44744 0.154166 1.36759 0.241475 1.31562 0.345313L0.065625 2.84531C0.0225444 2.93226 8.78788e-05 3.02797 0 3.125V13.75C0 14.0815 0.131696 14.3995 0.366116 14.6339C0.600537 14.8683 0.918479 15 1.25 15H13.75C14.0815 15 14.3995 14.8683 14.6339 14.6339C14.8683 14.3995 15 14.0815 15 13.75V3.125C14.9999 3.02797 14.9775 2.93226 14.9344 2.84531ZM2.26094 1.25H12.7391L13.3641 2.5H1.63594L2.26094 1.25ZM13.75 13.75H1.25V3.75H13.75V13.75ZM10.4422 8.93281C10.5003 8.99086 10.5464 9.05979 10.5779 9.13566C10.6093 9.21154 10.6255 9.29287 10.6255 9.375C10.6255 9.45713 10.6093 9.53846 10.5779 9.61434C10.5464 9.69021 10.5003 9.75914 10.4422 9.81719L7.94219 12.3172C7.88414 12.3753 7.81521 12.4214 7.73934 12.4529C7.66346 12.4843 7.58213 12.5005 7.5 12.5005C7.41787 12.5005 7.33654 12.4843 7.26066 12.4529C7.18479 12.4214 7.11586 12.3753 7.05781 12.3172L4.55781 9.81719C4.44054 9.69991 4.37465 9.54085 4.37465 9.375C4.37465 9.20915 4.44054 9.05009 4.55781 8.93281C4.67509 8.81554 4.83415 8.74965 5 8.74965C5.16585 8.74965 5.32491 8.81554 5.44219 8.93281L6.875 10.3664V5.625C6.875 5.45924 6.94085 5.30027 7.05806 5.18306C7.17527 5.06585 7.33424 5 7.5 5C7.66576 5 7.82473 5.06585 7.94194 5.18306C8.05915 5.30027 8.125 5.45924 8.125 5.625V10.3664L9.55781 8.93281C9.61586 8.8747 9.68479 8.8286 9.76066 8.79715C9.83654 8.7657 9.91787 8.74951 10 8.74951C10.0821 8.74951 10.1635 8.7657 10.2393 8.79715C10.3152 8.8286 10.3841 8.8747 10.4422 8.93281Z"
    />
  </svg>
);

export const HomePinIcon = ({
  size = 40,
  className,
  color = "currentColor",
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 40 40"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M20 1C11.7 1 5 7.5 5 15.6c0 9.9 12.1 22 14.1 23.3a1.6 1.6 0 0 0 1.8 0C22.9 37.6 35 25.500 35 15.600 35 7.500 28.300 1 20 1"
    />
    <path
      fill="#fff"
      d="m20 9.500-7.500 6.200a.8.800 0 0 0-.3.600v7.200c0 .4.300.7.700.7h4.600v-5h5v5h4.600c.4 0 .7-.3.700-.7v-7.200a.8.800 0 0 0-.3-.6z"
    />
  </svg>
);

export const CardCornerShape = ({
  className,
  color = "currentColor",
}: Omit<IconProps, "size">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 146 150"
    preserveAspectRatio="none"
    className={className}
    color={color}
  >
    <path fill="currentColor" d="M0 150 10 66C13 34 34 10 68 8l78 14v128z" />
  </svg>
);

export const BookmarkIcon = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M15.625 17.5 10 13.75 4.375 17.5V4.375A.625.625 0 0 1 5 3.75h10a.625.625 0 0 1 .625.625z"
    />
  </svg>
);
/** Decorative FAQ shape that bleeds off the left edge; tip is rounded, edges are straight. */
export const FaqLeftShape = ({
  className,
  color = "currentColor",
}: Omit<IconProps, "size">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={152}
    height={458}
    fill="none"
    viewBox="-40 -25 115 347"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M-40 -25 64.5 196.9Q73 215 56.8 226.7L-40 297z"
    />
  </svg>
);

/** Decorative FAQ shape that bleeds off the right edge; only the top-left corner is rounded. */
export const FaqRightShape = ({
  className,
  color = "currentColor",
}: Omit<IconProps, "size">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={137}
    height={340}
    fill="none"
    viewBox="-64 38 104 259"
    className={className}
    color={color}
  >
    <path
      fill="currentColor"
      d="M-46.2 67.1 40 38.6V296.8L-55.8 89Q-63.3 72.7-46.200 67.100z"
    />
  </svg>
);

export const BedIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M16.875 5.625H2.5V3.75C2.5 3.58424 2.43415 3.42527 2.31694 3.30806C2.19973 3.19085 2.04076 3.125 1.875 3.125C1.70924 3.125 1.55027 3.19085 1.43306 3.30806C1.31585 3.42527 1.25 3.58424 1.25 3.75V16.25C1.25 16.4158 1.31585 16.5747 1.43306 16.6919C1.55027 16.8092 1.70924 16.875 1.875 16.875C2.04076 16.875 2.19973 16.8092 2.31694 16.6919C2.43415 16.5747 2.5 16.4158 2.5 16.25V13.75H18.75V16.25C18.75 16.4158 18.8158 16.5747 18.9331 16.6919C19.0503 16.8092 19.2092 16.875 19.375 16.875C19.5408 16.875 19.6997 16.8092 19.8169 16.6919C19.9342 16.5747 20 16.4158 20 16.25V8.75C20 7.9212 19.6708 7.12634 19.0847 6.54029C18.4987 5.95424 17.7038 5.625 16.875 5.625ZM2.5 6.875H8.125V12.5H2.5V6.875ZM9.375 12.5V6.875H16.875C17.3723 6.875 17.8492 7.07254 18.2008 7.42417C18.5525 7.77581 18.75 8.25272 18.75 8.75V12.5H9.375Z"
      fill="currentColor"
    />
  </svg>
);

export const PriceIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M16.875 10.625H15.625V9.375H16.875C17.0408 9.375 17.1997 9.30915 17.3169 9.19194C17.4342 9.07473 17.5 8.91576 17.5 8.75C17.5 8.58423 17.4342 8.42526 17.3169 8.30805C17.1997 8.19084 17.0408 8.125 16.875 8.125H15.625V3.59375C15.625 3.42799 15.5592 3.26901 15.4419 3.1518C15.3247 3.03459 15.1658 2.96875 15 2.96875C14.8342 2.96875 14.6753 3.03459 14.5581 3.1518C14.4408 3.26901 14.375 3.42799 14.375 3.59375V8.125H9.32969L5.49297 3.20937C5.41293 3.10667 5.30282 3.03154 5.17801 2.99445C5.0532 2.95737 4.91992 2.96019 4.79679 3.00252C4.67366 3.04486 4.56683 3.12459 4.49121 3.23058C4.41559 3.33658 4.37496 3.46354 4.375 3.59375V8.125H3.125C2.95924 8.125 2.80027 8.19084 2.68306 8.30805C2.56585 8.42526 2.5 8.58423 2.5 8.75C2.5 8.91576 2.56585 9.07473 2.68306 9.19194C2.80027 9.30915 2.95924 9.375 3.125 9.375H4.375V10.625H3.125C2.95924 10.625 2.80027 10.6908 2.68306 10.8081C2.56585 10.9253 2.5 11.0842 2.5 11.25C2.5 11.4158 2.56585 11.5747 2.68306 11.6919C2.80027 11.8091 2.95924 11.875 3.125 11.875H4.375V16.4062C4.375 16.572 4.44085 16.731 4.55806 16.8482C4.67527 16.9654 4.83424 17.0312 5 17.0312C5.16576 17.0312 5.32473 16.9654 5.44194 16.8482C5.55915 16.731 5.625 16.572 5.625 16.4062V11.875H10.6703L14.507 16.7906C14.5655 16.8656 14.6403 16.9262 14.7257 16.9679C14.8111 17.0096 14.9049 17.0313 15 17.0312C15.0692 17.0314 15.1379 17.0198 15.2031 16.9969C15.3262 16.9546 15.433 16.8749 15.5086 16.7691C15.5842 16.6632 15.6249 16.5364 15.625 16.4062V11.875H16.875C17.0408 11.875 17.1997 11.8091 17.3169 11.6919C17.4342 11.5747 17.5 11.4158 17.5 11.25C17.5 11.0842 17.4342 10.9253 17.3169 10.8081C17.1997 10.6908 17.0408 10.625 16.875 10.625ZM14.375 9.375V10.625H11.2805L10.3047 9.375H14.375ZM5.625 5.41015L7.74375 8.125H5.625V5.41015ZM5.625 10.625V9.375H8.71953L9.69531 10.625H5.625ZM14.375 14.5898L12.2563 11.875H14.375V14.5898Z"
      fill="currentColor"
    />
  </svg>
);

export const NextIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M17.3172 10.4422L11.6922 16.0672C11.5749 16.1845 11.4159 16.2504 11.25 16.2504C11.0841 16.2504 10.9251 16.1845 10.8078 16.0672C10.6905 15.9499 10.6247 15.7909 10.6247 15.625C10.6247 15.4592 10.6905 15.3001 10.8078 15.1828L15.3664 10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.442C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83425 2.56585 9.67528 2.68306 9.55807C2.80027 9.44086 2.95924 9.37501 3.125 9.37501H15.3664L10.8078 4.8172C10.6905 4.69992 10.6247 4.54086 10.6247 4.37501C10.6247 4.20916 10.6905 4.0501 10.8078 3.93282C10.9251 3.81555 11.0841 3.74966 11.25 3.74966C11.4159 3.74966 11.5749 3.81555 11.6922 3.93282L17.3172 9.55782C17.3753 9.61587 17.4214 9.6848 17.4529 9.76067C17.4843 9.83655 17.5005 9.91788 17.5005 10C17.5005 10.0821 17.4843 10.1635 17.4529 10.2393C17.4214 10.3152 17.3753 10.3842 17.3172 10.4422Z"
      fill="currentColor"
    />
  </svg>
);

export const BackIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M2.68281 10.4422L8.30781 16.0672C8.42509 16.1845 8.58415 16.2504 8.75 16.2504C8.91585 16.2504 9.07491 16.1845 9.19219 16.0672C9.30946 15.9499 9.37535 15.7909 9.37535 15.625C9.37535 15.4592 9.30946 15.3001 9.19219 15.1828L4.63359 10.625H16.875C17.0408 10.625 17.1997 10.5592 17.3169 10.442C17.4342 10.3247 17.5 10.1658 17.5 10C17.5 9.83425 17.4342 9.67528 17.3169 9.55807C17.1997 9.44086 17.0408 9.37501 16.875 9.37501H4.63359L9.19219 4.8172C9.30946 4.69992 9.37535 4.54086 9.37535 4.37501C9.37535 4.20916 9.30946 4.0501 9.19219 3.93282C9.07491 3.81555 8.91585 3.74966 8.75 3.74966C8.58415 3.74966 8.42509 3.81555 8.30781 3.93282L2.68281 9.55782C2.6247 9.61587 2.5786 9.6848 2.54715 9.76067C2.5157 9.83655 2.49951 9.91788 2.49951 10C2.49951 10.0821 2.5157 10.1635 2.54715 10.2393C2.5786 10.3152 2.6247 10.3842 2.68281 10.4422Z"
      fill="currentColor"
    />
  </svg>
);

export const CloseIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M16.3175 15.4332C16.3756 15.4912 16.4217 15.5602 16.4531 15.636C16.4845 15.7119 16.5007 15.7932 16.5007 15.8753C16.5007 15.9575 16.4845 16.0388 16.4531 16.1147C16.4217 16.1905 16.3756 16.2595 16.3175 16.3175C16.2595 16.3756 16.1905 16.4217 16.1147 16.4531C16.0388 16.4845 15.9575 16.5007 15.8753 16.5007C15.7932 16.5007 15.7119 16.4845 15.636 16.4531C15.5602 16.4217 15.4912 16.3756 15.4332 16.3175L10.2503 11.1339L5.06753 16.3175C4.95026 16.4348 4.7912 16.5007 4.62535 16.5007C4.4595 16.5007 4.30044 16.4348 4.18316 16.3175C4.06588 16.2003 4 16.0412 4 15.8753C4 15.7095 4.06588 15.5504 4.18316 15.4332L9.36675 10.2503L4.18316 5.06753C4.06588 4.95026 4 4.7912 4 4.62535C4 4.4595 4.06588 4.30044 4.18316 4.18316C4.30044 4.06588 4.4595 4 4.62535 4C4.7912 4 4.95026 4.06588 5.06753 4.18316L10.2503 9.36675L15.4332 4.18316C15.5504 4.06588 15.7095 4 15.8753 4C16.0412 4 16.2003 4.06588 16.3175 4.18316C16.4348 4.30044 16.5007 4.4595 16.5007 4.62535C16.5007 4.7912 16.4348 4.95026 16.3175 5.06753L11.1339 10.2503L16.3175 15.4332Z"
      fill="currentColor"
    />
  </svg>
);
export const PurpleHouseIllus = ({
  size = 20,
  className,
  color,
}: IconProps) => (
  <svg
    width="141"
    height="79"
    viewBox="0 0 141 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
    <path
      d="M0.0519823 97.8643C-0.170855 95.1998 0.325435 92.5242 1.48908 90.1169C2.65273 87.7095 4.44109 85.6585 6.66758 84.1779C8.89406 82.6973 11.4771 81.8413 14.1472 81.6992C16.8172 81.5571 19.4765 82.1342 21.8475 83.3702C22.995 80.3023 24.1726 77.18 26.2018 74.6133C28.231 72.0466 31.2989 70.0778 34.5722 70.1986V97.8643H0.0519823Z"
      fill="#2F2A4E"
    />
    <path
      d="M52.7734 31.2039H124.338L137.709 12.2166L151.726 31.7414L168.195 31.4757L150.446 7.56641L70.6495 7.89856L52.7734 31.2039Z"
      fill="#625D81"
    />
    <path
      d="M88.5635 31.4739V98.0322H160.026V31.4739H151.836L137.711 12.2148L124.298 31.184L88.5635 31.4739Z"
      fill="#9D9AB0"
    />
    <path
      d="M115.376 69.1797H98.6592V98.0351H115.376V69.1797Z"
      fill="#625D81"
    />
    <path
      d="M151.725 68.3652H125.394V84.6772H151.725V68.3652Z"
      fill="#625D81"
    />
    <path
      d="M133.301 68.3633H132.697V84.8262H133.301V68.3633Z"
      fill="#2F2A4E"
    />
    <path d="M143.947 76.7871H132.998V77.391H143.947V76.7871Z" fill="#2F2A4E" />
    <path
      d="M151.725 35.7227H125.394V52.0346H151.725V35.7227Z"
      fill="#625D81"
    />
    <path
      d="M133.301 35.7227H132.697V52.1856H133.301V35.7227Z"
      fill="#2F2A4E"
    />
    <path
      d="M143.947 44.1465H132.998V44.7504H143.947V44.1465Z"
      fill="#2F2A4E"
    />
    <path d="M113.63 35.8652H97.0225V51.5914H113.63V35.8652Z" fill="#625D81" />
    <path
      d="M88.5679 31.4766H59.5615V98.0288H88.5679V31.4766Z"
      fill="#625D81"
    />
    <path d="M105.63 35.8652H105.026V51.5914H105.63V35.8652Z" fill="#2F2A4E" />
    <path d="M113.63 43.8125H97.0225V44.4164H113.63V43.8125Z" fill="#2F2A4E" />
    <path
      d="M137.674 28.4421C139.619 28.4421 141.195 26.8658 141.195 24.9213C141.195 22.9767 139.619 21.4004 137.674 21.4004C135.73 21.4004 134.153 22.9767 134.153 24.9213C134.153 26.8658 135.73 28.4421 137.674 28.4421Z"
      fill="#625D81"
    />
    <path
      d="M112.559 20.6067L116.998 15.1231V1.93945H107.697V20.7094L112.559 20.6067Z"
      fill="#9D9AB0"
    />
    <path
      d="M112.556 20.6067V1.93945H116.994V15.1231L112.556 20.6067Z"
      fill="#2F2A4E"
    />
    <path d="M117.624 0H106.656V1.93859H117.624V0Z" fill="#2F2A4E" />
    <path d="M88.5642 60.5918H34.5977V98.035H88.5642V60.5918Z" fill="#9D9AB0" />
    <path d="M68.3871 60.5918H34.5977V98.035H68.3871V60.5918Z" fill="#625D81" />
    <path
      d="M63.3544 72.6621H41.2568V97.9665H63.3544V72.6621Z"
      fill="#9D9AB0"
    />
    <path
      d="M85.5919 72.5586H71.3574V76.1821H85.5919V72.5586Z"
      fill="#2F2A4E"
    />
    <path
      d="M52.7734 31.2037V33.1302H124.296V31.1855L52.7734 31.2037Z"
      fill="#2F2A4E"
    />
    <path
      d="M124.297 33.1287L137.674 14.3527L137.71 12.2148L124.339 31.2022L124.297 33.1287Z"
      fill="#2F2A4E"
    />
    <path
      d="M109.675 64.7578H103.763V67.0044H109.675V64.7578Z"
      fill="#625D81"
    />
  </svg>
);

export const FBIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10.625 16.8461V11.875H12.5C12.6658 11.875 12.8247 11.8092 12.9419 11.6919C13.0592 11.5747 13.125 11.4158 13.125 11.25C13.125 11.0842 13.0592 10.9253 12.9419 10.8081C12.8247 10.6908 12.6658 10.625 12.5 10.625H10.625V8.75C10.625 8.41848 10.7567 8.10054 10.9911 7.86612C11.2255 7.6317 11.5435 7.5 11.875 7.5H13.125C13.2908 7.5 13.4497 7.43415 13.5669 7.31694C13.6842 7.19973 13.75 7.04076 13.75 6.875C13.75 6.70924 13.6842 6.55027 13.5669 6.43306C13.4497 6.31585 13.2908 6.25 13.125 6.25H11.875C11.212 6.25 10.5761 6.51339 10.1072 6.98223C9.6384 7.45107 9.375 8.08696 9.375 8.75V10.625H7.5C7.33424 10.625 7.17527 10.6908 7.05806 10.8081C6.94085 10.9253 6.875 11.0842 6.875 11.25C6.875 11.4158 6.94085 11.5747 7.05806 11.6919C7.17527 11.8092 7.33424 11.875 7.5 11.875H9.375V16.8461C7.61312 16.6853 5.98107 15.8514 4.81831 14.5179C3.65556 13.1845 3.05162 11.4541 3.13212 9.68674C3.21263 7.91936 3.97137 6.25106 5.25053 5.02883C6.52969 3.80661 8.2308 3.12456 10 3.12456C11.7692 3.12456 13.4703 3.80661 14.7495 5.02883C16.0286 6.25106 16.7874 7.91936 16.8679 9.68674C16.9484 11.4541 16.3444 13.1845 15.1817 14.5179C14.0189 15.8514 12.3869 16.6853 10.625 16.8461Z"
      fill="currentColor"
    />
  </svg>
);

export const InstaIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M10 6.25C9.25832 6.25 8.5333 6.46993 7.91661 6.88199C7.29993 7.29404 6.81928 7.87971 6.53545 8.56494C6.25162 9.25016 6.17736 10.0042 6.32206 10.7316C6.46675 11.459 6.8239 12.1272 7.34835 12.6517C7.8728 13.1761 8.54098 13.5333 9.26841 13.6779C9.99584 13.8226 10.7498 13.7484 11.4351 13.4645C12.1203 13.1807 12.706 12.7001 13.118 12.0834C13.5301 11.4667 13.75 10.7417 13.75 10C13.749 9.00576 13.3535 8.05253 12.6505 7.34949C11.9475 6.64645 10.9942 6.25103 10 6.25ZM10 12.5C9.50555 12.5 9.0222 12.3534 8.61107 12.0787C8.19995 11.804 7.87952 11.4135 7.6903 10.9567C7.50108 10.4999 7.45157 9.99723 7.54804 9.51227C7.6445 9.02732 7.8826 8.58186 8.23223 8.23223C8.58186 7.8826 9.02732 7.6445 9.51227 7.54804C9.99723 7.45157 10.4999 7.50108 10.9567 7.6903C11.4135 7.87952 11.804 8.19995 12.0787 8.61107C12.3534 9.0222 12.5 9.50555 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5ZM13.75 1.875H6.25C5.09006 1.87624 3.97798 2.33758 3.15778 3.15778C2.33758 3.97798 1.87624 5.09006 1.875 6.25V13.75C1.87624 14.9099 2.33758 16.022 3.15778 16.8422C3.97798 17.6624 5.09006 18.1238 6.25 18.125H13.75C14.9099 18.1238 16.022 17.6624 16.8422 16.8422C17.6624 16.022 18.1238 14.9099 18.125 13.75V6.25C18.1238 5.09006 17.6624 3.97798 16.8422 3.15778C16.022 2.33758 14.9099 1.87624 13.75 1.875ZM16.875 13.75C16.875 14.5788 16.5458 15.3737 15.9597 15.9597C15.3737 16.5458 14.5788 16.875 13.75 16.875H6.25C5.4212 16.875 4.62634 16.5458 4.04029 15.9597C3.45424 15.3737 3.125 14.5788 3.125 13.75V6.25C3.125 5.4212 3.45424 4.62634 4.04029 4.04029C4.62634 3.45424 5.4212 3.125 6.25 3.125H13.75C14.5788 3.125 15.3737 3.45424 15.9597 4.04029C16.5458 4.62634 16.875 5.4212 16.875 6.25V13.75ZM15 5.9375C15 6.12292 14.945 6.30418 14.842 6.45835C14.739 6.61252 14.5926 6.73268 14.4213 6.80364C14.25 6.87459 14.0615 6.89316 13.8796 6.85699C13.6977 6.82081 13.5307 6.73152 13.3996 6.60041C13.2685 6.4693 13.1792 6.30225 13.143 6.1204C13.1068 5.93854 13.1254 5.75004 13.1964 5.57873C13.2673 5.40743 13.3875 5.26101 13.5417 5.158C13.6958 5.05498 13.8771 5 14.0625 5C14.3111 5 14.5496 5.09877 14.7254 5.27459C14.9012 5.4504 15 5.68886 15 5.9375Z"
      fill="currentColor"
    />
  </svg>
);

export const TTIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M17.5 5.625C16.5058 5.62397 15.5525 5.22855 14.8495 4.52551C14.1465 3.82247 13.751 2.86924 13.75 1.875C13.75 1.70924 13.6842 1.55027 13.5669 1.43306C13.4497 1.31585 13.2908 1.25 13.125 1.25H10C9.83424 1.25 9.67527 1.31585 9.55806 1.43306C9.44085 1.55027 9.375 1.70924 9.375 1.875V12.1875C9.37487 12.4671 9.29972 12.7415 9.15739 12.9822C9.01506 13.2229 8.81076 13.4209 8.5658 13.5557C8.32084 13.6905 8.0442 13.7571 7.76474 13.7486C7.48527 13.74 7.21322 13.6566 6.97695 13.5071C6.74069 13.3576 6.54888 13.1474 6.42152 12.8985C6.29416 12.6496 6.23592 12.3711 6.25288 12.092C6.26983 11.8129 6.36137 11.5435 6.51793 11.3119C6.67449 11.0802 6.89034 10.8948 7.14297 10.775C7.24983 10.7243 7.34011 10.6443 7.40331 10.5443C7.46651 10.4443 7.50004 10.3284 7.5 10.2102V6.875C7.50004 6.78364 7.48005 6.69338 7.44144 6.61058C7.40283 6.52778 7.34653 6.45446 7.27652 6.39576C7.2065 6.33707 7.12447 6.29444 7.03621 6.27088C6.94794 6.24731 6.85558 6.24339 6.76562 6.25938C3.97734 6.75625 1.875 9.30469 1.875 12.1875C1.875 13.7622 2.50056 15.2724 3.61405 16.3859C4.72755 17.4994 6.23778 18.125 7.8125 18.125C9.38722 18.125 10.8974 17.4994 12.0109 16.3859C13.1244 15.2724 13.75 13.7622 13.75 12.1875V9.08516C14.9075 9.6891 16.1944 10.003 17.5 10C17.6658 10 17.8247 9.93415 17.9419 9.81694C18.0592 9.69973 18.125 9.54076 18.125 9.375V6.25C18.125 6.08424 18.0592 5.92527 17.9419 5.80806C17.8247 5.69085 17.6658 5.625 17.5 5.625ZM16.875 8.72188C15.6536 8.61365 14.4841 8.17774 13.4898 7.46016C13.3964 7.39297 13.2862 7.35289 13.1714 7.34434C13.0566 7.33579 12.9417 7.3591 12.8394 7.4117C12.737 7.4643 12.6511 7.54415 12.5912 7.64244C12.5314 7.74074 12.4998 7.85365 12.5 7.96875V12.1875C12.5 13.4307 12.0061 14.623 11.1271 15.5021C10.248 16.3811 9.0557 16.875 7.8125 16.875C6.5693 16.875 5.37701 16.3811 4.49794 15.5021C3.61886 14.623 3.125 13.4307 3.125 12.1875C3.125 10.1641 4.425 8.34922 6.25 7.6875V9.84922C5.84598 10.1192 5.51878 10.4892 5.30031 10.9232C5.08184 11.3572 4.97954 11.8405 5.00339 12.3258C5.02724 12.8111 5.17641 13.282 5.43638 13.6925C5.69635 14.103 6.05825 14.4392 6.48679 14.6682C6.91533 14.8972 7.3959 15.0114 7.88166 14.9994C8.36742 14.9875 8.8418 14.8499 9.25857 14.6C9.67533 14.3502 10.0203 13.9966 10.2597 13.5738C10.4992 13.151 10.625 12.6734 10.625 12.1875V2.5H12.5391C12.6796 3.60085 13.1816 4.62389 13.9664 5.40862C14.7511 6.19335 15.7742 6.69538 16.875 6.83594V8.72188Z"
      fill="currentColor"
    />
  </svg>
);

export const BathIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M18.75 7.50003H16.25C16.25 7.33427 16.1842 7.1753 16.0669 7.05809C15.9497 6.94088 15.7908 6.87503 15.625 6.87503H10.625C10.4592 6.87503 10.3003 6.94088 10.1831 7.05809C10.0658 7.1753 10 7.33427 10 7.50003H5V4.06253C5 3.81389 5.09877 3.57543 5.27459 3.39962C5.4504 3.2238 5.68886 3.12503 5.9375 3.12503C6.15723 3.12413 6.37077 3.19772 6.5433 3.33378C6.71583 3.46985 6.83716 3.66036 6.8875 3.87425C6.92183 4.03531 7.01835 4.17632 7.15607 4.26662C7.2938 4.35692 7.46159 4.38921 7.62299 4.35648C7.78439 4.32375 7.92635 4.22864 8.01801 4.09182C8.10967 3.955 8.14363 3.78753 8.1125 3.62581C8.00638 3.12847 7.73218 2.68288 7.33605 2.364C6.93991 2.04513 6.44602 1.87245 5.9375 1.87503C5.35734 1.87503 4.80094 2.1055 4.3907 2.51573C3.98047 2.92597 3.75 3.48237 3.75 4.06253V7.50003H1.25C1.08424 7.50003 0.925268 7.56588 0.808058 7.68309C0.690848 7.8003 0.625 7.95927 0.625 8.12503V11.25C0.626241 12.41 1.08758 13.522 1.90778 14.3423C2.72798 15.1625 3.84006 15.6238 5 15.625V16.875C5 17.0408 5.06585 17.1998 5.18306 17.317C5.30027 17.4342 5.45924 17.5 5.625 17.5C5.79076 17.5 5.94973 17.4342 6.06694 17.317C6.18415 17.1998 6.25 17.0408 6.25 16.875V15.625H13.75V16.875C13.75 17.0408 13.8158 17.1998 13.9331 17.317C14.0503 17.4342 14.2092 17.5 14.375 17.5C14.5408 17.5 14.6997 17.4342 14.8169 17.317C14.9342 17.1998 15 17.0408 15 16.875V15.625C16.1599 15.6238 17.272 15.1625 18.0922 14.3423C18.9124 13.522 19.3738 12.41 19.375 11.25V8.12503C19.375 7.95927 19.3092 7.8003 19.1919 7.68309C19.0747 7.56588 18.9158 7.50003 18.75 7.50003ZM15 8.12503V10.625H11.25V8.12503H15ZM18.125 11.25C18.125 11.6604 18.0442 12.0668 17.8871 12.4459C17.7301 12.8251 17.4999 13.1696 17.2097 13.4597C16.9195 13.7499 16.575 13.9801 16.1959 14.1372C15.8167 14.2942 15.4104 14.375 15 14.375H5C4.1712 14.375 3.37634 14.0458 2.79029 13.4597C2.20424 12.8737 1.875 12.0788 1.875 11.25V8.75003H10V11.25C10 11.4158 10.0658 11.5748 10.1831 11.692C10.3003 11.8092 10.4592 11.875 10.625 11.875H15.625C15.7908 11.875 15.9497 11.8092 16.0669 11.692C16.1842 11.5748 16.25 11.4158 16.25 11.25V8.75003H18.125V11.25Z"
      fill="currentColor"
    />
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
    <path
      d="M18.1299 14.5906C18.5617 13.6949 18.7736 12.7091 18.748 11.715C18.7223 10.721 18.4598 9.74737 17.9823 8.87513C17.5049 8.00288 16.8261 7.25716 16.0026 6.6999C15.179 6.14265 14.2343 5.78995 13.2471 5.67109C12.9186 4.90732 12.441 4.21676 11.8423 3.63986C11.2436 3.06296 10.5358 2.61132 9.76032 2.31138C8.98488 2.01144 8.15739 1.86923 7.32631 1.89307C6.49523 1.91692 5.67725 2.10635 4.92029 2.45027C4.16333 2.79419 3.4826 3.28568 2.91796 3.89596C2.35332 4.50625 1.91611 5.22306 1.63195 6.00441C1.34779 6.78577 1.22239 7.61597 1.26308 8.4464C1.30378 9.27683 1.50975 10.0908 1.86894 10.8406L1.30097 12.7711C1.23747 12.9866 1.23322 13.2152 1.28868 13.433C1.34414 13.6507 1.45725 13.8494 1.61612 14.0083C1.77498 14.1672 1.97373 14.2803 2.19145 14.3357C2.40917 14.3912 2.63781 14.3869 2.85332 14.3234L4.78378 13.7555C5.40365 14.0533 6.06823 14.2473 6.75097 14.3297C7.08267 15.1069 7.56853 15.8087 8.17918 16.3928C8.78982 16.9769 9.51257 17.4311 10.3037 17.728C11.0949 18.0248 11.938 18.1582 12.7822 18.1199C13.6263 18.0817 14.454 17.8726 15.215 17.5055L17.1455 18.0734C17.3609 18.1369 17.5895 18.1411 17.8071 18.0857C18.0247 18.0302 18.2234 17.9172 18.3822 17.7584C18.5411 17.5997 18.6542 17.4011 18.7097 17.1835C18.7653 16.9659 18.7612 16.7373 18.6978 16.5219L18.1299 14.5906ZM4.84316 12.4609C4.78343 12.4611 4.72401 12.4695 4.6666 12.4859L2.49941 13.125L3.13769 10.9563C3.18309 10.7996 3.16542 10.6313 3.08847 10.4875C2.52309 9.43014 2.3565 8.20482 2.61907 7.03489C2.88164 5.86497 3.55589 4.82836 4.5189 4.11402C5.48191 3.39969 6.66956 3.0552 7.86534 3.14336C9.06112 3.23152 10.1854 3.74645 11.0332 4.59429C11.8811 5.44213 12.396 6.56642 12.4842 7.7622C12.5723 8.95798 12.2278 10.1456 11.5135 11.1086C10.7992 12.0716 9.76257 12.7459 8.59264 13.0085C7.42272 13.271 6.19739 13.1044 5.14003 12.5391C5.04911 12.4887 4.94707 12.4619 4.84316 12.4609ZM16.858 14.7055L17.4994 16.875L15.3307 16.2367C15.174 16.1913 15.0057 16.209 14.8619 16.2859C13.711 16.9005 12.3656 17.0412 11.1124 16.6781C9.85922 16.315 8.79742 15.4768 8.15332 14.3422C9.00908 14.2529 9.83715 13.9877 10.5856 13.5632C11.334 13.1388 11.9867 12.5642 12.5026 11.8756C13.0185 11.1871 13.3865 10.3993 13.5836 9.56175C13.7807 8.72421 13.8026 7.85498 13.6478 7.0086C14.3935 7.18435 15.0887 7.52908 15.68 8.01618C16.2712 8.50327 16.7426 9.11971 17.0578 9.81791C17.373 10.5161 17.5236 11.2774 17.4979 12.043C17.4722 12.8086 17.2709 13.5581 16.9096 14.2336C16.8318 14.3783 16.8141 14.5478 16.8603 14.7055H16.858Z"
      fill="currentColor"
    />
  </svg>
);

export const UserIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M18.1754 16.256C16.9856 14.199 15.152 12.724 13.0121 12.0248C14.0706 11.3947 14.893 10.4345 15.3529 9.29181C15.8129 8.14909 15.885 6.88697 15.5583 5.69928C15.2315 4.51159 14.5239 3.464 13.5441 2.71738C12.5644 1.97076 11.3666 1.56641 10.1348 1.56641C8.90297 1.56641 7.70521 1.97076 6.72544 2.71738C5.74567 3.464 5.03807 4.51159 4.71131 5.69928C4.38455 6.88697 4.45669 8.14909 4.91666 9.29181C5.37663 10.4345 6.19899 11.3947 7.25745 12.0248C5.11761 12.7232 3.28401 14.1982 2.09417 16.256C2.05054 16.3272 2.02159 16.4063 2.00905 16.4889C1.99651 16.5714 2.00062 16.6556 2.02114 16.7365C2.04166 16.8174 2.07818 16.8933 2.12854 16.9599C2.1789 17.0264 2.24207 17.0822 2.31434 17.124C2.38662 17.1657 2.46652 17.1926 2.54933 17.2029C2.63215 17.2133 2.7162 17.207 2.79653 17.1843C2.87686 17.1617 2.95184 17.1232 3.01705 17.0711C3.08226 17.019 3.13637 16.9544 3.1762 16.881C4.64808 14.3373 7.24964 12.8185 10.1348 12.8185C13.02 12.8185 15.6215 14.3373 17.0934 16.881C17.1332 16.9544 17.1873 17.019 17.2525 17.0711C17.3177 17.1232 17.3927 17.1617 17.4731 17.1843C17.5534 17.207 17.6374 17.2133 17.7203 17.2029C17.8031 17.1926 17.883 17.1657 17.9552 17.124C18.0275 17.0822 18.0907 17.0264 18.1411 16.9599C18.1914 16.8933 18.2279 16.8174 18.2484 16.7365C18.269 16.6556 18.2731 16.5714 18.2605 16.4889C18.248 16.4063 18.2191 16.3272 18.1754 16.256ZM5.75979 7.19353C5.75979 6.32824 6.01638 5.48238 6.49711 4.76291C6.97785 4.04345 7.66113 3.48269 8.46055 3.15156C9.25998 2.82043 10.1396 2.73379 10.9883 2.9026C11.837 3.07141 12.6165 3.48808 13.2284 4.09994C13.8402 4.71179 14.2569 5.49134 14.4257 6.34001C14.5945 7.18868 14.5079 8.06835 14.1768 8.86777C13.8456 9.6672 13.2849 10.3505 12.5654 10.8312C11.8459 11.3119 11.0001 11.5685 10.1348 11.5685C8.97485 11.5673 7.86278 11.106 7.04257 10.2858C6.22237 9.46555 5.76103 8.35347 5.75979 7.19353Z"
      fill="currentColor"
    />
  </svg>
);

export const PropertiesIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M18.75 16.2501H17.5V7.50008C17.5 7.16856 17.3683 6.85062 17.1339 6.6162C16.8995 6.38178 16.5815 6.25008 16.25 6.25008H11.25V2.50008C11.2501 2.27372 11.1888 2.05158 11.0726 1.85735C10.9563 1.66312 10.7895 1.5041 10.59 1.39726C10.3904 1.29042 10.1656 1.23978 9.93951 1.25073C9.71342 1.26169 9.49454 1.33383 9.30625 1.45946L3.05625 5.62508C2.8848 5.73947 2.74429 5.89448 2.64724 6.07632C2.55019 6.25815 2.49961 6.46116 2.5 6.66727V16.2501H1.25C1.08424 16.2501 0.925268 16.3159 0.808058 16.4331C0.690848 16.5504 0.625 16.7093 0.625 16.8751C0.625 17.0408 0.690848 17.1998 0.808058 17.317C0.925268 17.4342 1.08424 17.5001 1.25 17.5001H18.75C18.9158 17.5001 19.0747 17.4342 19.1919 17.317C19.3092 17.1998 19.375 17.0408 19.375 16.8751C19.375 16.7093 19.3092 16.5504 19.1919 16.4331C19.0747 16.3159 18.9158 16.2501 18.75 16.2501ZM16.25 7.50008V16.2501H11.25V7.50008H16.25ZM3.75 6.66727L10 2.50008V16.2501H3.75V6.66727ZM8.75 8.75008V10.0001C8.75 10.1658 8.68415 10.3248 8.56694 10.442C8.44973 10.5592 8.29076 10.6251 8.125 10.6251C7.95924 10.6251 7.80027 10.5592 7.68306 10.442C7.56585 10.3248 7.5 10.1658 7.5 10.0001V8.75008C7.5 8.58432 7.56585 8.42535 7.68306 8.30814C7.80027 8.19093 7.95924 8.12508 8.125 8.12508C8.29076 8.12508 8.44973 8.19093 8.56694 8.30814C8.68415 8.42535 8.75 8.58432 8.75 8.75008ZM6.25 8.75008V10.0001C6.25 10.1658 6.18415 10.3248 6.06694 10.442C5.94973 10.5592 5.79076 10.6251 5.625 10.6251C5.45924 10.6251 5.30027 10.5592 5.18306 10.442C5.06585 10.3248 5 10.1658 5 10.0001V8.75008C5 8.58432 5.06585 8.42535 5.18306 8.30814C5.30027 8.19093 5.45924 8.12508 5.625 8.12508C5.79076 8.12508 5.94973 8.19093 6.06694 8.30814C6.18415 8.42535 6.25 8.58432 6.25 8.75008ZM6.25 13.1251V14.3751C6.25 14.5408 6.18415 14.6998 6.06694 14.817C5.94973 14.9342 5.79076 15.0001 5.625 15.0001C5.45924 15.0001 5.30027 14.9342 5.18306 14.817C5.06585 14.6998 5 14.5408 5 14.3751V13.1251C5 12.9593 5.06585 12.8003 5.18306 12.6831C5.30027 12.5659 5.45924 12.5001 5.625 12.5001C5.79076 12.5001 5.94973 12.5659 6.06694 12.6831C6.18415 12.8003 6.25 12.9593 6.25 13.1251ZM8.75 13.1251V14.3751C8.75 14.5408 8.68415 14.6998 8.56694 14.817C8.44973 14.9342 8.29076 15.0001 8.125 15.0001C7.95924 15.0001 7.80027 14.9342 7.68306 14.817C7.56585 14.6998 7.5 14.5408 7.5 14.3751V13.1251C7.5 12.9593 7.56585 12.8003 7.68306 12.6831C7.80027 12.5659 7.95924 12.5001 8.125 12.5001C8.29076 12.5001 8.44973 12.5659 8.56694 12.6831C8.68415 12.8003 8.75 12.9593 8.75 13.1251Z"
      fill="currentColor"
    />
  </svg>
);

export const AgentIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M16.875 4.375H13.75V3.75C13.75 3.25272 13.5525 2.77581 13.2008 2.42417C12.8492 2.07254 12.3723 1.875 11.875 1.875H8.125C7.62772 1.875 7.15081 2.07254 6.79917 2.42417C6.44754 2.77581 6.25 3.25272 6.25 3.75V4.375H3.125C2.79348 4.375 2.47554 4.5067 2.24112 4.74112C2.0067 4.97554 1.875 5.29348 1.875 5.625V15.625C1.875 15.9565 2.0067 16.2745 2.24112 16.5089C2.47554 16.7433 2.79348 16.875 3.125 16.875H16.875C17.2065 16.875 17.5245 16.7433 17.7589 16.5089C17.9933 16.2745 18.125 15.9565 18.125 15.625V5.625C18.125 5.29348 17.9933 4.97554 17.7589 4.74112C17.5245 4.5067 17.2065 4.375 16.875 4.375ZM7.5 3.75C7.5 3.58424 7.56585 3.42527 7.68306 3.30806C7.80027 3.19085 7.95924 3.125 8.125 3.125H11.875C12.0408 3.125 12.1997 3.19085 12.3169 3.30806C12.4342 3.42527 12.5 3.58424 12.5 3.75V4.375H7.5V3.75ZM16.875 5.625V8.87578C14.7655 10.024 12.4018 10.6254 10 10.625C7.59828 10.6254 5.23471 10.0243 3.125 8.87656V5.625H16.875ZM16.875 15.625H3.125V10.2844C5.26557 11.3314 7.61708 11.8755 10 11.875C12.383 11.8751 14.7344 11.3307 16.875 10.2836V15.625ZM8.125 8.75C8.125 8.58424 8.19085 8.42527 8.30806 8.30806C8.42527 8.19085 8.58424 8.125 8.75 8.125H11.25C11.4158 8.125 11.5747 8.19085 11.6919 8.30806C11.8092 8.42527 11.875 8.58424 11.875 8.75C11.875 8.91576 11.8092 9.07473 11.6919 9.19194C11.5747 9.30915 11.4158 9.375 11.25 9.375H8.75C8.58424 9.375 8.42527 9.30915 8.30806 9.19194C8.19085 9.07473 8.125 8.91576 8.125 8.75Z"
      fill="currentColor"
    />
  </svg>
);

export const MinusIcon = ({ size = 20, className, color }: IconProps) => (
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
      d="M17.5 10C17.5 10.1658 17.4342 10.3247 17.3169 10.4419C17.1997 10.5592 17.0408 10.625 16.875 10.625H3.125C2.95924 10.625 2.80027 10.5592 2.68306 10.4419C2.56585 10.3247 2.5 10.1658 2.5 10C2.5 9.83424 2.56585 9.67527 2.68306 9.55806C2.80027 9.44085 2.95924 9.375 3.125 9.375H16.875C17.0408 9.375 17.1997 9.44085 17.3169 9.55806C17.4342 9.67527 17.5 9.83424 17.5 10Z"
      fill="currentColor"
    />
  </svg>
);

export const PasswordIcon = ({ size = 20, className, color }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    color={color}
  >
<path d="M16.4195 3.58049C15.4268 2.58636 14.128 1.95571 12.7329 1.7903C11.3377 1.6249 9.92749 1.93439 8.7298 2.66883C7.53212 3.40328 6.61682 4.51984 6.13161 5.83834C5.6464 7.15683 5.61958 8.60035 6.05548 9.93596L1.74141 14.25C1.62483 14.3657 1.53241 14.5033 1.46951 14.655C1.4066 14.8067 1.37448 14.9694 1.37501 15.1336V17.375C1.37501 17.7065 1.5067 18.0245 1.74112 18.2589C1.97554 18.4933 2.29349 18.625 2.62501 18.625H5.12501C5.29077 18.625 5.44974 18.5592 5.56695 18.442C5.68416 18.3248 5.75001 18.1658 5.75001 18V16.75H7.00001C7.16577 16.75 7.32474 16.6842 7.44195 16.567C7.55916 16.4498 7.62501 16.2908 7.62501 16.125V14.875H8.87501C8.95711 14.8751 9.03842 14.859 9.11429 14.8276C9.19016 14.7962 9.25911 14.7502 9.31719 14.6922L10.0641 13.9446C10.6892 14.1479 11.3426 14.251 12 14.25H12.0078C13.2433 14.2485 14.4507 13.8809 15.4773 13.1935C16.504 12.5062 17.3039 11.53 17.776 10.3882C18.2481 9.24647 18.3712 7.99042 18.1298 6.77873C17.8883 5.56705 17.2932 4.4541 16.4195 3.58049ZM17 8.16409C16.9149 10.8274 14.6758 12.9969 12.0086 13H12C11.3673 13.0011 10.7402 12.8815 10.1524 12.6477C10.0374 12.5978 9.91 12.5836 9.78684 12.607C9.66368 12.6304 9.5504 12.6903 9.46173 12.7789L8.61641 13.625H7.00001C6.83425 13.625 6.67528 13.6909 6.55807 13.8081C6.44086 13.9253 6.37501 14.0843 6.37501 14.25V15.5H5.12501C4.95925 15.5 4.80028 15.5659 4.68306 15.6831C4.56585 15.8003 4.50001 15.9593 4.50001 16.125V17.375H2.62501V15.1336L7.2211 10.5383C7.30972 10.4496 7.36962 10.3364 7.39303 10.2132C7.41643 10.09 7.40226 9.96268 7.35235 9.84768C7.11778 9.25783 6.99818 8.62855 7.00001 7.99377C7.00001 5.32659 9.17266 3.08752 11.8359 3.00237C12.5201 2.97954 13.2016 3.09742 13.8383 3.34871C14.475 3.6 15.0533 3.97934 15.5374 4.46325C16.0216 4.94715 16.4012 5.52531 16.6528 6.1619C16.9043 6.79849 17.0225 7.47996 17 8.16409ZM14.5 6.43752C14.5 6.62294 14.445 6.8042 14.342 6.95837C14.239 7.11254 14.0926 7.2327 13.9213 7.30366C13.75 7.37462 13.5615 7.39318 13.3796 7.35701C13.1978 7.32084 13.0307 7.23155 12.8996 7.10044C12.7685 6.96933 12.6792 6.80228 12.643 6.62042C12.6068 6.43856 12.6254 6.25006 12.6964 6.07876C12.7673 5.90745 12.8875 5.76103 13.0417 5.65802C13.1958 5.55501 13.3771 5.50002 13.5625 5.50002C13.8111 5.50002 14.0496 5.5988 14.2254 5.77461C14.4012 5.95043 14.5 6.18888 14.5 6.43752Z" fill="currentColor"/>
</svg>
);