const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    
})

app.listen(port, (req, res) => {
    console.log("Server on port " + port)
})