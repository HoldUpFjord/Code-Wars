/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2*/
//brute force: nested for loops
//Linear:hashmaps 
//log:sort


function majEl(arr){
    //incomplete: able to count, unable to find if maj element isnt arr[0]
    let countA = 0
    let countB = 0
    for( i = 0; i < arr.length; i++){
      if (arr[i] === arr[0]){
        countA ++
      } else{
        countB ++
      }
      
    }
    if(countA > countB){
      return arr[0]
    }else{
      return 
    }
    
}