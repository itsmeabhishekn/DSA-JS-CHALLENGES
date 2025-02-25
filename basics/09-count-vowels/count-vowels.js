function countVowels(str) {
  const vowels = ["a", "e", "i", "e", "o", "u"];
  let vowelCount = 0;
  for (const letter of str.split("")) {
    if (vowels.includes(letter)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

module.exports = countVowels;
