function solution(array) {
  let result = Number.MIN_SAFE_INTEGER;
  let answer = 0;
  let match = 0;

  const map = new Map();
  if (array.length === 1) return array[0];

  array.map((a) => {
    map.has(a) ? map.set(a, map.get(a) + 1) : map.set(a, 1);
  });

  for (let [key, value] of map) {
    if (value > result) {
      result = value;
      answer = key;
      match = 0;
    } else if (value === result) match = -1;
  }

  return match === 0 ? answer : -1;
}
