function nameShuffler(str){
    //Shuffle It
    let result = []
    let split =  str.split(' ')
    for( i = split.length-1; i >= 0; i--){
      result.push(split[i])
    }
    return result.join(' ')
  }