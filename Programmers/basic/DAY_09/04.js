function solution(balls, share) {
    let n = 1;
    let m = 1;
    let nm = 1;
    
    for(let i = balls; i > 0; i--) {
        n *= i;
    }
    
    for(let i = share; i > 0; i--) {
        m *= i;
    }
    
    for(let i = balls - share; i > 0; i--) {
        nm *= i;
    }
    
    return Math.round(n / (nm * m))
}