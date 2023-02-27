function arrayDiff(a, b) {
//failed  method solution
    //return a.filter(i => i !b.includes(i))
    
//brute force
function arrayDiff(a, b) {
  if(b.length==0 || a.length==0)
    return a;
  for(let i =0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
      if(a[i]==b[j]){
        a.splice(i,1);
        i--;
      }
    }
  }
  return a;
 } 
}