function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    i % 2 !== 0 ? answer.push(i) : null;
  }

  return answer;
}

/* 다른 사람 풀이 */
function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i += 2) answer.push(i);

  return answer;
}

const solution = (n) => Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);
