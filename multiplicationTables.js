function multiplicationTable (size) {
    
    let result = [];
    let baseArr = [];
   
      for( i = 1; i <= size ; i++){
          baseArr.push(i)
      }
      for(j = 1 ; j <= size ; j++){
        result.push(baseArr.map(x => x*j))
      }   
      
    return result
        
  }