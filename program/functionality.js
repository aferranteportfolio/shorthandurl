
let urlDataBase = {
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley': {
        shortened: "AsdF84",
        lastAccessedAt: 1667930868332222222
    },
    secondLongUrl: {
        shortened: "<SHORTENED URL VALUE>",
        lastAccessedAt: 1667930868300
    }
}


/// Functions below are responsable for newEntrys into the DB
function getRandom() {
    let randomStringNumber = Math.random().toString(36)
    return randomStringNumber
}
function randomNumberSlicer(string = getRandom()) {
    return string.substring(2, 5)
}
function randomNumbersConcatenation(string) {
    string =randomNumberSlicer() + randomNumberSlicer()
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
    console.log(urlDataBase)
    return urlDataBase[longUrl] = entry
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function urlPostAPI(jsonBodyLongUrlObjectKey) {
    if (urlPostVerificator(jsonBodyLongUrlObjectKey)) {
        return JSON.stringify(urlDataBase[jsonBodyLongUrlObjectKey].shortened)
    } else {

        return addEntry(jsonBodyLongUrlObjectKey)
    }
}

function urlGetAPI(shortUrlQueryReq) {
    for (const key in urlDataBase) {
        if (Object.hasOwnProperty.call(urlDataBase, key)) {
            const element = urlDataBase[key];
            if (element.shortened === shortUrlQueryReq) {
                element.lastAccessedAt = Date.now()
                return  key
            }
        }
    }
}

function urlGetChecker(shortUrlQueryReq, res) {
    let longUrlAssigned = urlGetAPI(shortUrlQueryReq)
    if (longUrlAssigned) {
        res.redirect(longUrlAssigned)
    }
    else {
        res.redirect(('/home'))
    }
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Functions responsable for maintaning the database
function urlPostVerificator(jsonBodyLongUrlObjectKey) {
    if (Object.hasOwnProperty.call(urlDataBase, jsonBodyLongUrlObjectKey)) {
        urlDataBase[jsonBodyLongUrlObjectKey].lastAccessedAt = Date.now()
        return JSON.stringify(urlDataBase[jsonBodyLongUrlObjectKey].shortened)
    }
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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Front end Jquery Funcionts
















export { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl, genhash, addEntry, expirationEntryChecker, urlPostAPI, urlPostVerificator, urlGetAPI, urlGetChecker }





//   - 1.- Check if long url exists in-memory map by doing the following:
//     - a.- If exist, return <SHORTENED URL VALUE> and update lastAccessedAt with current time                 ===> DONE FUNC urlPostVerificator
//     - b.- Else, create a new record:                                                                         ===> DONE FUNC addEntry
//       - I.- <SHORTENED URL VALUE> is random 6-letter base64 enconded string                                  ===> DONE FUNC DatabasePutRequest
//       - II.- lastAccessedAt is the current timestamp                                                         ===> DONE FUNC AddEntry
//       - III.- <LONG URL KEY> is the long url supplied as input to the endpoint                               ===> DONE FUNC AddEntry
//     - c.- Scan all entries in the in-memory map and delete the entries that are more than 30 seconds old     ===> DONE  FUNC expirationEntryChecker



