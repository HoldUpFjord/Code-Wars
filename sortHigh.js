function largestPairSum (numbers) {
     let sortedArr = numbers.sort((a,b) => b-a)
     return sortedArr[0] + sortedArr[1]
  }

  //bubble sort
  function largestPairSum (numbers) {
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