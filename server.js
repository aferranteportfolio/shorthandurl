import  express  from 'express'
import path from 'path'
import { json } from 'stream/consumers'
import bodyParser from 'body-parser'
import  url  from 'url'

const app = express()
const PORT = 8943
const __dirname = path.resolve()
const jsonParser = bodyParser.json()




import { randomNumbersConcatenation, randomNumberSlicer, getRandom, protocolVerification, protocolMender, getUrl, addEntry, expirationEntryChecker, urlPostAPI, urlPostVerificator, urlGetAPI, urlGetChecker} from './program/functionality.js'
import { urlDataBase } from './program/database.js'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, "program")))





function jsonData(req) {
    let jsonObjectCreator = {
        longUrl : req.body.longUrl
    }
    return jsonObjectCreator
}





app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/program/index.html'))
})



// - Backend will expose a GET /<SHORTENED URL> endpoint, when accessed it will perform a lookup on the in-memory database
//   - 1.- Check if shortened version exists
//     - a.- If exists, return a moved permantently http code (google it up) to the long url, it must redirect the browser. It must also refresh lastAccessedAt with the current time
//     - b.- Else, will return a not found http code (also google it up), it must show a clear not found error

app.get('/shortUrl/:id', function(req, res){
    const id = req.params.id;
    urlGetChecker(id, res)    
  });






app.put('/shorten', (req, res)=>{
    let jsonRecived = jsonData(req)
    let result = urlPostAPI(jsonRecived)
    if (result === true){return res.sendStatus(201)}
    else return res.send(result)
})






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