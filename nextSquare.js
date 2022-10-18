function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  
  //for loop:iterate up from sq, until we find a sqrt
    
     
  for( i = sq + 1; i >= 0; i++){
    //conditional logic:
      //if sq, return num: else return -1
      if(Math.sqrt(sq) % 1 !== 0){
        return -1
      }else if(Math.sqrt(i) % 1 == 0){
        return i
        }
       
      
    }
}