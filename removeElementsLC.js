//quick sort ish solution
//not optimal
var removeElement = function(nums, val) {
    // Two params, nums -> arr & val-> int
    // Two Output: nums-> inPlacedArr & k

    //Ex: 
        //Not sorted
        //empty values replaced with underscores
        //returning mutated nums, not returning resultArr
        count = 0
        pivot = nums[Math.round(nums.length/2)]
        left = []
        right=[]
        for(i = 0; i < nums.length ; i++){
            if(nums[i] != val){
                left.push(nums[i])
            } else {
                right.push(nums[i])
            }
        }
       
       return left
};