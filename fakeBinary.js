function fakeBin(x){
    let newString = []
    for(let i = 0; i<x.length; i++){
      if(x[i] >= 5){
        newString.push(1)
      }else if(x[i] < 5){
        newString.push(0)
      }
     }
    return newString.join('')
  }