function solution(n) {
    let answer = 0;
    let index = 1;
    let exc = 0;
    while(index <= Math.sqrt(n)) {
        if(n % index === 0) {
            answer++;
            if(n / index === index) exc ++;
        } 
        index++;
    }
    
    return answer * 2 - exc
}