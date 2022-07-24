function feast(beast, dish) {
    return beast.first() + beast.last() == dish.first() + dish.last();
  }
  
  String.prototype.first = function() {
    return this[0];
  }
  
  String.prototype.last = function() {
    return this[this.length-1];
  }