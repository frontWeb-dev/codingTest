function solution(my_string) {
  let answer = 0;
  let operator = "+";

  let arr = my_string.split(" ");

  for (let x of arr) {
    if (!isNaN(+x)) {
      operator === "+" ? (answer += +x) : (answer -= +x);
    } else {
      if (x === "+") operator = "+";
      else operator = "-";
    }
  }
  return answer;
}

/* 다른 사람 풀이 */
function solution(my_string) {
  const stack = [];

  let sign = 1;
  for (const ch of my_string.split(" ")) {
    if (ch === "+") {
      sign = 1;
    } else if (ch === "-") {
      sign = -1;
    } else {
      stack.push(ch * sign);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}
