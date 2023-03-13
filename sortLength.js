// Method solution
function sortLength(array){
    return array.sort((a,b) => a.length - b.length)
}


//bubble sort
function sortLength(array){
    for(i = 0 ; i < array.length - 1   ; i++){
        for(j = 0; j < array.length - i - 1 ; j++){
        if(array[j].length > array[j+1].length){
            const temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
        }
    }
    return array
}

//quick sort
function sortByLength (array) {
    if(array.length <= 1){
      return array
    }
   const pivot = array[0]
   const left = []
   const right = []
   
   for( i = 1; i < array.length; i++){
     if (array[i].length < pivot.length){
       left.push(array[i])
     } else {
       right.push(array[i])
     }
     
   }
   return sortByLength(left).concat(pivot, sortByLength(right))
};