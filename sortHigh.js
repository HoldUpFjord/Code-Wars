function largestPairSum (numbers) {
    //TODO: Write your Code here
    //input an array of nums
    //output: single num which is the sum of the two largest nums in array
    
    //arr.sort
    //reverse
    //return numbers[0] + numbers[1]
    
     let sortedArr = numbers.sort((a,b) => b-a)
     return sortedArr[0] + sortedArr[1]
  }

  //bubble sort
  function largestPairSum (numbers) {
    //TODO: Write your Code here
    //input an array of nums
    //output: single num which is the sum of the two largest nums in array
    
    //bubble sort(?)
      // for loop
    for(i = 0; i < numbers.length; i++){
      for(j = 0; j < numbers.length ; j++){
        if( numbers[j] < numbers[j+1] ){
          let temp = numbers[j]
          numbers[j] = numbers[j+1]
          numbers[j+1] = temp
        }
      }
    
    }
      return numbers[0] + numbers[1]
  };