function solution(n) {
  let answer = [];
  let k = 2;

  while (n >= 2) {
    if (n % k === 0) {
      answer.push(k);
      n = n / k;
    } else {
      k++;
    }
  }

  return [...new Set(answer)];
}
