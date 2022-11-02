function getRandom() {
    let randomStringNumber = Math.random().toString(32)
    return randomStringNumber
}

function randomNumberSlicer(string) {
    string = getRandom()
    return string.substring(2, 5)
}

function randomNumbersConcatenation(string) {
    string = randomNumberSlicer() + randomNumberSlicer()
    
    return string
}


function getUrl() {
    let inputBox = document.getElementById('inputbox').value
    return inputBox
}



function protocolVerification(string) {
    string = 'https://www.youtube.com/watch?v=SlYcnGW0NEg&list=RDSlYcnGW0NEg&start_radio=1&ab_channel=TitoSakuraba'
    let protocolVerification = string.startsWith("http://") || string.startsWith("https://") || string.startsWith("ftp://")
    return protocolVerification
}

function protocolMender(){
    let newurl
    if (!protocolVerification()){
        newurl = "http://"+protocolVerification()
       
        return newurl
       
    } else
    console.log('the Url submitted has the protocol')
    return newurl

}



export { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender }





// function geturl(){     var url = document.getElementById(“urlinput”).value;
// if(!protocol_ok){         newurl = “http://”+url;         return newurl;     }else{         return url;     }
