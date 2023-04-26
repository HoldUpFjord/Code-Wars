//almost works
function isSortedAndHow(array) {
    //takes in array of ints
    //returns a string
      //one if array is asscending order, two if descending order, three if not ordered
    
    //if array equals array,sort ascending return one
     if(array === array.sort((a,b) => a - b)){
       return 'yes, ascending'
     } else if(array === array.sort((a,b) => b - a)){
      return 'yes, descending'
    } else {
      return 'no'
    }
  
  }
  