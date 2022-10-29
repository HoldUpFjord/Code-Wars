function last(str){
    //split the str by word
    /*let resultReversed = []
    let result = []
    let splitString = str.toLowerCase().split(' ');
   splitString.forEach( word => result.push(
       word.split('').reverse().join('')
   ))
    
     result.sort().forEach(word => resultReversed.push(word.split('').reverse().join('')))
   return resultReversed*/
    //split/reverse/join each individual word 
    //sort 
    // split/reverse/join each word before returning
  // NUMBER 1 WAY: THE WAY
    return str.split(' ').sort((a,b) => a.charAt(a.length - 1 ) - b.charAt(b.length - 1))
  // NUMBER 2 WAy
    return str.split(' ').sort((a,b) => a.slice(-1) > b.slice(-1))
  
  }
 