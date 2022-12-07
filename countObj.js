function countChar(str){
    //create object
    let countObj = {}
    for(const c of str){
      if(countObj[c]){
        countObj[c] ++
      }else {
        countObj[c] = 1
      }
    }
    //increment by 1
    return countObj
  }