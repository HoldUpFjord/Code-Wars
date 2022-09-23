function removeSmallest(numbers) {
  
    //sort would mutate array, that's a no
    // forEach loop,
      //loop through array for each element, if no elements are greater than current loop, remove
      //if no elements are greater, and theres an element that is equal, remove
    let sortedArr = numbers.sort((a,b)=> a-b)  
    let result = []
    for(i = 0; i < numbers.length; i++){
      if(numbers === []){
        return []
      }
      else if(numbers.length === 1){
        return []
      }
      else if(numbers[i] === sortedArr[0]){
         return numbers.splice(numbers[i]) 
          
         break
      }
    }
       
    
    return result
  }