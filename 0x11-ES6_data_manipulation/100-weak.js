export const weakMap = new WeakMap();

export function queryAPI(obj) {
  if (!(weakMap.has(obj))) {
    weakMap.set(obj, 0);
  }

  weakMap.set(obj, weakMap.get(obj) + 1);

  if (weakMap.get(obj) >= 5) {
    throw Error('Endpoint load is high');
  }
}
