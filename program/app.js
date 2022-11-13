import { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl, addEntry, expirationEntryChecker, urlPostAPI, urlPostVerificator} from '/functionality.js'

$('button').on('click', ()=> {
    // select the input element and get its value
    let inMemoryLongUrl = protocolMender(getUrl())
    urlPostAPI(inMemoryLongUrl)
    expirationEntryChecker()
    let string = urlPostAPI(inMemoryLongUrl)
    shortEndUrlFrontEnd(string.replaceAll('"', ''))
})



function shortEndUrlFrontEnd(testDiplsayText){
    let h1 = '<h1>'
    $('body').append(h1)
    $('h1').html(`This is your shortened URL = http://localhost:8943/${testDiplsayText}`)
}






/////// INTERNAL API




