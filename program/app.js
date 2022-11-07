import { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl, addEntry, expirationEntryChecker} from '../program/functionality.js'
let button = document.getElementById('button')

button.addEventListener('click', ()=> {
    // select the input element and get its value
    let inMemoryLongUrl = protocolMender(getUrl())
    addEntry(inMemoryLongUrl)
    expirationEntryChecker()
    console.log(urlDataBase)
})

console.log()


/////// INTERNAL API




