function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let numSheep = 0
    for( i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        numSheep++
      }
      
    }
    return numSheep
  }