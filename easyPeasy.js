function updateLight(current) {
  
    //your code here!
    if(current === 'green'){
      return 'yellow'
    } else if( current === 'yellow'){
      return 'red'
    } else if( current === 'red'){
      return 'green'
    }
  
  }

  //ternary
  function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }