function reverse(str){
    // empty result str
    let result = ''
    // for loop -> i = str.length, i--
    for( i = str.length-1; i >= 0 ; i--){
      // push str[i] result
      result += str[i]
      }
    
    return result
    
  }
  
  //OR

  function reverse(str){
    for(let char of str){
        reverseStr = char + reverseStr

    }
    return reverseStr
  }