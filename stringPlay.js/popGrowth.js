function nbYear(p0, percent, aug, p, i=1){
    const newPercent = percent / 100
    const formula = parseInt(p0 + p0 * newPercent + aug);
    if (formula >= p)
        return i
    return nbYear(formula, percent, aug, p , i+1)
    
}