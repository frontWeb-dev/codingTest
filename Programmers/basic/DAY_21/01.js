function solution(my_string) {
  let numbers = [];
  let num = '';

  for (let x of my_string) {
    if (!isNaN(x)) {
      num += x;
    } else {
      if (num !== '') numbers.push(Number(num));
      num = '';
    }
  }

  if (num !== '') numbers.push(Number(num));

  return numbers.length === 0 ? 0 : numbers.reduce((acc, cur) => acc + cur, 0);
}
