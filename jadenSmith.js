String.prototype.toJadenCase = function (str) {
    //...
    return this.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }; 
  