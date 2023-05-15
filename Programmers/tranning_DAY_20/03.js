function solution(strArr) {
  let map = new Map();

  strArr.map((a) => {
    let len = a.length;

    if (map.has(len)) map.set(len, map.get(len) + 1);
    else map.set(len, 1);
  });

  return Math.max(...map.values());
}

/* 다른 사람 풀이 - Map 코드 줄이기 */
function solution(strArr) {
  const counter = new Map();

  for (const str of strArr) {
    counter.set(str.length, (counter.get(str.length) || 0) + 1);
  }

  return Math.max(...counter.values());
}
