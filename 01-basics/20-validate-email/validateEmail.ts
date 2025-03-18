/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
export default function validateEmail(email: string): boolean {
  if (!email.includes("@")) {
    return false;
  }

  const [usernamePart, domainPart] = email.split("@");

  if (usernamePart.length === 0 || domainPart.length < 0) {
    return false;
  }

  const domainExtension = domainPart.split(".");
  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2
  ) {
    return false;
  }

  return true;
}
