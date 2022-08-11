function factorial(n){ 
 
 if(n < 0 || n > 12){
   throw new RangeError('Error');
   
 } else if(n === 0){
   return 1
   
 }
   else{
    return n * factorial( n - 1 ); 
  }
    
    
 
  // Calculate the factorial here
}