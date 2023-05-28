function solution(letter) {
    let answer = '';
    let morse = {'.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'};
    letter.split(" ").map((el) => {
        for(let [key, value] of Object.entries(morse)) {
            if(key === el) answer += value;
        }
    })
    return answer;
}