// works
function isSortedAndHow(array) {
    //takes in array of ints
    //returns a string
      //one if array is asscending order, two if descending order, three if not ordered
    let ascending = array.slice().sort((a,b) => a-b)
    let descending = array.slice().sort((a,b) => b-a)
    //if array equals array,sort ascending return one
  
     if(array === ascending){
       return 'yes, ascending'
     }  else if(array === descending){
      return 'yes, descending'
    } else {
      return 'no'
    }
  
  }

  //es6 spread syntax
  function isSortedAndHow(array) {
    //takes in array of ints
    //returns a string
      //one if array is asscending order, two if descending order, three if not ordered
    let ascending = [...array].sort((a,b) => a-b)
    let descending = [...array].sort((a,b) => b-a)
  console.log(ascending)
     if(array === ascending){
       return 'yes, ascending'
     } else if(array === descending){
      return 'yes, descending'
    } else {
      return 'no'
    }
  
  }

  // filter arrow function
  const isSortedAndHow = array => {
    let ascending = array.filter((e, i, a) => e > a[i+1]).length == 0
    let descending = array.filter((e, i, a) => e < a[i+1]).length == 0
    
    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
  }