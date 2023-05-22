function solution(n) {
  let lcm = 1;
  while (true) {
    if (lcm % n == 0 && lcm % 6 == 0) {
      break;
    }
    lcm++;
  }

  return lcm / 6;
}

/* 다르 사람의 풀이 */
const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};

function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}
