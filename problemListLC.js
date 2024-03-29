/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    //nums = arr | fn =  reducer | init = initial value
    //Two parts 
    let acc = init
    for(i = 0; i < nums.length; i++){
        acc = fn(acc, nums[i])
    }
    return acc
};
//typescript version
// //type Fn = (accum: number, curr: number) => number;

// function reduce(nums: number[], fn: Fn, init: number): number {
//     let val = init;

//     for (const num of nums) {
//         val = fn(val, num);
//     }

//     return val;
// }