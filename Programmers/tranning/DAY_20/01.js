function solution(arr) {
  if (arr.length === 1 || arr.length === 2) return arr;
  let pow = 2;

  while (pow !== arr.length) {
    if (pow === arr.length) return arr;
    else if (pow < arr.length) {
      pow = pow * 2;
    } else if (pow > arr.length) {
      arr.push(0);
    }
  }

  return arr;
}

/* 다른 사람 풀이 */
function solution(arr) {
  const len = arr.length;
  let i = 0;

  while (true) {
    const num = 2 ** i;

    if (len > num) {
      i++;
    } else {
      for (let i = 0; i < num - len; i++) {
        arr.push(0);
      }

      return arr;
    }
  }
}
