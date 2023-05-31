function solution(my_string) {
  return my_string
    .replaceAll(/[a-z]/g, "")
    .split("")
    .map((a) => Number(a))
    .sort((a, b) => a - b);
}
