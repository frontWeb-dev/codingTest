function solution(str_list, ex) {
  str_list = str_list.filter((el) => !el.includes(ex));

  return str_list.join('');
}

/* 다른 사람 풀이 */
function solution(str_list, ex) {
  return str_list.reduce((acc, cur) => {
    if (cur.includes(ex)) return acc;
    return acc + cur;
  }, '');
}

const solution = (strs, ex) => strs.reduce((acc, cur) => acc + (cur.includes(ex) ? '' : cur), '');
