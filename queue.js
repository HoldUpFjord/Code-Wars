function queueTime(customers, registers) {
    let arr = [];
  
    for(let i = 0; i < registers; i++)
      arr[i] = 0;
  
    for(let i = 0; i < customers.length; i++) {
      arr[0] += customers[i];
      arr.sort((a, b) => a - b);
    }
  
    return arr[arr.length - 1];
  }