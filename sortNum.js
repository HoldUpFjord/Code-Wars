function solution(nums){
    if(nums === null){
      return []
    }else return  nums.sort(function(a,b){
         return a-b    
     });
}  