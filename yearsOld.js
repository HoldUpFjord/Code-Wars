function twiceAsOld(dadYearsOld, sonYearsOld) {
 
    let targetAge = sonYearsOld * 2
    //conditional logic
    if(dadYearsOld > targetAge){
      return dadYearsOld - targetAge
    } else{
      return targetAge - dadYearsOld
    }
     
      
  }