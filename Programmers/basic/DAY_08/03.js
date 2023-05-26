function solution(emergency) {
    let answer = [];
    let tmp = [...emergency].sort((a, b) => b - a);
    emergency.map((el, i) => {
        answer.push(tmp.indexOf(el)+1)
    });
    
    return answer;
}