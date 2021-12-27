export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';

  const values = set.values();
  const result = [];

  if (startString) {
    for (const v of values) {
      if (typeof str === 'string' && v.startsWith(startString)) {
        result.push(v.replace(startString, ''));
      }
    }
  }
  return result.join('-');
}
