export function getInitials(name: string) {
  const names = name.split(" ");

  const firstName = names[0];
  const lastName = names[1];

  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
}
