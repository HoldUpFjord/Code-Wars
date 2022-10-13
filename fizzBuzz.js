
function fizzBuzz (goal){
    //for loop to iterate from 1 -> num
    //conditionals
      // if num % 3 === 0, fizz
      // if num % 5 === 0, buzz
      // if num % 3 and num % 5 === 0, fizzbuzz
    for(i = 1; i <= goal; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz') 
      } else if(i % 3 === 0){
        console.log('fizz') 
      }else if( i % 5 === 0){
        console.log( 'buzz')
      }else if(i <= goal){
        console.log(i)
      }else console.log('')
    }
  }