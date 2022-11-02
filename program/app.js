import { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl} from '../program/functionality.js'

let button = document.getElementById('button')

button.addEventListener('click', ()=> {
    // select the input element and get its value
    protocolMender(getUrl())
    console.log(window.location)
})