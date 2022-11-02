function getRandom(){
    let randomStringNumber = Math.random().toString(32)
    return randomStringNumber
}

function randomNumberSlicer(string){
    string = getRandom()
    return string.substring(2,5)
}

function randomNumbersConcatenation(string){
    string = randomNumberSlicer() + randomNumberSlicer()
    return string
}


export { randomNumbersConcatenation, randomNumberSlicer, getRandom}

