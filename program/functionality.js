import { urlDataBase } from '/database.js'

/// Functions below are responsable for newEntrys into the DB
function getRandom() {
    let randomStringNumber = Math.random().toString(36)
    return randomStringNumber
}
function randomNumberSlicer(string = getRandom()) {
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
function protocolVerification(UrlString) {
    return UrlString.startsWith("http://") || UrlString.startsWith("https://") || UrlString.startsWith("ftp://")
}
function protocolMender(UrlString) {
    if (UrlString) {
        if (!protocolVerification(UrlString)) {
            let newurl = "http://" + UrlString
            console.log(`added http:// to the link, ${newurl}`)
            return newurl
        } else
            console.log('the Url submitted has the protocol')
        return UrlString
    }
    else alert('add a url to check')
}
function genhash() { if (window.location.hash == '') { window.location.hash = getrandom(); } }
function addEntry(longUrl) {
    let entry = {
        "shortened": randomNumbersConcatenation(),
        "lastAccessedAt": Date.now()
    }
    urlDataBase[longUrl] = entry
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//- The input will return the same shortened url if submitted/accessed multiple times at least once during the past 30 seconds
// - The output or shortened url, must always redirect to the same website if generated or accessed during the past 30 seconds
// - The not found page, must be shown if the user attempts to access an unknown/expired shortened url



//Database API section



// Backend will expose a PUT /shorten endpoint where the json body is { "longUrl": "<LONG URL FROM INPUT BOX>" }
function DatabasePutRequest(jsonBodyLongUrlObjectKey) {
    debugger
    if (Object.hasOwnProperty.call(urlDataBase, jsonBodyLongUrlObjectKey)) {
        return urlDataBase.jsonBodyLongUrlObjectKey.shortened && urlDataBase.jsonBodyLongUrlObjectKey.lastAccessedAt
    } else addEntry(jsonBodyLongUrlObjectKey)
}


function expirationEntryChecker(date) {
    for (const key in urlDataBase) {
        if (Object.hasOwnProperty.call(urlDataBase, key)) {
            const element = urlDataBase[key];
            if (Date.now() - element.lastAccessedAt > 30000) {
                delete urlDataBase[key]
            }
        }
    }
}


//   - 1.- Check if long url exists in-memory map by doing the following:
//     - a.- If exist, return <SHORTENED URL VALUE> and update lastAccessedAt with current time    ======> DONE FUNC DatabasePutRequest
//     - b.- Else, create a new record:                                                             ======> DONE FUNC DatabasePutRequest
//       - I.- <SHORTENED URL VALUE> is random 6-letter base64 enconded string                      ======> DONE FUNC DatabasePutRequest
//       - II.- lastAccessedAt is the current timestamp
//       - III.- <LONG URL KEY> is the long url supplied as input to the endpoint
//     - c.- Scan all entries in the in-memory map and delete the entries that are more than 30 seconds old     ===> DONE  FUNC expirationEntryChecker




// - Backend will expose a GET /<SHORTENED URL> endpoint, when accessed it will perform a lookup on the in-memory database
//   - 1.- Check if shortened version exists
//     - a.- If exists, return a moved permantently http code (google it up) to the long url, it must redirect the browser. It must also refresh lastAccessedAt with the current time
//     - b.- Else, will return a not found http code (also google it up), it must show a clear not found error






export { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl, genhash, addEntry, expirationEntryChecker, DatabasePutRequest }




