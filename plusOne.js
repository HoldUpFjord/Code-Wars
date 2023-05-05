var plusOne = function(digits) {
    // if arrays are 9/99/999 need to return [1,0] / [1,0,0] etc

    //if last digit = 9
        //for loop
            //if first index
                //-8
                //else index - 9
    if(digits === [9]){
        return [1,0]
    } else if( digits === [9,9]){
        return [1,0,0]
    }

    //otherwise, find the last index of the arr, increment that index +1
    //digits[digits.length] ++
    let lastIndex = digits[digits.length-1] 
    digits.splice(digits.length-1, 1, lastIndex + 1)
    return digits
    //return digits
};