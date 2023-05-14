function solution(rank, attendance) {
  let students = [];
  attendance.forEach((a, i) => a && students.push(rank[i]));

  let [a, b, c] = students.sort((a, b) => a - b).slice(0, 3);

  return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}
