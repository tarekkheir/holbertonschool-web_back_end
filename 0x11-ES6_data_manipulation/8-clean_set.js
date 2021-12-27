export default function cleanSet(set, startString) {
  const values = set.values();
  const result = [];
  for (const v of values) {
    if (startString !== '' && v.startsWith(startString)) {
      result.push(v.replace(startString, ''));
    }
  }
  return result.join('-');
}
