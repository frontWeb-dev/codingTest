function solution(order) {
  var answer = 0;
  order.forEach(
    (drink) => (answer += drink.includes('americano') || drink.includes('anything') ? 4500 : 5000)
  );
  return answer;
}

function solution(order) {
  var answer = 0;
  order.forEach((drink) => (answer += drink.includes('cafelatte') ? 5000 : 4500));
  return answer;
}
