function domainParser(url){
    console.log(url.replace('https://', '').replace('www.','').replace('http://', '').split('.')[0])
  }
  