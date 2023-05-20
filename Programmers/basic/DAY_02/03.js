function solution(numer1, denom1, numer2, denom2) {
  let numer = denom1 * numer2 + denom2 * numer1;
  let denom = denom1 * denom2;
  let maximum = 1;
  for (let i = 1; i <= numer; i++) {
    if (numer % i === 0 && denom % i === 0) {
      maximum = i;
    }
  }
  return [numer / maximum, denom / maximum];
}

// 다른 사람 풀이
function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
