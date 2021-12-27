export default function hasValuesFromArray(set, arr) {
  const values = arr.values();

  for (const v of values) {
    const check = set.has(v);
    if (check === false) return false;
  }

  return true;
}
