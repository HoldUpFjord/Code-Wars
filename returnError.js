function printerError(s) {
    // your code
  let errorCount = 0
  for(i=0;i<s.length; i++){
    if(s[i] > 'm'){
      errorCount++
    }
  
  }
  return errorCount + '/' + s.length
}
