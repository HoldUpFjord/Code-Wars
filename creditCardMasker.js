function maskify(cc) {
    let result = []
    let maskLength = cc.length - 4
    for(i=0; i < cc.length; i++){
      if(i <maskLength){
        result.push('#')
      }else{
        result.push(cc[i])
      }
    }
    return result.join('')
  }