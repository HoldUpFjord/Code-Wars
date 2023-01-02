//Efficient solution
var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};



//brute force

    function capitals(str){
        //str.split
        word = word.split('')
           let length = word.length -1
           let penUltIndex = word.length - 2
        //nested for loops
          if(word.length === 1 && word[0] === word[0].toUpperCase()){
            return true
          }else if (word[length] === word[length].toUpperCase() && word[penUltIndex] === word[penUltIndex].toLowerCase() ){
            return false
        }
        for( i = 0; i < word.length; i++){
          // if a letter is uppercase, and it its index ! 0
          for( j = i+1; j < word.length -1; j++){
             //conditional logic
            
            if(word[j] ===  word[j].toUpperCase()){
              console.log(word[j+1])
              //check if the index i-1 & i+1 are uppercase
              if(word[j-1] ===  word[j-1].toLowerCase() || word[j+1] ===  word[j+1].toLowerCase()){
                //if not, return false 
                return false
              } 
              
               
            }
          }
        }
        

        



           
              
      
                 
      
        //else return true
        return true
      };
      