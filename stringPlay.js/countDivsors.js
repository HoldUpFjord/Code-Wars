function getDivisorsCnt(n){
    // todo
  let divisors = []
  for( i = 1; i <= n; i++){
    if(n % i == 0){
      divisors.push(i)
    }
   
  }
   return divisors.length
}