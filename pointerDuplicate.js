var removeDuplicates = function(nums) {
    let count = 0
     for(i = 0; i < nums.length; i++){
         if( nums[i] !== nums[i+1]){
             nums[count++] = nums[i]
      }
     }
     nums.length = count
     console.log( nums )
     
 };