function getRandom() {
    let randomStringNumber = Math.random().toString(32)
    return randomStringNumber
}

function randomNumberSlicer(string) {
    string = getRandom()
    return string.substring(2, 5)
}

function randomNumbersConcatenation(string) {
    string = randomNumberSlicer() + randomNumberSlicer()
    return string
}


function getUrl() {
    let inputBox = document.getElementById('inputbox').value
    return inputBox
}



function protocolVerification(string) {
    let protocolVerification = string.startsWith("http://") || string.startsWith("https://") || string.startsWith("ftp://")
    return protocolVerification
}

function protocolMender() {
    let url = getUrl()
    if (url) {
        if (!protocolVerification(url)) {
            let newurl = "http://" + url
            console.log('added http:// to the link')
            return newurl
        } else
            console.log('the Url submitted has the protocol')
        return url
    }
    else alert('add a url to check')
    

}



export { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl }





// function geturl(){     var url = document.getElementById(“urlinput”).value;
// if(!protocol_ok){         newurl = “http://”+url;         return newurl;     }else{         return url;     }
