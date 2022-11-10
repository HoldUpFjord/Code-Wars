function longSubSeq(nums, queries){
    for(i = 0; i < queries.length; i++){
      for(j = 0; j < nums.length; j++){
        if(nums.filter(num => num < queries[i] === [])){
            return [0]
        }
      }
    }
  } 