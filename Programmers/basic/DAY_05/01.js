function solution(price) {
  return price >= 500000
    ? Math.trunc(price * 0.8)
    : price >= 300000
    ? Math.trunc(price * 0.9)
    : price >= 100000
    ? Math.trunc(price * 0.95)
    : price;
}
