function domainName(url){
    const reHTTP = new RegExp("http://")
    const reWWW = new RegExp("www.")
    const reCom = new RegExp(".com")
    const foundHTTP = url.replace(reHTTP, "").replace(reCom, "")
    const foundWWW = url.replace(reWWW, "").replace(reCom, "")
    
    if(foundHTTP){
        return foundHTTP
    }else if (foundWWW){
        return foundWWW
    }
}

console.log(domainName('http://google.com'))
console.log(domainName('www.facbook.com'))