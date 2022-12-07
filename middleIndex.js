function middleNum(arr){
    //sort arr, grab middle num
    //find index of num^ from OG array
    return arr.indexOf([...arr].sort((a,b) => a-b)[1])
  }