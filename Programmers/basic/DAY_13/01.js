function solution(s) {
  let answer = 0;
  let tmp = 0;
  s.split(" ").map((a) => {
    if (a !== "Z") {
      answer += Number(a);
      tmp = Number(a);
    } else {
      answer -= tmp;
    }
  });

  return answer;
}
