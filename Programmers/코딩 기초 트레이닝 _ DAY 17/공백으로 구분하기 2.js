/*
    split이나 replace만 사용했더니, 공백이 한 칸이 아닌 것에는 적용이 되지 않아서 filter로 한번 더 걸러줌 
*/

function solution(my_string) {
  return my_string.split(' ').filter((a) => a !== '');
}

// Solution. 다른 사람 풀이

// a !== ""  === a
function solution(my_string) {
  return my_string.split(' ').filter((v) => v);
}

// 정규 표현식을 이용한 풀이
function solution(my_string) {
  return my_string.trim().split(/ +/);
}
