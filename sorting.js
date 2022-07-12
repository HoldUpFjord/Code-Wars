function between(a, b) {
    // your code here
    let arr = []
    for(i=b;i >= a; i--){
      arr.push(i)
    }
    return arr.sort(function(a,b){
      return a - b
     });
  }