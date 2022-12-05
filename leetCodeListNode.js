
function middleNode(arr){
    let result = []
    let nodeLength = arr.length
    for(i = nodeLength / 2; i <= nodeLength; i++){
      result.push(Math.round(i))
      
    }
    // conditional 
        if(result.length % 2 != 0){
           return result
        } else if( result.length % 2 == 0){
          return result.slice(1)
        }
           
  
        //else if even length
          // return result slice(0)
  
  }
  