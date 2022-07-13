function encrypt(text, n){
    //two seperate arrays to concate later
    let arrEven=[]
    let arrOdd=[]
    for(i =0;i < text.length;i++){
        //sort evens into arr
      if(text[i]%2 ==0){
        arrEven.push(i)
        //sort odds into arr
      } else if(text[i]%2 !== 0){
        arrOdd.push(i)
      }else return null
      
    }
    console.log(arrEven) 
    console.log(arrOdd)  
  
  }

  ///keep working on this one