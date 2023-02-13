//Brute Force
function addLength(str) {
    let arrayOfString = str.split(' ')
    
    for(i = 0 ; i < arrayOfString.length ; i++){
        arrayOfString[i] = arrayOfString[i] + ' ' + arrayOfString[i].length
      }
    return arrayOfString
    }

//Mapped
function addLength(str) {

    let arr = str.split(' ')
    return arr.map( x => x + ' ' + x.length)
    
  }
  