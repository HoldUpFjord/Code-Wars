/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    //array of vowels
    let vowels = 'aeiouAEIOU'.split('');
    //array of input
    let result = s.split('');
    //pointer to iterate left -> right
    let left = 0;
    // pointer to iterate right -> left
    let right = result.length - 1;
  
    //while left pointer hasn't met right pointer
    while (left < right) {
        // 
      while (!vowels.includes(result[left]) && left < result.length) {
        left++;
         
      } 
      while (!vowels.includes(result[right]) && right >= 0) {
        right--;
         
      } 
        //if pointers haven't met
      if (left < right) {
          //pointer left and pointer right swap
        [result[left], result[right]] = [result[right], result[left]];
        right--;
        left++;
      }
    }

    return result.join('');
  
};