function twoSum(numbers, target) {
  //bruteForce: nested for loop
    //if nums[i] + nums[j] = target return true
    let result = []
    for(i = 0; i < nums.length; i++){
        for(j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(nums.indexOf(nums[i])) 
                result.push(nums.indexOf(nums[j]))
            }
        }
    }
  return result
};

  
  /*

    let seen = new Map();
    for (let i = 0; i < numbers.length; i++) {
      let x = numbers[i], y = target - x;
      if (seen.has(y))
        return [seen.get(y), i];
      seen.set(x, i);
    }*/

  }