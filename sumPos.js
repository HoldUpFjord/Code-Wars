function positiveSum(arr) {
    let posArr = arr.filter(x => x > 0)
    const initialValue = 0
    const finalNum = posArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
    );
    return finalNum
  }
  