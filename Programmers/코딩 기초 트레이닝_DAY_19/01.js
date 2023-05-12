/*
  세 개의 구분자
  새로 배운 사실 : split에도 정규 표현식을 쓸 수 있다! 
*/

function solution(myStr) {
  let filter = myStr.split(/[a, b, c]/g).filter((a) => a);
  return filter.length > 0 ? filter : ['EMPTY'];
}
