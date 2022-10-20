function repeats(arr){
    // filter array by if the indexOf element is equal to lastIndexOf()
    
   let bet =  arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
  
    return bet.reduce((a,b) => a+b));
  }
  
  