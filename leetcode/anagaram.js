// write the function isAnagram
var isAnagram = function(test, original) {
    //   //brute force
    //     //sort string and compare if they sortedString A and sortedString B are equal
    //   let sortedTest = test.toLowerCase().split('').sort()
    //   let sortedOG = original.toLowerCase().split('').sort()
      
    //   console.log(sortedTest.join(''), sortedOG.join(''))
      
    //   return sortedTest.join('') == sortedOG.join('')
      
      //Hashmap
        // lowercase both strings
          let testLower = test.toLowerCase()
          let originalLower = original.toLowerCase()
    
         // Break-case: if string lengths != eachother
          if(testLower.length !== originalLower.length){
            return false
          }
    
        // create new map
        let charCount = new Map()
        
        for( const char of testLower){
          charCount.set(char, (charCount.get(char) || 0) +1 )
        }
        
      for (const char of originalLower){
       if (!charCount.has(char)) {
          // If a character is not present in the first string, they are not anagrams
          return false;
        }
        charCount.set(char, (charCount.get(char) -1 ))
        if (charCount.get(char) === 0){
          charCount.delete(char)
        }
        
        
      }
          
      return charCount.size === 0
    };