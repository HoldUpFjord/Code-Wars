var number=function(array){
    //your awesome code here
    // Takin in an arr of str's
    //returning a an arr which has each k/v pair as a str
      
      //conditonal for if array is empty
    if(!array.length){
      return array;
    } else {
      //create object
      let count = {};
      let result = [];
      //for ele of arr loop
      for(const letter of array){
      //if obj[arr] exists +1 or =1 ternary
        count[letter] = count[letter] ? count[ele]+1 : 1;
        result.push(count[letter])
      }
      
      return result
     
        
      
     }
  }