// brute force
function findonacci(n){
    // starts from 0 & 1
      //first two index
    let arr = [0,1]
    //start for loop @ index 2
    for(i = 2 ; i <= n ; i++){
        //
     arr[i] = arr[i-1] + arr[i-2]
      }
      return arr[n]
 
    }