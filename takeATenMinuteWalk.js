function isValidWalk(walk) {
    //insert brilliant code here
    //We need to count each elements in array. Walk.length
    // Two variables for each axis.NS: N = +1, S = -1. WE: W = -1, E = + 
    //for loop, conditionals for iterating nsew
    
    //empty array to contain num values for cardinal directions
    let directions =[]
    //loop through walk array, icrement based upon direction given
    for( i = 0; i < walk.length; i++){
      //empty increment variable
      let cardinals = 0;
     
      if( walk[i] === 'n' || walk[i] === 'e') {
        cardinals ++
      } else if( walk[i] === 's' || walk[i] === 'w' ) {
        cardinals --
      } 
      //push transformed walked array to a empty arr as numbers
      directions.push(cardinals)
      
    }
    //sum array
    let count = directions.reduce((a,b) => a+b)
    
    let blocks = walk.length
    //if the amount of blocks is 10, and you're back where you started: count being 0
    if(blocks === 10 && count === 0){
      return true
    } else {
      return false
    }
    
     
  }