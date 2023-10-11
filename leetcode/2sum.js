//brute force
var twoSum = (nums, target) => {
  for (let curr = 0; curr < nums.length; curr++) {/* Time O(N) */
      const complement = target - nums[curr];

      for (let next = (curr + 1); next < nums.length; next++) {/* Time O(N) */
          const num = nums[next];

          const isTarget = num === complement
          if (isTarget) return [ curr, next ];
      }
  }
}
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