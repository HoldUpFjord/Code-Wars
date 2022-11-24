function strCount(str, letter){  
    //code here
    let count = 0
    let split = str.split('')
    for( i = 0; i<split.length ; i++){
      if(split[i] == letter){
        count++
        }
      }
    return count
}