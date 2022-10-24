function persistence(num) {
    //code me
   //1.) for loop: i = result. 
     // 1.)convert num to string.
     // 2.) split numString
     //3.) convert numString back to int
     // 4.) reduce numSplit 
    //5.) return output of step 4. to loop
   
   /*for(i = 0 ; i >=0; i++){
     
      let stringInt = []
      let stringSplit = num.toString().split('')
      for( i = 0; i < stringSplit.length; i++){
        stringInt.push(parseInt(stringSplit[i], 10))
      }
       return stringInt.reduce((a,b) => a*b)
      
   }*/ 
   let string = num.toString();
   return string.split('').length
   
 }