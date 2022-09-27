function isValidWalk(walk) {
    
    //We need to count each elements in array. Walk.length
    // Two variables for each axis.NS: N = +1, S = -1. WE: W = -1, E = +1
    //for loop, conditionals for iterating cardinals
    
    //empty array to contain num values for each axis directions
    let directionsX =[]
    let directionsY = []
    //loop through walk array, increment based upon direction given
    for( i = 0; i < walk.length; i++){
      //empty increment variable
      let xAxis = 0;
      let yAxis = 0;
     
      if( walk[i] === 'n' ) {
        xAxis ++
      } else if( walk[i] === 's') {
        xAxis --
      } else if( walk[i] === 'w'){
        yAxis --
      }else if( walk[i] === 'e'){
        yAxis ++
        }
      //push transformed walked array to a empty arr as numbers
      directionsX.push(xAxis);
      directionsY.push(yAxis)
      
    }
    //sum array's as two seperate axis. Prevents error of inputting (n,w,n,w,n,w ) = 0 as n = 1 & w = -1. Computationally that would read as arriving at the correct place
    let countX = directionsX.reduce((a,b) => a+b)
    let countY = directionsY.reduce((a,b) => a+b)
    
    let blocks = walk.length
    //if the amount of blocks is 10, and you're back where you started on x-axis(= 0) and y-axis(= 0 ): true
    if(blocks === 10 && countX === 0 && countY === 0 ){
      return true
    } else {
      return false
    }
    
     
  }