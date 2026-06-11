export interface Register {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
}

export interface AuthResponse {
  user: UserResponse;
  accessToken: string;
  refreshToken: string;
}

export interface UserResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isEmailVerified: boolean;
  userType: "USER" | "ADMIN";
}

export interface LoginResponse {
  accessToken: string | null;
  refreshToken: string | null;
  userResponse: UserResponse;
}

export interface ForgotPasswordReset {
  otp: string;
  email: string;
  newPassword: string;
  confirmNewPassword: string;
}
