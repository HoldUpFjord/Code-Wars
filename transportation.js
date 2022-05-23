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
