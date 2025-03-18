/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
export default function sumOfEvenSquares(numbers: number[]): number {
  const evenNumbers = numbers.filter((num: number) => num % 2 == 0);
  const evenNumSquares = evenNumbers.map((evenNum: number) => evenNum ** 2);
  const sumOfSquares = evenNumSquares.reduce(
    (total, number) => total + number,
    0
  );

  return sumOfSquares;
}
