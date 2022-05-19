function isPalindrome(x) {
    // your code here
    const lower = x.toLowerCase()
    const arrayed = x.split('');
    const newArr = arrayed.reverse();
    const together = newArr.join('')
    
    const togLower = together.toLowerCase()
    
    if(togLower == lower){
      return true
    }else return false