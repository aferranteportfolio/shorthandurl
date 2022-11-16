
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
}
function genhash() { if (window.location.hash == '') { window.location.hash = getrandom(); } }



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Functions responsable for maintaning the database


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Front end Jquery Funcionts
















export { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl, genhash}





//   - 1.- Check if long url exists in-memory map by doing the following:
//     - a.- If exist, return <SHORTENED URL VALUE> and update lastAccessedAt with current time                 ===> DONE FUNC urlPostVerificator
//     - b.- Else, create a new record:                                                                         ===> DONE FUNC addEntry
//       - I.- <SHORTENED URL VALUE> is random 6-letter base64 enconded string                                  ===> DONE FUNC DatabasePutRequest
//       - II.- lastAccessedAt is the current timestamp                                                         ===> DONE FUNC AddEntry
//       - III.- <LONG URL KEY> is the long url supplied as input to the endpoint                               ===> DONE FUNC AddEntry
//     - c.- Scan all entries in the in-memory map and delete the entries that are more than 30 seconds old     ===> DONE  FUNC expirationEntryChecker



