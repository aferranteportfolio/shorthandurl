//API section
function addEntry(longUrl) {
    longUrl ={
        "shortened" : randomNumbersConcatenation(),
        "lastAccessedAt" : timerTracker(Date)
    }
    database.push(longUrl)
}

function timerTracker(Date) {
    let date = new Date()
    return date
}


//Database section
let database = {
    "<LONG URL KEY>": {
        "shortened": "<SHORTENED URL VALUE>",
        "lastAccessedAt": "<TIME URL LAST ACCESSED>"
    },



    "<LONG URL KEY>": {
        "shortened": "<SHORTENED URL VALUE>",
        "lastAccessedAt": "<TIME URL LAST ACCESSED>"
    }
}


export { timerTracker, addEntry}
