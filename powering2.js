function powersOfTwo(n){
    
    let result = []
    if(n === 0){
      result.push(1)
    } else  {
      for(i = 0; i <= n; i++){
      result.push(Math.pow(2,i))
     }
    }
    return result
    
  }