function calculateYears(principal, interest, tax, desired) {
    if (principal === desired){
        return 0
      } 
      for( i = 0 ; principal < desired; i++){
       
        let interestAccrued =  principal * interest
        let Aftertax =  interestAccrued - interestAccrued*tax
         console.log(principal += Aftertax)
        if(principal >= desired){
          return i+1
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

  
