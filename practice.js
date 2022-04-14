function XO(str) {
    //code here
  let xs = 0;
  let os = 0;
  for( i = 0 ; i < str.length; i++){
    
    let newStr = str.toLowerCase
    if (newStr[i] === 'x'){
     console.log(xs++);
    }else if(newStr[i] === 'o'){
      console.log( os++);
    }else break;
    
  if(xs == os) {
    return true
  }else if (xs == 0 && os == 0){
    return true
  }else return false
    
  }
}
XO('xxOo');