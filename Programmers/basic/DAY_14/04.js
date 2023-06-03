function solution(my_string) {
  return my_string
    .split('')
    .map((a) => (a = a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join('');
}
