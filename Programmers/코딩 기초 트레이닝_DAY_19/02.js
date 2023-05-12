/* 
    배열의 원소만큼 추가하기
*/

function solution(arr) {
  let answer = [];

  arr.forEach((a) => {
    let i = 0;
    while (i !== a) {
      answer.push(a);
      i++;
    }
  });
  return answer;
}

/* 다른 사람 풀이 */
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}

function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}
