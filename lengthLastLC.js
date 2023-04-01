//Original solution
var lengthOfLastWord = function(s) {
    if(s.length === 1){
       return s.length
      } else  {
    const split = s.split(' ')
    console.log(split.length)
    for(i = split.length-1; i >= 0 ; i--){
        if(split[i].length > 0){
            let removeSpaces = split[i].split('').filter(x => x != ' ').join('')
            // console.log(removeSpaces.length)
            return split[i].length
            } 
    }
  }
};

//one liner
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};

//most efficient space/time solution
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let letterCount = 0;
    while(i >= 0){
        if(s[i] == ' ' && letterCount > 0){
            return letterCount;
        }else if(s[i] != ' '){
            letterCount++
        }
        i--;
    }
    
    return letterCount
};