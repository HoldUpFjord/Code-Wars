function evenNumbers(array, number) {
    const target =  array.filter(num => num % 2 == 0).reverse().slice(0,number)
    return target.reverse()
   }