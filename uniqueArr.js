function uniqueCombos(arr){
    //set -> unique value
    //map [1,2], [4], [5,6] -> 2,1,2: unique values per array. Using set
    //return arr.map(subArr => new Set(subArr).size).reduce((a,c) => a*c,1)
    const solve = arr.reduce((a,c) => a * new Set(c).size,1)
  }