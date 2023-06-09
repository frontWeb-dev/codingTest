function solution(n, k) {
  let food = Math.floor(n / 10);
  return n * 12000 + k * 2000 - food * 2000;
}

/* 다른 사람 풀이 */
function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}
