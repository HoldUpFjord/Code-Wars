function isTriangle(a,b,c) {
    var sides = [a, b, c].sort();
    return (sides[0] + sides[1] > sides[2]);
  }