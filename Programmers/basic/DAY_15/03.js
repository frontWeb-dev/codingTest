function solution(s) {
  let answer = [];
  let map = new Map();

  [...s].map((a) => {
    map.set(a, map.get(a) + 1 || 1);
  });

  for (let [key, value] of map) {
    if (value === 1) answer.push(key);
  }

  return answer.sort().join('');
}

/* 다른 사람 풀이 */
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join('');
}
