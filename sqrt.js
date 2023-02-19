//baseline
function sqrt (n) {
    let sqr = Math.sqrt(n)
  
    if(sqr - Math.floor(sqr) !== 0){
    return false
    } else {
    return true
    }
          
  }

//arrow function

const isSquare = n => Number.isInteger(Math.sqrt(n));