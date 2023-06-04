function solution(quiz) {
  let answer = [];

  for (let a of quiz) {
    let result = 0;
    let operator = "+";

    a.split(" ").map((x) => {
      if (!isNaN(+x)) {
        if (operator === "+") result += +x;
        else if (operator === "-") result -= +x;
        else {
          result === +x ? answer.push("O") : answer.push("X");
        }
      } else {
        if (x === "+") operator = "+";
        else if (x === "-") operator = "-";
        else operator = "=";
      }
    });
  }
  return answer;
}

/* 다른 사람 풀이 */
function solution(quiz) {
  var answer = [];
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}
