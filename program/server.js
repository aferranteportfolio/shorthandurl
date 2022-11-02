const express = require('express')
const path = require('path')
const app = express()
const PORT = 8943

// import {randomNumbersConcatenation} from './functionality'

app.get('/home', (req, res) => {
    // console.log(randomNumbersConcatenation())
    res.sendFile(path.join(__dirname, '../HTML/index.html'))
})




app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`)
})