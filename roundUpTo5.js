function roundToNext5(n){
    // determine the remainder.
    let remainder = n % 5
    
    // if multiple of 5, returns itself. Includes 0
    if(remainder === 0 ){
      return n;
      
    // if positive, find difference of n and target. Adds this difference This rounds up
    }else if(n > 0){
       let difference = 5 - remainder
       return n + difference
      
      // if negative, turn the remainder positive. Then add it to n.
    }else if (n < 0){
      return remainder * -1 + n
    }
}