function solution(myString, pat) {
  let result = [...myString].map((a) => (a === 'A' ? 'B' : 'A')).join('');
  return result.includes(pat) ? 1 : 0;
}
