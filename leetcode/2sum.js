//hashmap On solution
var twoSum = function(nums, target) {

    let map = {};
  
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      
  
      if (map.hasOwnProperty(complement)) {
        return [map[complement], i];
      }
      map[nums[i]] = i;
    }
  
    return [0, 0];
  };