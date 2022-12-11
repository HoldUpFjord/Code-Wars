/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true*/

//Nested for loop, set, and hashmaps are the viable answers

//brute force: nested for
/*function dupes(arr){
    for(i = 0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if( arr[i] === arr[j]){
                return true
            }
        }
    }
}*/

//FIRST TRY

//
function containsDupes(arr){
    let numsMap = {}
    for(i=0; i < arr.lenth; i++){
      let num = arr[i]
      //if arr[i] is in numsMap: meets condition, return true
      if(numsMap[i]){
        return true
        //if number not present in numsMap
      }else {
        //put arr[i] in numsMap{}
        numsMap[num] = true
      }
    }  
    return false
}
  