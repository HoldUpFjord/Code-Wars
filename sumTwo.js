function twoSum(numbers, target) {
    // target 
    //empty array for result
    //loop through numbers
    //add numbers until equal to target || logic for choosing numbers
    //return index of numbers in result arr
    let result = [0];
    // target = a + b
    //subract target from first index of array('a')
    let b = target - numbers[0]
    //loop to find remainder('b')
    for(i = 0; i < numbers.length; i++){
      if( numbers[i]=== b){
        result.push(i) 
      }