
function countingValleys(s) {
    //setting a variable to track movement 
    let levels = 0
    //counter for each valley
    let valleys = 0 
    //split string 's' into an array of letters, then For Each letter in array
    s.split('').forEach(el =>{
      //a rule to quantify valleys. If levels is -1 and U = +1, this would equal zero aka a VALLEY
     if( levels === -1 && el === 'U') valleys +=1;
   // raises level 1 for every 'U'
     if( el === 'U') levels +=1;
      // decreases 1 for every 'D'
     if(el === "D") levels -=1;
     })
    //returns the total amount of valleys counted
    return valleys
    
  }    