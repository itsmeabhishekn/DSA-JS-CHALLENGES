function isPalindrome(str) {
  const ogString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = reverseString(ogString);
  console.log(ogString, reversedStr);
  return ogString === reversedStr;
}
function reverseString(str) {
  let reversed = "";
  for (const letter of str) {
    reversed = letter + reversed;
  }
  return reversed;
}

module.exports = isPalindrome;
