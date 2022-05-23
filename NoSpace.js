function noSpace(x){
    var result = ''
    for(var index = 0; index < x.length; index++){
      if(x[index] !== ' '){
        result += x[index];
      }
    }
    return result;
  }