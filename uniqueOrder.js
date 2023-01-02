var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    //Parameters: Taking in a string or an array
    //returning an array 
    //Ex -> case sensetive, once a break in a char happens, adding that value to arr
    
    //empty arr
    let result  = []
    //if string, turn into a array to loop through
    if( typeof iterable === ' string'){
      iterable = iterable.split('')
    }
    
    // for loop
    for( i = 0 ; i < iterable.length ; i++){
      
       console.log(iterable[i])
    // condiontal
       // if iterable[i] !=== iterable[i-1]
     
       if (iterable[i] !== iterable[i-1]){
        //result.push()
        result.push(iterable[i]) 
      
      }
      
     
        
       }
  
    return result 
    
  }