function opposite(number) {
    //your code here
     let sign =  Math.sign(number)
     //let opposite = sign*sign
     
     if(sign == -1 || sign == 0){
        return sign * number
    }else if( sign == 1){
    return number * -1
    }
  }