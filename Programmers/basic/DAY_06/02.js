function solution(n) {
  let star = '';
  for (let i = 1; i <= n; i++) {
    star += '*';
    console.log(star);
  }
}

/* 다른 사람 풀이 */
function solution(n) {
  for (let i = 1; i < n + 1; i++) {
    console.log('*'.repeat(i));
  }
}
