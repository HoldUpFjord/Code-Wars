function grow(x){
  
    const sortedX = x.sort()
    const initalValue = 1
    
    const solved = sortedX.reduce(
      (previousValue,currentValue) => previousValue * currentValue,
      initalValue
    );
    return solved
  
  }