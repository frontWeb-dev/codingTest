function solution(arr, n) {
  let len = arr.length;

  if (len % 2 === 0) {
    return arr.map((a, i) => (i % 2 !== 0 ? (a += n) : a));
  } else {
    return arr.map((a, i) => (i % 2 === 0 ? (a += n) : a));
  }
}

/* 다른 사람 풀이 */

function solution(arr, n) {
  return arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num));
}
