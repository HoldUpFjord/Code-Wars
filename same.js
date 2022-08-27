function comp(a1, a2){
    if (a1==null || a2==null) return false;
    a1=a1.sort(function(a,b){return b<a});
    a2=a2.sort(function(a,b){return b<a});
    for (var i in a1) if (Math.pow(a1[i],2)!=a2[i]) return false;
    return true;
  
  }