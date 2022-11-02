function getRandom() {
    let randomStringNumber = Math.random().toString(36)
    return randomStringNumber
}

function randomNumberSlicer(string) {
    string = getRandom()
    return string.substring(2, 5)
}

function randomNumbersConcatenation(string) {
    string = 'http://localhost:8943/' + randomNumberSlicer() + randomNumberSlicer()
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





//Database API section

function addEntry(longUrl) {
 let jsonDataToBePushed = `${longUrl}  ={
        "shortened" : ${randomNumbersConcatenation()},
        "lastAccessedAt" : ${newDateGenerator(Date)}
    }`
    console.log(jsonDataToBePushed)
    urlDataBase.push(jsonDataToBePushed)
}

function newDateGenerator(Date) {
    let date = new Date()
    return date
}






export { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl,  genhash, addEntry , newDateGenerator}




