function solution(strArr) {
  return strArr.filter((a) => !a.includes('ad'));
}

// 다른 사람 풀이
function solution(strArr) {
  strArr = strArr.filter((x) => {
    return x.indexOf('ad') == -1;
  });

  return strArr;
}
