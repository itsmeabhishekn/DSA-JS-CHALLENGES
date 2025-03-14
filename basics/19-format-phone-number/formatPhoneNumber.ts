/**
 * Returns a string representing a phone number.
 * @param {number[]} numbers - The numbers to use in the phone number.
 * @returns {string} - The formatted phone number.
 */
export default function formatPhoneNumber(numbers: number[]): string {
  const areaCode = numbers.slice(0, 3).join("");
  const prefix = numbers.slice(3, 6).join("");
  const lineNumber = numbers.slice(6).join("");
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
