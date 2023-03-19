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

  //quicksort
  function largestPairSum (numbers) {
  
    if (numbers.length <= 1){
      return numbers
    }
    
     const pivot = numbers[0];
     const left = [];
     const right = [];
  
     let count = 0
     for(let i = 1 ; i < numbers.length ;  i++){
      count ++
      if(numbers[i] >  pivot){
        left.push(numbers[i]);
        } else{
          right.push(numbers[i]);
      }
            
      
    }
       
   return largestPairSum(left).concat(pivot, largestPairSum(right));
  };
  const numbers = [1,2,3,4,6,-1,2]
  const sortedNumbers = largestPairSum(numbers);
  console.log((sortedNumbers[0]+sortedNumbers[1]), );