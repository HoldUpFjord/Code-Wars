function getSize(width, height, depth) {
    return [2*((depth*width)+(depth*height)+(height*width)) ,width * height * depth]
  }