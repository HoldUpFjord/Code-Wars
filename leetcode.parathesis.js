// misunderstood test cases. For valid output, must be changed to so that ANY open bracket is valid as long as it is CLOSED. 

function paranthesis(s) {
    // input s will always be a string
    //input s only comprised of bracket variations
    // A valid string is comprised of a series of open, close brackets of the same type.
    //Automatic end case, no open parathesis/brackets in the first position
     if(s[0] ==='(' || s[0] === '[' || s[0] === '{'  ){
            for( i = 0; i < s.length; i++){
        
        //conditional to exclude starting point on odd/closed index's
            if(i === 0 ||  i % 2 == 0){
                  //conditonals conditional logic for false return values
                  if(s[i] === '(' && s[i+1] != ')' ){
                      console.log('case1')
                      return false
                      
                  }
                  else if (s[i] === '[' && s[i+1] != ']' ){
                      console.log('case2')
                      return false
                  }
                  else if (s[i] === '{' && s[i+1] != '}' ){
                      console.log('case3')
                      return false
                  }
                  //else return true
                  else return true
            }
          }
    //loop through string
    
    }
  else{
    return false
  }
};

console.log((paranthesis('()')), 'true')
console.log((paranthesis('(){}[]')), 'true')
console.log((paranthesis("{[]}")))