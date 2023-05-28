function solution(numbers, k) {
  let answer = [];
  let target = 0;

  for (let i = 0; i < k; i++) {
    answer.push(numbers[target]);
    target += 2;
    if (target > numbers.length - 1) target -= numbers.length;
  }

  return answer.pop();
}

/* 다른 사람 풀이 */
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}
