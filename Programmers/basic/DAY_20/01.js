function solution(dots) {
  let minX = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;

  for (let x of dots) {
    if (x[0] < minX) minX = x[0];
    if (x[0] > maxX) maxX = x[0];

    if (x[1] < minY) minY = x[1];
    if (x[1] > maxY) maxY = x[1];
  }

  return (maxX - minX) * (maxY - minY);
}

/* 다른 사람 풀이 */
function solution(dots) {
  let x = [],
    y = [];

  for (let pos of dots) {
    x.push(pos[0]);
    y.push(pos[1]);
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
