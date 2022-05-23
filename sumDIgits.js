// Summing a numbers digits 7kyu
function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let sum = 0
    
    for(let i = 0; i < arr.length; i++)
      sum += +arr[i]
    return sum
  }
  