
function maxChar (str) {

    let occurenceStored = {};
    for (var i = 0; i < str.length; i++){
      if (occurenceStored[str[i]]){
        occurenceStored[str[i]] =            occurenceStored[str[i]]+1;
      } else{
          occurenceStored[str[i]]=1;
      }
    }
    return occurenceStored
  }
  