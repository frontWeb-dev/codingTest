function solution(keyinput, board) {
  var answer = [0, 0];
  let maxX = (board[0] - 1) / 2;
  let maxY = (board[1] - 1) / 2;

  console.log(maxX, maxY);

  keyinput.map((a) => {
    switch (a) {
      case "left":
        if (answer[0] === -maxX) return;
        else answer[0] -= 1;
        break;
      case "right":
        if (answer[0] === maxX) return;
        else answer[0] += 1;
        break;
      case "up":
        if (answer[1] === maxY) return;
        else answer[1] += 1;
        break;
      case "down":
        if (answer[1] === -maxY) return;
        else answer[1] -= 1;
    }
  });

  return answer;
}
