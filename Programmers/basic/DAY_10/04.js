function solution(numbers, direction) {
  if (direction === 'left') {
    return [...numbers.splice(1), numbers[0]];
  } else {
    return [numbers[numbers.length - 1], ...numbers.splice(0, numbers.length - 1)];
  }
}
