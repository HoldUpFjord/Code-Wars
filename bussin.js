function enough(cap, on, wait) {
    // your code here
    let people = on + wait
    if(people > cap){
      return people - cap
    } else return 0
  }