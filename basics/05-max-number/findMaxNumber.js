function findMaxNumber(numList) {
  let biggest = numList[0];
  for (const element of numList) {
    if (element > biggest) {
      biggest = element;
    }
  }
  return biggest;
}

// inbuilt methode
// function findMaxNumber(arr) {
//   return Math.max(...arr);
// }

module.exports = findMaxNumber;
