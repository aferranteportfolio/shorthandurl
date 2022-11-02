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

function protocolMender(string) {
    if (string) {
        if (!protocolVerification(string)) {
            let newurl = "http://" + string
            console.log(`added http:// to the link, ${newurl}`)
            return newurl
        } else
            console.log('the Url submitted has the protocol')
        return string
    }
    else alert('add a url to check')
}

function genhash(){    if (window.location.hash == ''){        window.location.hash = getrandom();    }}






export { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl,  genhash}




