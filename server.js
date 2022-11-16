import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
const PORT = 8943
const __dirname = path.resolve()
const jsonParser = bodyParser.json()


import { urlGetChecker, urlPostAPI, expirationEntryChecker } from './backend/backendfunctions.js'
import { protocolMender } from './program/functionality.js'
import { urlDataBase } from './database.js'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('urlDataBase', express.static(__dirname + './urlDataBase.js'))

app.use(express.static(path.join(__dirname, "program")))


function postAddApi(longUrlPosted) {
    {
        let inMemoryLongUrl = protocolMender(longUrlPosted)
        expirationEntryChecker()
        return urlPostAPI(inMemoryLongUrl)
        
    }
}


function jsonData(req) {
    let jsonObjectCreator = {
        longUrl: req.body.longUrl
    }
    return jsonObjectCreator
}

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/program/index.html'))
})

app.post('/postUrl', (req, res) => {
    let longUrl = req.body.innerHtml
    if (longUrl === '') {
        return res.sendStatus(422)
    } else {
    let newEntry = postAddApi(longUrl)
    console.log(urlDataBase)
    res.send(newEntry)
    }
    
})


app.get('/shortUrl/:id', function (req, res) {
    const id = req.params.id;
    res.redirect(urlGetChecker(id))
});


app.put('/shorten', (req, res) => {
    let jsonRecived = jsonData(req)
    let result = urlPostAPI(jsonRecived)
    if (result === true) { return res.sendStatus(201) }
    else return res.send('HeaderTestMessage')
})

app.get('/HeMan', (req, res) => {

    res.sendFile(__dirname + '/program/giphy.webp')
})

app.get('/I_DO_NOT_EXIST', (req, res) => {

    res.sendFile(__dirname + '/program/error404.webp')
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