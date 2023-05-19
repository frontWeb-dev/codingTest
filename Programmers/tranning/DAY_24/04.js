function solution(myString) {
  return [...myString].map((a) => (a.charCodeAt() < 108 ? (a = 'l') : a)).join('');
}

/* 다른 사람 풀이 */
const solution = (myString) => myString.replace(/[a-k]/g, 'l');
