function solution(myString, pat) {
  let answer = 0;

  while (myString.indexOf(pat) !== -1) {
    myString = myString.substring(myString.indexOf(pat) + 1);
    answer++;
  }

  return answer;
}

// 다른 사람 풀이
function solution(myString, pat) {
  let count = 0;
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }

  return count;
}
