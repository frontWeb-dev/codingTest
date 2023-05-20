function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// 다른 사람 풀이
function solution(num1, num2) {
  return ~~((num1 / num2) * 1000);
}

/*
  # double tilde(~~)
  - 이중 NOT의 비트 연산자.
  - 양수에 대해서는 Math.floor()과 같고, 음수에 대해서는 Math.ceil()과 같은 결과를 나타낸다. 
*/
