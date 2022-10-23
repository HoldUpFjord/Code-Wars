function persistence(num){
  //doesn't work for 999.
  let numString = num.toString();
  let count = 0
  if( numString.split('').length === 1){
    console.log(count)
  }else{
     //1.) for loop: i = result. 
    // 1.)convert num to string.
    // 2.) split numString
    //3.) convert numString back to int
    // 4.) reduce numSplit 
   //5.) return output of step 4. to loop
  for(i = 0 ; i >=0; i++){
     count ++
     let stringInt = []
     let stringSplit = num.toString().split('')
     for( i = 0; i < stringSplit.length; i++){
       if( numString.split('').length === 1){
        console.log(count)
    }else{
       stringInt.push(parseInt(stringSplit[i], 10))
     }
      console.log(stringInt.reduce((a,b) => a*b))
      return
     }
   }
    
  }
 
  
  
}
persistence(25)