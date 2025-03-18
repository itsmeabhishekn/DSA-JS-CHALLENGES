function count_occurance(strValue, letter) {
  let count = 0;

  for (const char of strValue) {
    if (char === letter) {
      count++;
    }
  }

  return count;
}

module.exports = count_occurance;
