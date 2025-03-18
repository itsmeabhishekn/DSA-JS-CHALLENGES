export default function findMissingNumber(arr: number[]): number {
  if (!arr || arr.length == 0) {
    return 0;
  }

  const length = arr.length + 1;
  const expectedSum = (length * (length + 1)) / 2;
  const actualSum = arr.reduce((partialSum, a) => partialSum + a, 0);
  return expectedSum - actualSum;
}
