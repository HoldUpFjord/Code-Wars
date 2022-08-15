function reverseLetter(str) {
    //coding and coding..
    let reverseStr= str.match(/[a-zA-Z]/g)
    let result = []
    const length = reverseStr.length
    for(i = length; i >= 0; i--){
      
       result.push(reverseStr[i])
      
    }
    
    return result.join('')
  }