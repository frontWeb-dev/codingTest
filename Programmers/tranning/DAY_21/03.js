function solution(flo) {
  return parseInt(flo);
}

/* 
    다른 사람 풀이 
    - Math.trunc()
    - 정적 Math.trunc()메서드는 소수 자릿수를 제거하여 숫자의 정수 부분을 반환한다.
*/
function solution(flo) {
  var answer = Math.trunc(flo);
  return answer;
}
