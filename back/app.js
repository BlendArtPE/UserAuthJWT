const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const uri = process.env.URL_MONGO
const { generateAccessToken, validateToken } = require('./functions.js');
const User = require('./db/User.js')

const corsOptions = {
    origin: '*', // O bien, especifica los dominios permitidos ['http://dominio1.com', 'http://dominio2.com']
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    exposedHeaders: 'authorization', // Permitir que el cliente acceda al encabezado 'authorization'
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri, {dbName: 'userJWT'})

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
        const accessToken = generateAccessToken(userFind)
        res.header('authorization', accessToken).json({
            message: 'Usuario atenticado',
            token: accessToken
        })
    } else {
        res.status(404).json({error: 'Usuario no encontrado'})
    }
})

app.get('/user/profile', validateToken, async (req, res) => {
    try {
        const userInformation = await User.findById(req.user.id)
        console.log(userInformation)
        res.json(userInformation)  
    } catch (error) {
        console.error("Error de verificación: " + error)
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