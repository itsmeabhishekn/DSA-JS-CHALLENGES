function reverseString(str) {
  let reversed = "";
  for (const letter of str) {
    reversed = letter + reversed;
  }
  return reversed;
}

module.exports = reverseString;
