function solution(a, b) {
  if (a % 2 !== 0 && b % 2 !== 0) return a * a + b * b;
  if (a % 2 !== 0 || b % 2 !== 0) return 2 * (a + b);
  else return Math.abs(a - b);
}

/* 다른 사람 풀이 */
function solution(a, b) {
  const isAOdd = a % 2 === 1;
  const isBOdd = b % 2 === 1;

  if (isAOdd && isBOdd) return Math.pow(a, 2) + Math.pow(b, 2);
  if (!isAOdd && !isBOdd) return Math.abs(a - b);
  return 2 * (a + b);
}
