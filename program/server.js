const express = require('express')

const app = express()
const PORT = 8943

app.get('/home', (req, res) => {
    res.status(200).json('welcome')
})




app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`)
})