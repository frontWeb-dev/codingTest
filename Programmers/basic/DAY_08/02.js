function solution(age) {
    let answer ='';
    
    [...age.toString()].map((el) => 
        answer += String.fromCharCode(+el + 97)   
    )
    
    return answer;
}