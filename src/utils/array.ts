export function getArrayUnion<T>(array1: T[], array2: T[]): T[] {
  const combinedArray = array1.concat(array2);
  const unionSet = new Set(combinedArray);
  return Array.from(unionSet);
}