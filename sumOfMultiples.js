function findSum(n) {
    let multiples = [];
    let initialValue = 0;
    for(i = 0; i <= n; i++){
      if([i] % 3 === 0 || [i] % 5 === 0) {
        multiples.push(i)
       
      }
    }
    return multiples.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  
  }