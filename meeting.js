function meeting(s) {
  //str var
  let string  = 
  //uppercase input string and split at ';' character => seperates names
      s.toUpperCase().split(';')
        //for each string in array, reverses order to LASTNAME,FIRSTNAME
        .map(x => x.split(':').reverse().join(', '))
        //sorts
        .sort()
        //joins each string with neccesary paranthesis except first and last  
        .join(')(')
    //adds first and last paranthesis
  return '(' + string + ')' 
}