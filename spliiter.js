//Brute force
function getMiddle(s){
   //var for split string
   let splitString = s.split('')
    // if even
  if(s.length % 2 === 0){
    //return string.split  arr.length/2 and arr.length/2 + 1
    let result = []
    result.push(splitString[Math.floor(s.length/2) - 1])
    result.push(splitString[Math.floor(s.length/2)])
    return result.join('')
  }
   
   
    // if odd
  if(s.length % 2 != 0){
    return splitString[Math.floor(s.length/2)]
     return string.split(array.length/2)
  }
 
}


//In place if even
function getMiddle(s)
{
   //var for split string
   let splitString = s.split('')
    // if even
  if(s.length % 2 === 0){
    //return string.split  arr.length/2 and arr.length/2 + 1
    /*let result = []
    result.push(splitString[Math.floor(s.length/2) - 1])
    result.push(splitString[Math.floor(s.length/2)])
    return result.join('')*/
    let counter = 0
    for( i = s.length ; i >= counter; i--){
      if(counter === Math.floor(s.length/2) - 1){
        return s[counter] + s[i-1]
      } else{
        counter ++
      }
    }
  }
   
   
    // if odd
  if(s.length % 2 != 0){
    return splitString[Math.floor(s.length/2)]
     return string.split(array.length/2)
  }
}