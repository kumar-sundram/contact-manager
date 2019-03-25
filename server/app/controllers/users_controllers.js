const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../middleware/authenticate')
const { User } = require('../models/user')

//post;user register
router.post('/register', (req, res) => {
    const body = req.body
    const user = new User(body)
    //instance methods are called on objects
    user.save()
        .then((user) => {
            res.send({
                user,
                notice: 'successfully registered'
            })
            console.log(user);
        })
        .catch((err) => {
            res.send(err)
        })
})

//login user
router.post('/login', (req, res) => {
    const body = req.body
    //static method is called on the model/class
    User.findByEmailAndPassword(body.email, body.password)
        .then((user) => {
            console.log(user);
            return user.generateToken()
        })
        .then((token) => {
            //res.header('x-auth', token).send()
            res.send({
                token
            })
        })
        .catch((err) => {
            res.status('404').send(err)
        })
})

//user logout
router.delete('/logout', authenticateUser, (req, res) => {
    const tokenData = req.token
    const user = req.user

    var newTokenData = user.tokens.filter(x => x.token != tokenData)
    user.tokens = newTokenData
    user.save()
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            res.send(err)
        })

})

module.exports = {
    usersRouter: router
}