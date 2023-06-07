function solution(numbers) {
  numbers.sort((a, b) => b - a);
  let minus = numbers.filter((a) => a < 0).sort((a, b) => b - a);

  return minus.length >= 2
    ? Math.max(numbers[0] * numbers[1], minus[0] * minus[1])
    : numbers[0] * numbers[1];
}

/* 다른 사람 풀이 */
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}
