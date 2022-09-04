function wave(str){
    //empty arr 'result'
    let result = [];
    let letters = str.split('')
    // string methods don't work with array, need to redo with .map() to apply logic
    for(i = 0; i <= str.length; i++) {
      result.push( letters.toUpperCase([i]) + letters.splice(0) )
      
    }
    return result
    
  
    
  }