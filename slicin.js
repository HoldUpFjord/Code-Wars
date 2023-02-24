function arrayDiff(a, b) {
//failed  method solution
    //return a.filter(i => i != b)
    
//brute force
    for(i = 0; i < a.length; i++){
        for(j = 0; j < b.length; j++){
          if (b[j] === a[i]){
            a.splice(a[i-1], a[i])
          }
        }
      }
      return a
  }