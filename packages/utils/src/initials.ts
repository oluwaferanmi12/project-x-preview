export const getInitials = (firstName?: string, lastName?: string): string => {
  const first = firstName?.trim().charAt(0).toUpperCase() ?? "";
  const last = lastName?.trim().charAt(0).toUpperCase() ?? "";
  return `${first}${last}`;
};


export const getInitialsFromFullName = (fullName: string) => {
  const names = fullName.trim().split(" ");
  return names[0][0] + names[names.length - 1][0];
};