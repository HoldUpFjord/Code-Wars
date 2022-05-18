function squareSum(numbers){
    const squared = numbers.map(x => Math.pow(x,2));
    const initialValue = 0;
    const added =  squared.reduce(
      (previousValue,currentValue) => previousValue + currentValue,
      initialValue
    );
    return added
  }