function solution(hp) {
    let a = Math.floor(hp / 5); 
    let b = Math.floor((hp - 5 * a) / 3)
    let c= Math.floor((hp - (5 * a + 3 * b)) / 1);
    
    return a + b + c 
}