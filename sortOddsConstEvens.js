function sortArray(array) {
    // Return a sorted array.
   let oddArray = []
   /* put odd numbs into seperate array */
   for( i = 0; i< array.length; i++){
     if (array[i] % 2 != 0){
       oddArray.push(array[i])
     }
    }
    /* sort oddArray from low to high */
    oddArray.sort((a,b) => (a-b))
    
    for(j = 0; j < array.length ; j++){
      if(array[j] % 2 != 0){
        array[j] = oddArray.shift()
      }
      
    }
    return array
  }