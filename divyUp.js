//base case
function arithmetic(a, b, operator){
    //your code here!
    
    if(operator === 'add'){
      return a + b
    } else if(operator == 'subtract'){
          return a - b
    } else if(operator === 'multiply'){
              return a*b
      } else {
      return a / b
    }
  }

  //arrow function 
  const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  }[operator]);