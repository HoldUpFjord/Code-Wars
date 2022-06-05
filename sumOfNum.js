function sumTwoSmallestNumbers(numbers) {  
    //Code here
    
    let list = numbers.sort((a,b) => a-b);
    return list[1] + list[0]
    
    
  }