function removeParentheses(s){
    //input is a string
    //returning string 
    //examples: anything betweem parathensis goes
   
    // nested for, loop forward and backword
    // index of '(' and ')'
    //string .splice indexOf above
    for(i = 0; i < s.length; i++){
      for(j = s.length ; j > 0 ; j--){
        if(s[i] === '(' && s[j] === ')') {
            let prefix = s.slice( 0, i).split('')
            let suffix = s.slice(j+1, s.length).split('')
            return  prefix.concat(suffix)
            
        }
       
      }
    }
  
  }