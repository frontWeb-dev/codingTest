function solution(n) {
  return [...(n + "")].map((a) => +a).reduce((acc, cur) => acc + cur);
}
