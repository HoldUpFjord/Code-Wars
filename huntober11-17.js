function average (arr){
    //get avg length -> rounded
    const avgLength = Math.round(arr.join('').length / arr.length)
    // create new arr using avgLength amount
      //repeat method ***
    return arr.map(str => str[0].repeat(avgLength))
  }