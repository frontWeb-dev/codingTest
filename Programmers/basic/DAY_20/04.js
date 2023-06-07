/* 다른 사람 풀이 

 * 각 값별로 인덱스를 사용하기 위해서 배열(arrPolynomial)로 바꿔(.split(" "))줍니다.
 * polynomial[0] => 3,  arrPolynomial[0] => 3x
 *
 * 주어진 문자열은 "x"와 "num" 그리고 "+" 입니다
 * 단 사칙연산은 "+"만 존재 하므로 제외하고
 * x와 num를 분리합니다.
 *
 * x
 * arrPolynomial에서 "x"를 포함하는 값을 뽑아낸 배열을 만듭니다.
 * .filter((v) => v.includes("x"))
 * 위 배열에서 각 값을 "x"를 기준으로 나눈 배열로 만들고
 * 나눈 배열의 0번 인덱스를 리턴하는데
 * 0번 인덱스가 ""이 아니라면 v.split("x")[0] ""이라면 "1"을 리턴합니다.
 * .map((v) => (v.split("x")[0] ? v.split("x")[0] : "1"));
 *
 * num
 * arrPolynomial에서 숫자로 바꾸었을때 참인 값을 배열로 만듭니다.
 * arrPolynomial.filter((v) => +v)
 *
 * 만약 arrX.length와 num.length가 둘다 존재한다면
 * 두 배열 모두 배열의 값을 숫자로 바꾸고 모두 더해주고
 * arrX = arrX.reduce((a, b) => +a + +b);
 * num = num.reduce((a, b) => +a + +b);
 * `${arrX + ""}x + ${num + ""}`를 리턴합니다.
 * 만약 두배열 중 하나만 존재할 경우
 * 존재하는 배열의 값을 모두 숫자로 바꾸고 모두 더해주고
 * 형식에 맞게 리턴합니다.
 * 추가 arrX가 "1"인 경우 1x로 표기가 되어서
 * arrX가 1인 경우는 arrX를 ""로 바꿔 줍니다.
 */

function solution(polynomial) {
  const arrPolynomial = polynomial.split(" ");
  let arrX = arrPolynomial
    .filter((v) => v.includes("x"))
    .map((v) => (v.split("x")[0] ? v.split("x")[0] : "1"));
  let num = arrPolynomial.filter((v) => +v);

  if (arrX.length && num.length) {
    arrX = arrX.reduce((a, b) => +a + +b);
    num = num.reduce((a, b) => +a + +b);
    if (arrX === "1") arrX = "";
    return `${arrX + ""}x + ${num + ""}`;
  } else {
    if (arrX.length) {
      arrX = arrX.reduce((a, b) => +a + +b);
      if (arrX === "1") arrX = "";
      return `${arrX + ""}x`;
    }
    if (num.length) {
      num = num.reduce((a, b) => +a + +b);
      return num + "";
    }
  }
}

function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  const num = arr.filter((n) => !isNaN(n)).reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  return answer.join(" + ");
}
