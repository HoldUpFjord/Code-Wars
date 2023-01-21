function calculateYears(principal, interest, tax, desired) {
    // your code
  // Taking in 4 parameters
  // returning num of years it takes principal to equal desired
   let count = 0
   let interestAccrued =  principal * interest
   let Aftertax =  interestAccrued - interestAccrued*tax
   let yearSum = principal + Aftertax 
  
for(i = count; i >= 0; i++)  {
  if( yearSum >= desired){
    return count
  } else {
    principal = yearSum
    count ++
    console.log(yearSum)
  }
 }
  
}


//Recursive attempt
function calculateYears(principal, interest, tax, desired) {
  
    let count = 0
   
   if (principal >= desired){
     return count
   } else{
     let interestAccrued =  principal * interest
     let Aftertax =  interestAccrued - interestAccrued*tax
     return  calculateYears(principal+Aftertax) 
   
     count ++
     }
    }

  
