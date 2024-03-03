const jwt = require('jsonwebtoken')
require('dotenv').config()

function generateAccessToken(user) {
    const onlyUser = {id: user._id}
    console.log(onlyUser)
    return jwt.sign(onlyUser, process.env.SECRET, {expiresIn: '30m'})
}

function validateToken(req, res, next) {
    const accessToken = req.headers['authorization']
    if(!accessToken) res.status(404).json({error: 'Acceso denegado'})

    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
        if (err) {
            console.error(err)
            res.status(404).json({error: 'Acceso denegado, expirado u otro'})
        } else {
            console.log("Entre en la validacion")
            req.user = user
            next()
        }
    })
}

module.exports = { generateAccessToken, validateToken };