function getCount(str) {
    let vowelsCount = 0;
    for(let i = 0; i< str.length; i++){
      if(str[i] ==='a' ||str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u'){
        return str[i]
        }
      
    }
    // enter your magic here
    
    return vowelsCount;
  }


function missingVowel(str){
  //list all vowels => loop through letters, and check if vowel is missing in str
  let vowels = 'aeiou'
  for(i = 0 ; i<vowels.length; i++){
    if (str.indexOf(vowels[i]) === -1){
      return i
    }
  }
  
}
