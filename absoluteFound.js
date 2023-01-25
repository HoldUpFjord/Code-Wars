function digPow(n, p){
    // ...
    //n.toString
    let stringN = n.toString()
    // nSting.split
    let splitN = stringN.split('')
    //total = 0
    let total = 0
    //for loop 
    let baseP = parseInt(p)
    
    for( i = 0; i <= p; i++){
  //math.(.pow(nString[i], p)) += total
    let power = Math.pow(splitN[i], baseP) 
    console.log(total += power)
      baseP ++
    }
    
     if( total % n === 0){
       return total / n
     } else{
       return -1
     }
    //else return -1
  
}