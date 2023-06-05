function solution(n, t) {
  let result = n;
  let answer = 0;

  for (let i = 1; i <= t; i++) {
    answer = result * 2;
    result = answer;
  }

  return answer;
}

/* 다른 사람 풀이 */
function solution(n, t) {
  return n * Math.pow(2, t);
}
