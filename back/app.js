const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const uri = process.env.URL_MONGO
const User = require('./db/User.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri, {dbName: 'userJWT'})
// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'Error de conexión a MongoDB'))
// db.once('open', () => {
//     console.log('Conexión exitosa a MongoDB Atlas')
// })

const userTest = new User({
    name: "Alex Sevillano",
    email: "alex@gmail.com",
    password: "alex234"
})


app.get('/', (req, res) => {
    res.json({message: "Estoy corriendo un nuevo servidor"})
})

app.get('/test', async (req, res) => {
    await userTest.save()
    res.json({message: "Usuario creado", userTest})
})

app.post('/user/login', async (req, res) => {
    const {email, password} = req.body
    const userFind = await User.findOne({email: email, password:password})
    
    if (userFind) {
        console.log(userFind)
        res.json(userFind)
    } else {
        res.status(404).json({error: 'Usuario no encontrado'})
    }
})

app.post('/user/register', async (req, res) => {
    const {name, email, password} = req.body;
    const user = {
        name: name,
        email: email,
        password: password
    }
    const newUser = new User(user)
    await newUser.save()
    res.json({message: "Usuario creado", newUser})

})

app.listen(port, (req, res) => {
    console.log("Server on port " + port)
})