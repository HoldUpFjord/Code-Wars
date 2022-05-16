var number = function(busStops){
    var acc = 0;
    for(var i=0; i<busStops.length; i++) {
        //accumulater for i at position 0 aka 'a' in (a,b) array
        acc += busStops[i][0]
        // accumulator for i at position 1 aka 'b' in (a,b) array
        acc -= busStops[i][1]
    }
    return acc
}