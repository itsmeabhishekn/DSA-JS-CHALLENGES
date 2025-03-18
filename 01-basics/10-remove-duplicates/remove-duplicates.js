function removeDuplicates(arr) {
  let newArr = [];

  for (const element of arr) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

module.exports = removeDuplicates;
