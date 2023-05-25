function solution(angle) {
  return angle === 180 ? 4 : angle > 90 ? 3 : angle === 90 ? 2 : 1;
}

/* 다른 사람 풀이 */
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}
