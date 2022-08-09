function count (string) {  
    // The function code should be here
    
    let result = {}
    
    let newString = string.toLowerCase().split('')
    
    for(const element in newString){
      if(result[element]){
        result[element] += 1
      } else {
        result[element] = 1
      }
    }
     return result;
  }