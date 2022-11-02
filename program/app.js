import {hello , randomNumbersConcatenation, randomNumberSlicer, getRandom} from '../program/functionality.js'

let button = document.getElementById('button')
button.addEventListener('click', ()=> {
    
    let test = randomNumbersConcatenation()
    console.log(test)
})