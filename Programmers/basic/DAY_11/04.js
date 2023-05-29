function solution(n) {
  let i = 1;
  let count = 1;
  while (true) {
    count *= i;
    if (count === n) return i;
    else if (count > n) return i - 1;
    else i++;
  }
}
