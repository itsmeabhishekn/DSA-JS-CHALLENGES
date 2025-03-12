/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
export default function findFirstNonRepeatingCharacter(
  str: string
): string | null {
  const charCount: Record<string, number> = {};

  //   step 1 : count occurences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //   step 2 : find the first character with a count of 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}
