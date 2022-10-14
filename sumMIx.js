let given = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
function sumMix(arr){
  let resultArr = []

  // for loop
    //conditional logic
      // if arr[i] type = string, parse arr[i] as int
      //push all results to new result arr
  for(i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'string'){
      resultArr.push(parseInt(arr[i]))
    }else{
      resultArr.push(arr[i])
    }
  } //return summed result arr 
  console.log(resultArr.reduce((a,b) => a+b))
 
}
