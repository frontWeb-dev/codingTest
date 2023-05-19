function solution(arr) {
  var answer = [[]];
  let x = arr[0].length;
  let y = arr.length;

  if (x < y) {
    while (y - x !== 0) {
      arr = arr.map((a) => (a = [...a, 0]));
      x++;
    }
  } else {
    while (x - y !== 0) {
      arr.push(Array(x).fill(0));
      y++;
    }
  }
  return arr;
}
