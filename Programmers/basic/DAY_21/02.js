function solution(board) {
  const n = board.length;
  let answer = n ** 2; // 전체 = 안전지대로 설정. 위험지역을 구하여 뺄 계획.
  let dangers = [];
  board.forEach((a) => {
    dangers.push(a.map((b) => (b = 0))); // 새로운 2차원 배열 생성
  });
  if (n === 1) {
    // 특수한 상황 처리
    if (board[0][0] === 1) return 0;
    else return 1;
  }
  board.forEach((x, i) => {
    x.forEach((y, j) => {
      y === 1 ? (dangers = check(i, j, n, dangers)) : null;
    });
  });
  dangers.forEach((array) => {
    answer -= array.filter((z) => z === 1).length; // 위험 지역의 수를 찾을 때마다 뺀다.
  });
  return answer;
}

function check(i, j, n, dangers) {
  switch (i) {
    case 0:
      switch (j) {
        case 0: // 지뢰 = 좌측 상단 모퉁이
          (dangers[i][j] = 1),
            (dangers[i][j + 1] = 1),
            (dangers[i + 1][j] = 1),
            (dangers[i + 1][j + 1] = 1);
          break;
        case n - 1: // 지뢰 = 우측 상단 모퉁이
          (dangers[i][j - 1] = 1),
            (dangers[i][j] = 1),
            (dangers[i + 1][j - 1] = 1),
            (dangers[i + 1][j] = 1);
          break;
        default: // 지뢰 = 상단 모서리
          (dangers[i][j - 1] = 1),
            (dangers[i][j] = 1),
            (dangers[i][j + 1] = 1),
            (dangers[i + 1][j - 1] = 1),
            (dangers[i + 1][j] = 1),
            (dangers[i + 1][j + 1] = 1);
          break;
      }
      break;
    case n - 1:
      switch (j) {
        case 0: // 지뢰 = 좌측 하단 모퉁이
          (dangers[i - 1][j] = 1),
            (dangers[i - 1][j + 1] = 1),
            (dangers[i][j] = 1),
            (dangers[i][j + 1] = 1);
          break;
        case n - 1: // 지뢰 = 우측 하단 모퉁이
          (dangers[i - 1][j - 1] = 1),
            (dangers[i - 1][j] = 1),
            (dangers[i][j - 1] = 1),
            (dangers[i][j] = 1);
          break;
        default: // 지뢰 = 하단 모서리
          (dangers[i - 1][j - 1] = 1),
            (dangers[i - 1][j] = 1),
            (dangers[i - 1][j + 1] = 1),
            (dangers[i][j - 1] = 1),
            (dangers[i][j] = 1),
            (dangers[i][j + 1] = 1);
          break;
      }
      break;
    default:
      switch (j) {
        case 0: // 지뢰 = 좌측 모서리
          (dangers[i - 1][j] = 1),
            (dangers[i - 1][j + 1] = 1),
            (dangers[i][j] = 1),
            (dangers[i][j + 1] = 1),
            (dangers[i + 1][j] = 1),
            (dangers[i + 1][j + 1] = 1);
          break;
        case n - 1: // 지뢰 = 우측 모서리
          (dangers[i - 1][j - 1] = 1),
            (dangers[i - 1][j] = 1),
            (dangers[i][j - 1] = 1),
            (dangers[i][j] = 1),
            (dangers[i + 1][j - 1] = 1),
            (dangers[i + 1][j] = 1);
          break;
        default: // 지뢰 = 안쪽
          (dangers[i - 1][j - 1] = 1),
            (dangers[i - 1][j] = 1),
            (dangers[i - 1][j + 1] = 1),
            (dangers[i][j - 1] = 1),
            (dangers[i][j] = 1),
            (dangers[i][j + 1] = 1);
          (dangers[i + 1][j - 1] = 1), (dangers[i + 1][j] = 1), (dangers[i + 1][j + 1] = 1);
          break;
      }
      break;
  }
  return dangers;
}
