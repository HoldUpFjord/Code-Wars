var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
} 