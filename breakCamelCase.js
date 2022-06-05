function solution(string) {
    let res = "";
    let letters = string.split("");
    letters.forEach(letter=>{
      if(letter.toUpperCase() == letter)
        res+=" "+letter
      else
        res+=letter
    })
    return res;
}


function soluton( string) {
    res=""
    let letters = string.split("");
    letters.forEach(letter=>{
        if(letter.toUpperCase() == letter)
            res+=" "+letter
        else   
            res+=letter
    })
}