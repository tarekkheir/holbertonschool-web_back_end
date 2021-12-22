export default function getStudentIdsSum(arr) {
  let sum = 0;
  if (arr instanceof Array) {
    sum = arr.reduce((current, previous) => current + previous.id, 0);
  }
  return sum;
}
