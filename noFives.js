function dontGiveMeFive(start, end) { 
    // goal is to iterate from a to b, skipping any number with 5 in it
    
    //The fifties aren't caught in the algo below, so I declare them explicitly. This let me check if my iteration is a '50' with the .indexOf method.
    let fifties =[50,51,52,53,54,56,57,58,59]
      //an empty array to push the numbers we want to
    let result = [];
    // Loop to iterate up from start to finish
    for(i = start; i <= end; i++){
      //Below is the magic/algo: 
      
      //LOGIC: Every number up to 149 with 5 in it, besides the 50's, will be divisible by '5' and odd. Numbers divisble by '5' and even end with '0'
      
      //sorter is a variable that is just the iteration divided by 5. It is used and explained on line 24
      let sorter = i / 5;
      
      //The following conditionals are the algo. 
      
      //if iteration is not divisible by 5 AND is not '50-59', we push it to result. indexOf return -1 if the argument/element is not in array. This is how we sort through the fifties array.
      if(i % 5 != 0 && fifties.indexOf(i) === -1){
        result.push(i);
        
        // if it is divisible 5(sorter), but it is even AND not equal to 50, we push to result
       }else if(sorter % 2 === 0 && i != 50){
         result.push(i)
       };
      };
    return result.length
  }