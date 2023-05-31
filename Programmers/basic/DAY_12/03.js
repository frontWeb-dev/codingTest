function solution(my_string) {
  return [...my_string.replaceAll(/[a-zA-Z]/g, "")].map((a) => Number(a)).reduce((a, c) => a + c);
}
