import  express  from 'express'
import path from 'path'
import { json } from 'stream/consumers'
import bodyParser from 'body-parser'
const app = express()
const PORT = 8943
const __dirname = path.resolve()
const jsonParser = bodyParser.json()

import { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl, addEntry, expirationEntryChecker, urlPostAPI, urlPostVerificator} from './program/functionality.js'
import { urlDataBase } from './program/database.js'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, "program")))

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/program/index.html'))
})
function jsonData(req) {
    let jsonObjectCreator = {
        longUrl : req.body.longUrl
    }
    return jsonObjectCreator
}


app.put('/shorten', (req, res)=>{
    let jsonRecived = jsonData(req)
        // console.log(memoryStorageJsonData)
    // let inMemoryLongUrl = protocolMender(memoryStorageJsonData)
    // urlPostAPI(inMemoryLongUrl)
    // expirationEntryChecker()

    console.log(jsonRecived)

    res.send(`this is what you sent ${req.body.longUrl}`)

})




// Backend will expose a PUT /shorten endpoint where the json body is { "longUrl": "<LONG URL FROM INPUT BOX>" }



// - Frontend will display a single input box, the placeholder is 'Insert your long url here...'
// - Frontend will display a green button with text 'Shorten!', the button will have a bootstrap glyphicon to the right side of the text
// - Frontend will use bootstrap
// - Frontend will perform http requests with JQuery, NO VANILLA JS
// - Frontend when shorten button is clicked, it will perform a PUT request to the /shorten endpoint and display the shortened url returned from the backend


// When a user navigates to http://localhost:8943/AsdF84 it will be redirected to https://www.youtube.com/watch?v=SlYcnGW0NEg&list=RDSlYcnGW0NEg&start_radio=1&ab_channel=TitoSakuraba
// If a user navigates to http://localhost:8943/I_DO_NOT_EXIST then the user will be presented with a clear not found message
// If a user navigates to http://localhost:8943/HeMan then the user will be presented with a HeMan image, one from https://giphy.com/explore/he-man-and-the-masters-of-the-universe

app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`)
})