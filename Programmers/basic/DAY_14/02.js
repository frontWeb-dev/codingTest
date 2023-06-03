function solution(order) {
  let count = 0;
  String(order)
    .split('')
    .map((a) => {
      a === '3' && count++;
      a === '6' && count++;
      a === '9' && count++;
    });
  return count;
}

/* 다른 사람 풀이 */
function solution(order) {
  return ('' + order).split(/[369]/).length - 1;
}
