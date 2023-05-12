function solution(arr) {
  var answer = [];

  arr.forEach((a) => {
    if (answer.length === 0) answer.push(a);
    else if (answer[answer.length - 1] === a) answer.pop();
    else if (answer[answer.length - 1] !== a) answer.push(a);
  });

  return answer.length > 0 ? answer : [-1];
}

/* 다른 사람 풀이 */
function solution(arr) {
  let stk = [];

  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
    //console.log("배열 추가 삭제 진행과정 : ",stk)
  });

  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}
