//proper way 
function removeParentheses(s){
    let result = "";
    let count = 0;
    for (let letter of s){
      if (letter == "(") count += 1;
      if (count == 0) result += letter;
      if (letter == ")") count -= 1
    }
    return result
  }





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
            let resultNoTestCase6 =  prefix.join('').concat(suffix.join(''))
            let count = 1
            
            if(resultNoTestCase6 === ''){
             console.log(s.split(' '))
             for(k = 0; k < s.length; k++){
               
                  if( s[k] === ')' ){
                    count++
                    let testCase6Arr =  Array(count+1).fill('')
                    return testCase6Arr.join(' ')
                
               } 
               
             } 
            //return s.split('').filter( x => x === ' ').join('')
            } else{
              return resultNoTestCase6
            }
            
        }
       
      }
    }
  
  }