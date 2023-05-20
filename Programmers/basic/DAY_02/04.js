function solution(numbers) {
  return numbers.map((a) => (a *= 2));
}

/* 다른 사람 풀이 */
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}
