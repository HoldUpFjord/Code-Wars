function cypherString(str){
  
    let strSplit = str.toLowerCase().split('')
    //output ["d", "i", "n"]
    
    let resultArr = strSplit.map((letter) => strSplit.indexOf(letter) === strSplit.lastIndexOf(letter) ? '(' : ")" )
    return resultArr.join('')
    //map method
      //if a char appears once, return char as '('
      // if a char appears more than once, return as ')'
        //accomplish this by using indexOf, and lastIndexOf methods
  }