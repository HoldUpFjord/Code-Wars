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