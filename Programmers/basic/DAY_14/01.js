function solution(array, n) {
  let answer = 0;
  array.sort((a, b) => a - b);

  let abs = array.map((a) => (a = Math.abs(n - a)));
  let min = Math.min(...abs);
  let filter = abs.filter((a) => a === min);

  return array[abs.indexOf(min)];
}

/* 다른 사람 풀이 */
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}
