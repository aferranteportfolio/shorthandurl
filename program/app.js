import { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl, addEntry, expirationEntryChecker, DatabasePutRequest} from '/functionality.js'
import { urlDataBase } from '/database.js'


let button = document.getElementById('button')

button.addEventListener('click', ()=> {
    // select the input element and get its value
    let inMemoryLongUrl = protocolMender(getUrl())
    DatabasePutRequest(inMemoryLongUrl)
    expirationEntryChecker()
    console.log(urlDataBase)
})






/////// INTERNAL API




