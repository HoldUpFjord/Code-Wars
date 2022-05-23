function oddOrEven(array) {
   // enter code here
   initalValue = 0;
   let sum = array.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
   initalValue
   );
   if(sum % 2 == 0){
     return 'even'
   }else{
     return 'odd'
    }
}