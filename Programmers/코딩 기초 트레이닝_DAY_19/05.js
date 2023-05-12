function solution(arr, k) {
  let set = Array.from(new Set(arr));

  if (set.length > k) return set.slice(0, k);
  if (set.length < k) return [...set, ...new Array(k - set.length).fill(-1)];

  return set;
}

/* 다른 사람 풀이 */
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}
