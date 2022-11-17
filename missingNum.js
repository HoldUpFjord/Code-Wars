function missingNum (arr, mixArr){
    // base case: fastest case if stars align
    if(arr.length === mixArr.length){
      return 0
      //mathmatical solution that runs linearly instead of quadratically 
    }else {
      let arrSum =  arr.reduce((a,c) => a + c, 0)
      let mixSum = mixArr.reduce((a,c) => a + c, 0)
      return arrSum - mixSum
    }
  }