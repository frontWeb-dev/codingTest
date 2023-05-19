function solution(binomial) {
  let [a, op, b] = binomial.split(' ');

  switch (op) {
    case '+':
      return parseInt(+a + +b);
    case '-':
      return parseInt(a - b);
    case '*':
      return parseInt(a * b);
  }
}

// 다른 사람 풀이
function solution(binomial) {
  var answer = 0;
  const s = binomial.split(' ');
  const n1 = parseInt(s[0]);
  const n2 = parseInt(s[2]);

  switch (s[1]) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
  }
}
