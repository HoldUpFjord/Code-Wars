var maxProfit = function(prices) {
    //set minPrice variabe to infinty
    let minPrice = Infinity 
    //set max price to 0
    let maxProfit = 0
    // for loop
    for(i = 0; i <= prices.length; i++){
          //conditional logic
         //if prices[i] < minPrice 
         if(prices[i] < minPrice){
               //minPrice = prices[i]
               minPrice = prices[i]
         } else if(prices[i] - minPrice > maxProfit) {
             maxProfit = prices[i] - minPrice
         }
         
    }
  
   return maxProfit
 };