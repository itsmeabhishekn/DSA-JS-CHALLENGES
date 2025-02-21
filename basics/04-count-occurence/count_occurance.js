function count_occurance(strValue, letter) {
  let count = 0;

  strValue.split("").forEach((element) => {
    if (element === letter) count++;
  });
  return count;
}

module.exports = count_occurance;
