function solution(my_string, n) {
  return [...my_string].map((a) => (a = a.repeat(n))).join('');
}

/* 다른 사람 풀이*/
function solution(my_string, n) {
  return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '');
}
