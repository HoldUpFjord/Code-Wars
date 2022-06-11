function sayHello( name, city, state ) {
    const joinName = name.join(' ')
    const sentence =  `Hello, ${joinName}! Welcome to ${city}, ${state}!`
    return  sentence
  }