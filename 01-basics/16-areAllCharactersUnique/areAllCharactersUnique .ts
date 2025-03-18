/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
export default function areAllCharactersUnique(str: string): boolean {
  const charSet = new Set();

  for (const char of str) {
    if (charSet.has(char)) {
      return false;
    } else {
      charSet.add(char);
    }
  }
  return true;
}
