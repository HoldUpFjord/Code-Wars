function inverted(str){
    let reversedStr = str.split(' ').reverse().join(' ')
    let transformedStr = reversedStr.split('').map(l => l ===  l.toUpperCase() ? l.toLowerCase() : l.toUpperCase() ).join('')
  
    return transformedStr
  }
  