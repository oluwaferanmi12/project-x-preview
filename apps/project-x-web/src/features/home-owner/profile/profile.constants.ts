export const passwordRequirements = [
  ["Lowercase", /[a-z]/],
  ["Uppercase", /[A-Z]/],
  ["Number", /[0-9]/],
  ["8 characters", /.{8}/],
  ["Special characters", /[^a-zA-Z0-9]/],
] as const;
