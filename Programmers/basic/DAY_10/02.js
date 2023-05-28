function solution(num_list, n) {
  var answer = [];
  let i = 0;

  while (i < num_list.length) {
    let tmp = [];
    for (let k = i; k < i + n; k++) {
      tmp.push(num_list[k]);
    }
    answer.push([...tmp]);
    i += n;
  }
  return answer;
}

/* 다른 사람 풀이 */
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

function solution(num_list, n) {
  return Array(num_list.length / n)
    .fill([])
    .map(() => num_list.splice(0, n));
}
