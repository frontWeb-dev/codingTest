function solution(picture, k) {
  let answer = [];

  let str = '';
  picture.map((a) => {
    str = '';
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < k; j++) {
        str += a[i];
      }
    }
    for (let i = 0; i < k; i++) {
      answer.push(str);
    }
  });

  return answer;
}

/* 다른 사람 풀이 */
function solution(picture, k) {
  var answer = [];

  picture.forEach((line) => {
    const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), '');

    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}
