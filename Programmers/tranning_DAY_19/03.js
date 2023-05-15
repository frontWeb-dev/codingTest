function solution(arr, flag) {
  let answer = [];

  arr.map((a, i) => {
    if (flag[i]) answer.push(...new Array(a * 2).fill(a));
    else answer = answer.slice(0, answer.length - a);
  });

  return answer;
}

/* 다른 사람 풀이 */
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)),
    []
  );
}
