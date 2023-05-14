function solution(num_str) {
  let answer = 0;
  [...num_str].forEach((a) => (answer += Number(a)));
  return answer;
}

/* 다른 사람 풀이 */
const solution = (num_str) => [...num_str].reduce((acc, curr) => acc + Number(curr), 0);
