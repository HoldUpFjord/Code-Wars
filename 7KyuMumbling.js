function accum(str) {
    var letters = str.split(' ');
    var result = [];
    for( let i = 0; i < letters.length; i++) {
        result.push(letters[i].toUppercase() + Array(i+1).join(letters[i].toLowercase()));
    }
    return result.join
}