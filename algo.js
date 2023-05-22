

function domainName(url) {
    for(let i = 0; i < url.length; i++){
        if(url[0] === 'h'){
            let parsedUrl = new URL(url);
            parsedUrl = parsedUrl.hostname.replace('www.', '').replace('.com', '')
            return parsedUrl
        }else {
            const reWWW = new RegExp("www.")
            const reCom = new RegExp(".com")
            const foundWWW = url.replace(reWWW, "").replace(reCom, "")
            return foundWWW
        }
    }

    let parsedUrl = new URL(url);
    console.log(parsedUrl);
    parsedUrl = parsedUrl.hostname.replace('www.', '').replace('.com', '')
    return parsedUrl
}

console.log(domainName("https://example.com/path"));  
console.log(domainName("https://www.example.com/page"));  
console.log(domainName("http://example.com"));  
console.log(domainName("http://youtube.com"))
console.log(domainName("http://google.com"))
console.log(domainName("www.facbook.com"))
console.log(domainName("www.xakep.ru"));