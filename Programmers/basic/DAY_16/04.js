function solution(s1, s2) {
  let answer = 0;
  s1.map((a) => (s2.includes(a) ? answer++ : null));

  return answer;
}
