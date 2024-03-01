const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.json({message: "Estoy corriendo un nuevo servidor"})
})

app.listen(port, (req, res) => {
    console.log("Server on port " + port)
})