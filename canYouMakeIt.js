// ---will you make it assigntment 8kyu---//
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    var distancePossible = mpg * fuelLeft
  
    if (distancePossible >= distanceToPump){
      return true
    }else {
     return false
    }
  };



  /// Sentence smash 8kyu
  function smash (words) {
    var a = words.join(" ")
     return a
  }; 


  /// Grade Book 8Kyu
  function getGrade (s1, s2, s3) {
    // Code here
     var average = (s1+s2+s3) / 3
    if (average >= 90){
      return 'A'
    }else if(average >= 80 && average < 90){
      return 'B'
    }else if (average >= 70 && average < 80){
      return 'C'
    }else if (average >= 60 && average < 70){
      return 'D'
    }else  {
      return 'F'
      };
    }
  
  ///Transportaton on Vacatation 8kyu
  function rentalCarCost(d) {
    // Your solution here
    if(d < 3){
      return d*40
    }else if (d < 7){
      return (d*40) - 20
    }else{
      return (d*40)-50
    }
  }


  // Summing a numbers digits 7kyu
  function sumDigits(number) {
    let arr = Math.abs(number).toString().split('')
    let sum = 0
    
    for(let i = 0; i < arr.length; i++)
      sum += +arr[i]
    return sum
  }
  
  