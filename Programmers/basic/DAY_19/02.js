function solution(my_str, n) {
  let answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    let tmp = my_str.substring(i, i + n);
    answer.push(tmp);
  }

  return answer;
}

/* 다른 사람 풀이 */
function solution(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
