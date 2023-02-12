function addLength(str) {
    let arrayOfString = str.split(' ')
    
    for(i = 0 ; i < arrayOfString.length ; i++){
        arrayOfString[i] = arrayOfString[i] + ' ' + arrayOfString[i].length
      }
    return arrayOfString
    }