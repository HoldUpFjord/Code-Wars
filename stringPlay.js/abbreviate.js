function abbrevName(name){
    const nameUpper = name.toUpperCase()
    const fullName = nameUpper.split(' ')
    const firstInitial = fullName.shift().charAt(0) 
    const secondInitial = fullName.pop().charAt(0)
    return `${firstInitial}.${secondInitial}`
    
      // code away
  
  }