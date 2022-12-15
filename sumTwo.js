function twoSum(numbers, target) {
  //bruteForce: nested for loop
    //if nums[i] + nums[j] = target return true
    
    /*let result = []
    for(i = 0; i < nums.length; i++){
      for(j = i + 1; j < nums.length; j++){
        if(nums[i] + nums[j] === target){
            if(nums[i] === nums[j]){
                result.push(nums.indexOf(nums[i]))
                result.push(nums.indexOf(nums[j], i + 1))
            }else{
                result.push(nums.indexOf(nums[i]))
                result.push(nums.indexOf(nums[j]))
            }
        }
        
    }*/
    const numsMap = {}
    const pairs = []
    for(const num1 of nums){
        const num2 = target - num1
      if(numsMap[num2]){
        pairs.push(num1,num2)
      } else{
        numsMap[num1] = 1
      }
    }
    return pairs
  
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