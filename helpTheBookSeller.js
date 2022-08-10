function stockList(listOfArt, listOfCat) {
    if (listOfArt.length === 0 || listOfCat === 0) {
      return ''
    }
    
    const catCounts = {}
    
    listOfArt.forEach(entry => {
      const [code, count] = entry.split(' ')
      const category = code[0]
      catCounts[category] = catCounts[category] || 0
      catCounts[category] += Number(count)
    })
    
    
    const catDescription = listOfCat.map(category => {
      return `(${category} : ${catCounts[category] || 0})` 
    })
    
    return catDescription.join(' - ')
  }