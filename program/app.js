import { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender} from '../program/functionality.js'

let button = document.getElementById('button')
button.addEventListener('click', ()=> {
    let test = randomNumbersConcatenation()
    protocolMender()
})