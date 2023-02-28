function deleteNth(arr,n){
    
    let hashMap = {}
    
    for( i = 0; i < arr.length; i++) {
     if(hashMap[arr[i]] >= n ){
       arr.splice(i , 1)
       i--
       
     }else if(hashMap[arr[i]]){
        hashMap[arr[i]] ++
         
      } else {
        hashMap[arr[i]] = 1
      }
    
    }
    return arr
  }