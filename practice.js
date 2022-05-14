// function sumAll(arr) {

 //   let fullArr = [];
 //   let sum = 0;
 //   const reducer = (a, b) => a + b;
//
 //   arr.sort(function(a, b) {
 //       return a - b
 //   });

 //   for (let i = arr[0]; i <= arr[1]; i++) {
 ////       fullArr.push(i);
 //   }

 //   sum = fullArr.reduce(reducer);
 
  //  return sum;
//}
//const arr = [1,4]

//console.log(sum)



//function digitize(n) {
//    return String(n).split('').reverse().map(Number)
//  }

////function oddOrEven(array) {
    //enter code here
   //initalValue = 0;
   //let sum = array.reduce(
 //(previousValue, currentValue) => previousValue + currentValue,
   //initalValue
   //);
   //if(sum % 2 == 0){
     //return 'even'
   //}else{
     //return 'odd'
   //}
   
 //}
// Beginner Series #2 Clock, 7Kyu
 //function past(h, m, s){
 //   //#Happy Coding! ^_^
 //   const hoursToMilli = (((h *  60) * 60)* 1000);
 //   const minToMilli = ((m * 60) * 1000);
 //   const secToMilli = s * 1000;
 //   newArr = [hoursToMilli, minToMilli, secToMilli]
 //   const initialValue = 0;
 //   const milliSum = newArr.reduce(
 //       (previousValue,currentValue) => previousValue + currentValue,
 //       initialValue
 //       
 //   );//
 //   return milliSum
 // } 
 // console.log(past(0,1,1))


 //8 kyu Convert a string to an array
 
 //function stringToArray(string){
    //newArr = string.split(' ')
    //return newArr
  
      // code code code//
  
  //}
  //console.log(stringToArray("Jack digs dogs"));


function noSpace(x){
  var result = ''
  for(var index = 0; index < x.length; index++){
    if(x[index] !== ' '){
      result += x[index];
    }
  }
  return result;
}

/// 8kyu
function setAlarm(employed, vacation){
  return employed === true && vacation === false
  
}


/// 8kyu Invert values
function invert(array) {
  const map2 = array.map( x => x * (-1) );
    
  
   return map2 ;
  
}