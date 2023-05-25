function solution(n) {
  return Array(n + 1)
    .fill(0)
    .map((el, i) => i++)
    .reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc));
}

/* 다른 사람 풀이 */
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

function solution(n) {
  var answer = 0;

  for (let i = 2; i <= n; i += 2) answer += i;

  return answer;
}
