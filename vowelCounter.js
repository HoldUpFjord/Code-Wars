// Write a function that, given a string, returns the number of occurences of vowels inside that string.

//Given "Power", should return 2
// Given "Instantaneous", should return 5
// Given a "Pffff", should return 0

//THE HOW

// declare variable vowelCount = 0
const Vowels = ["a", "e", "i", "o", "u"]
function numberOfVowels (text){
  

let vowelCount = 0;

//for loop
for( letter of text.toLowerCase() ){
  //conditional logic
  if (Vowels.includes(letter)){
    // for letters in/of string, +1 if vowel 
    vowelCount ++
    }
  }
  console.log(vowelCount)
}
