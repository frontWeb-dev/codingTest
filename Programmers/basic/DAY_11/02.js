function solution(n) {
  let answer = 0;
  let count = 0;
  let index = 1;

  for (let i = 1; i <= n; i++) {
    while (index <= i) {
      if (i % index === 0) count++;
      index++;
    }
    if (count >= 3) answer++;
    count = 0;
    index = 1;
  }

  return answer;
}

/* 다른 사람 풀이 */
function solution(n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = 0;
      }
    }
  }

  return dp.filter((el) => el === 0).length;
}
