function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
 
  
    let currentDateObj = new Date(currentDate)
    let expireDateObj = new Date(expirationDate)
    
    let millisecExpiryDate = expireDateObj.getTime()
    let millisecCurrentDate = currentDateObj.getTime()
    
    
    if(enteredCode === correctCode && millisecCurrentDate <= millisecExpiryDate){
      return true
      }else return false
    return millisecCurrentDate
    
    
  }