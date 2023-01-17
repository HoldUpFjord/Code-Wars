//recursive
function factorial(n){
    //base case
    if(n < 2){
        return 1
    } // recursing 
    return n * factorial(n-1)
}