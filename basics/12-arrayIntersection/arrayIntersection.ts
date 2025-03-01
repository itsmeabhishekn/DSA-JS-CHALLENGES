// export default function arrayIntersection(
//   arr1: number[],
//   arr2: number[]
// ): number[] {
//   const intersectionResults: number[] = [];
//   for (const element of arr1) {
//     if (arr2.includes(element)) {
//       intersectionResults.push(element);
//     }
//   }
//   return intersectionResults;
// }

// optimized
export default function arrayIntersection(
  arr1: number[],
  arr2: number[]
): number[] {
  const set2 = new Set(arr2);
  return arr1.filter((element) => set2.has(element));
}
