function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++){
      word = word + str[i] + str[i];
    };
    return word;
  };