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

//- The input will return the same shortened url if submitted/accessed multiple times at least once during the past 30 seconds
// - The output or shortened url, must always redirect to the same website if generated or accessed during the past 30 seconds
// - The not found page, must be shown if the user attempts to access an unknown/expired shortened url



//Database API section

function addEntry(longUrl) {
let entry = {
    "shortened" : randomNumbersConcatenation(),
        "lastAccessedAt" : newDateGenerator(Date)
}
urlDataBase[longUrl] = entry

    console.log(urlDataBase)
}

function newDateGenerator(Date) {
    let date = new Date()
    return date
}

// Backend will expose a PUT /shorten endpoint where the json body is { "longUrl": "<LONG URL FROM INPUT BOX>" }
function DatabasePutRequest(jsonBodyLongUrlObjectKey) {
    
}
//   - 1.- Check if long url exists in-memory map by doing the following:
//     - a.- If exist, return <SHORTENED URL VALUE> and update lastAccessedAt with current time 
//     - b.- Else, create a new record:
//       - I.- <SHORTENED URL VALUE> is random 6-letter base64 enconded string
//       - II.- lastAccessedAt is the current timestamp
//       - III.- <LONG URL KEY> is the long url supplied as input to the endpoint
//     - c.- Scan all entries in the in-memory map and delete the entries that are more than 30 seconds old

// - Backend will expose a GET /<SHORTENED URL> endpoint, when accessed it will perform a lookup on the in-memory database
//   - 1.- Check if shortened version exists
//     - a.- If exists, return a moved permantently http code (google it up) to the long url, it must redirect the browser. It must also refresh lastAccessedAt with the current time
//     - b.- Else, will return a not found http code (also google it up), it must show a clear not found error






export { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl,  genhash, addEntry , newDateGenerator}




